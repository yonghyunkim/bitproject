$("#logoutBtn").click(function(event) {
	location.href = "../auth/authApp.html"
});

function ajaxRegistFormList() {
	$.getJSON("formList.json", function(result) {
		if (result.state != "success") {
		       alert("서버에서 데이터를 가져오는데 실패했습니다.")
		       return
		}
		
		var contents = "";
	    var arr = result.data
	    for (var i in arr) {
	    	contents += '<tr>' +
	    	'<td><img src="img/yang/london.jpg" width="350" ></td>' +
	    	"<td><a class='titleLink' href='#' data-no='" + arr[i].no + "'>" + "<h3>" + arr[i].selfIntroduce + "</h3></a></br>" +
	    	 arr[i].writer + '</br>' +
	    	'<img src="img/yang/11101_s.gif">' + arr[i].city + ',' + arr[i].nation + ',' + arr[i].continent + '</br>' +
	    	'<img src="img/yang/2.jpg" width=14px;><a href="#"> 99</a>' +
	    	'<img src="img/yang/20.jpg"width=14px;><a href="#"> 0 </a>' +
	    	'<img src="img/yang/24.jpg"width=14px;><a href="#"> 0 </a></td>' +
	    	'</tr>'
	      }
	    $("#boardTable tbody").html(contents)
	    $(".titleLink").click(function(event) {
	    	  window.location.href = "registFormDetail.html?no=" + $(this).attr("data-no")
	    })
    })
}


//"<td><h3><a class='titleLink' href='#' data-no='" + arr[i].no + "'>" + arr[i].selfIntroduce + "</h3></a></br>" +
/*
contents += '<tr>' +
'<td><img src="img/yang/london.jpg" width="350" ></td>'
'<td><h2>' + arr[i].selfIntroduce + '</h2></br>' +
arr[i].writer + '</br>' +
'<img src="img/yang/11101_s.gif">' + arr[i].city + ',' + arr[i].nation + '</br>' +
'<img src="img/yang/2.jpg" width=14px;><a href="#"> 99</a>' +
'<img src="img/yang/20.jpg"width=14px;><a href="#"> 0 </a>' +
'<img src="img/yang/24.jpg"width=14px;><a href="#"> 0 </a></td>' +
'</tr>'

<tr>
<td><img src="img/yang/london.jpg" width="350" ></td>
<td><h2>안녕하세요 권태임 입니다.</h2></br>
권태임</br>
<img src="img/yang/11101_s.gif"> 서울, 대한민국</br>
<img src="img/yang/2.jpg" width=14px;><a href="#"> 99</a>
<img src="img/yang/20.jpg"width=14px;><a href="#"> 0 </a>
<img src="img/yang/24.jpg"width=14px;><a href="#"> 0 </a></td>
</tr>

contents += "<tr>" +
"<td>" + arr[i].no + "</td>" + 
"<td><a class='titleLink' href='#' data-no='" + arr[i].no + "'>" + arr[i].selfIntroduce + "</a></td>" +
"<td>" + arr[i].styleName + "</td>" +
"<td>" + arr[i].city + "</td>" +
"<td>" + arr[i].writer + "</td>" + 
"</tr>"
*/