$("#searchaddBtn").click (function(event){
	var registForm = {
			city: $("#searchCity").val(),
			startDate: $("#searchStDt").val(),
			endDate: $("#searchEdDt").val()
	}
	console.log(registForm)
	ajaxSearchList(registForm)
});

function checkToNo(no) {
	$.getJSON(serverAddr + "/travel/formMyList.json", {no: no}, function(obj) {
		var result = obj.jsonResult
		
		if (result.state == "success") {
			window.location.href = "travelerform.html?no=" + no
		} else {
			window.location.href = "newdetail.html?no=" + no
		}
    })                  
}

function ajaxRegistFormList() {
	$.getJSON(serverAddr + "/travel/formList.json", function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
		       alert("서버에서 데이터를 가져오는데 실패했습니다.")
		       return
		}
		var contents = "";
	    var arr = result.data
	    for (var i in arr) {
	    	if (i % 3 == 0) {
	    		contents += '<tr style="padding: 10px;">'
	    	}
	    	contents += 
	    		'<td style="border: 1px solid #DDDDDD; padding: 20px; background-color: white">' +
	    		'<div style="padding: 0px; border: 0px solid #C0C0C0;">' +
	    		'<img src="../upload/' + arr[i].travelPhoto + '" style="width:280px; height: 280px;">' +
	    		'<div style="background-color: white; color: black;">' +
	    		'<div style="padding:5px; font-size: large; font-weight: bold; color:#337AB7; padding-top: 5px;">' + 
	    		'<a class="titleLink" href="#" data-memno="' + arr[i].memberNo + '" data-no="' + arr[i].travelMainNo + '">' + arr[i].title + '</a></div>' +
	    		'<div style="width:50px; height:50px; border-radius: 25px 25px 25px 25px; overflow: hidden;">' +
	    		'<img src="../upload/' + arr[i].myPhoto + '"></div>' +
	    		'<div style="padding:5px; font-weight: bold; color:black;">' + arr[i].writer + '</div>' +
	    		'<div style="padding:0px 5px 0px 5px; font-size: small;">' +
	    		'<span><img src="img/worldwide.png" style="width: 15px; height: 15px;"></span>' +
	    		'<span>' + arr[i].city + '</span>, <span>' + arr[i].startDate + '</span> ~ <span>' + arr[i].endDate + '</span></div>' +
	    		'</div>' +
	    		'</div>' +
	    		'</td>'
	    		if (i % 3 != 2) {
	    			contents += '<td style="width: 15px;"></td>'
	    		}
	    		
	    		if (i % 3 == 2) {
		    		contents += '</tr>' +
		    					'<tr><td style="height: 15px; border="1px solid black;"><td></td><td></td><td></td></tr>'
		    	}
	      }
	    $(".changallery").html(contents)
	    $(".titleLink").click(function(event) {
	    	var no = $(this).attr("data-no")
	    	console.log(no)
	    	checkToNo(no)
	    })
    })
}

function ajaxSearchList(registForm) {
	$.post(serverAddr + "/travel/searchList.json", registForm, function(obj) {
		var result = obj.jsonResult
		if (result.state != "success") {
		       alert("서버에서 데이터를 가져오는데 실패했습니다.")
		       return
		}
		var contents = "";
	    var arr = result.data
	    for (var i in arr) {
	    	if (i % 3 == 0) {
	    		contents += '<tr style="padding: 10px;">'
	    	}
	    	contents += 
	    		'<td style="border: 1px solid #DDDDDD; padding: 20px; background-color: white">' +
	    		'<div style="padding: 0px; border: 0px solid #C0C0C0;">' +
	    		'<img src="../upload/' + arr[i].travelPhoto + '" style="width:280px; height: 280px;">' +
	    		'<div style="background-color: white; color: black;">' +
	    		'<div style="padding:5px; font-size: large; font-weight: bold; color:#337AB7; padding-top: 5px;">' + 
	    		'<a class="titleLink" href="#" data-memno="' + arr[i].memberNo + '" data-no="' + arr[i].travelMainNo + '">' + arr[i].title + '</a></div>' +
	    		'<div style="width:50px; height:50px; border-radius: 25px 25px 25px 25px; overflow: hidden;">' +
	    		'<img src="../upload/' + arr[i].myPhoto + '"></div>' +
	    		'<div style="padding:5px; font-weight: bold; color:black;">' + arr[i].writer + '</div>' +
	    		'<div style="padding:0px 5px 0px 5px; font-size: small;">' +
	    		'<span><img src="img/worldwide.png" style="width: 15px; height: 15px;"></span>' +
	    		'<span>' + arr[i].city + '</span>, <span>' + arr[i].startDate + '</span> ~ <span>' + arr[i].endDate + '</span></div>' +
	    		'</div>' +
	    		'</div>' +
	    		'</td>'
	    		if (i % 3 != 2) {
	    			contents += '<td style="width: 15px;"></td>'
	    		}
	    		
	    		if (i % 3 == 2) {
		    		contents += '</tr>' +
		    					'<tr><td style="height: 15px; border="1px solid black;"><td></td><td></td><td></td></tr>'
		    	}
	      }
	    $(".changallery").html(contents)
	    $(".titleLink").click(function(event) {
	    	var no = $(this).attr("data-no")
	    	console.log(no)
	    	checkToNo(no)
	    })
    })
}


function ajaxInviteList() {
	$.getJSON(serverAddr + "/travel/invlist.json", function(result) {
		if (result.state != "success") {
//		       alert("서버에서 데이터를 가져오는데 실패했습니다.")
		       return
		}
		console.log(result)
		var contents = "<h4>동행요청</h4>";
	    var arr = result.data
	    for (var i in arr) {
	    	contents +=
	    		'<pre class="prettyprint">'+'<img  class="img-circle" src="../upload/'+arr[i].invitePhoto+'"style="width:50px; height:40">'+"&nbsp&nbsp;"+
	    		arr[i].inviteName+" 님이 동행요청을 하셨습니다. &nbsp;"+
	    		'<button type="button" data-no="'+arr[i].inviteBoardNo+'" data-no2="'+arr[i].memberNo2+'"class="btn btn-default btn-sm" id="invitedetail">상세페이지</button>'+
//	    		'<a  onclick="detailPage("'+arr[i].inviteNo+'")" class="btn btn-default btn-sm fadeandscale_open"  >상세 페이지3</a>'+
				'<button type="button" data-no="'+arr[i].inviteNo+'" data-no2="'+arr[i].memberNo2+'" data-no3="'+arr[i].memberNo+'" class="btn btn-default btn-sm" id="inviteadd">수락</button><button data-no="'+arr[i].inviteNo+'" class="btn btn-default btn-sm" id="inviterefuse" value="sdfds">거절</button>'
				+'</pre>'
	    		
	    		/*'<ul>' +
	    		'<li><a class="titleLink" href="#" data-memno="' + arr[i].memberNo + '" data-no="' + arr[i].no + '">' +
	    		'<img src="' + arr[i].myPhoto + '"></a>' +
	    		'<div class="cycle-overlay">' +
	    		arr[i].writer + '<br>' +
	    		arr[i].continent + ',' + arr[i].nation + ',' + arr[i].city + '<br>' +
	    		arr[i].startDate + '~' + arr[i].endDate + '</div></li>' +
	    		'</ul>'*/
	      }
	    
	    $("#fadeandscale>h4").html(contents)
	    
	    
	     $(document).on("click","#invitedetail",function(event) {
			var no=$(this).attr('data-no')
			console.log(no)
			window.location.href = "newdetail.html?no="+$(this).attr('data-no');
		    
			});
	    
	    
	    
	    $(document).on("click","#inviteadd",function(event) {
			var no=$(this).attr('data-no')
			var no2=$(this).attr('data-no2')
			var no3=$(this).attr('data-no3')
			console.log(no)
			console.log(no2)
			$.post(serverAddr + "/travel/invagree.json?no="+no, {no:no,no2:no2,no3:no3}, function(obj) {
				var result = obj.jsonResult
				console.log(no)
				//location.reload(true)
				history.go(0)
		    })  
			});
	    
	    $(document).on("click","#inviterefuse",function(event) {
	    	
			var no=$(this).attr('data-no')
			console.log(no)
			$.post(serverAddr + "/travel/invrefuse.json?no="+no, {no:no}, function(obj) {
				var result = obj.jsonResult
				console.log(no)
				//location.reload(true)
				history.go(0)
		    })  
		    
			});
    })
}

function detailPage(a){
	console.log(a)
	window.location.href = "newdetail.html?no="+$(this).attr('data-no');
	
}
function ajaxAgreeInviteList() {
	$.getJSON(serverAddr + "/travel/invagreelist.json", function(result) {
		if (result.state != "success") {
//		       alert("서버에서 데이터를 가져오는데 실패했습니다.")
		       return
		}
		console.log(result)
		var contents = "<h4>수락한동행</h4>";
	    var arr = result.data
	    for (var i in arr) {
	    	contents +=
	    		'<pre class="prettyprint">'+'<img  class="img-circle" src="../upload/'+arr[i].invitePhoto+'"style="width:50px; height:40">'+"&nbsp&nbsp;"+
	    		arr[i].inviteName+" 님과 동행입니다. &nbsp;"+
				'<button style="float:right" data-no="'+arr[i].inviteNo+'" class="btn btn-default btn-sm" id="inviterefuse" value="sdfds">거절</button>'
				+'</pre>'	    		
	    		
	    		/*'<ul>' +
	    		'<li><a class="titleLink" href="#" data-memno="' + arr[i].memberNo + '" data-no="' + arr[i].no + '">' +
	    		'<img src="' + arr[i].myPhoto + '"></a>' +
	    		'<div class="cycle-overlay">' +
	    		arr[i].writer + '<br>' +
	    		arr[i].continent + ',' + arr[i].nation + ',' + arr[i].city + '<br>' +
	    		arr[i].startDate + '~' + arr[i].endDate + '</div></li>' +
	    		'</ul>'*/
	      }
	    
	    $("#fadeandscale>h5").html(contents)
	    
	    $(document).on("click","#inviteadd",function(event) {
			var no=$(this).attr('data-no')
			console.log(no)
			$.post(serverAddr + "/travel/invagree.json?no="+no, {no:no}, function(obj) {
				var result = obj.jsonResult
				console.log(no)
				//location.reload(true)
				history.go(0)
		    })  
		    
			});
	    
	    $(document).on("click","#inviterefuse",function(event) {
			var no=$(this).attr('data-no')
			console.log(no)
			$.post(serverAddr + "/travel/invrefuse.json?no="+no, {no:no}, function(obj) {
				var result = obj.jsonResult
				console.log(no)
				//location.reload(true)
				history.go(0)
		    })  
		    
			});
    })
}



