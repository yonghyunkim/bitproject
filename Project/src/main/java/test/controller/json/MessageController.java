package test.controller.json;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import test.dao.MessageDao;
import test.vo.JsonResult;
import test.vo.Member;
import test.vo.Message;


@Controller
@RequestMapping("/travel/")
public class MessageController {
  @Autowired MessageDao messageDao;

  
  @RequestMapping(path="messageMemberList")
  public Object list(HttpSession session) throws Exception {

    try {
      HashMap<String,Object> map = new HashMap<>();
      Member member = (Member)session.getAttribute("member");
      System.out.println(member.getNo());
      map.put("receiveNo", member.getNo());
      
      return JsonResult.success(messageDao.selectMyMemberList(map));
    
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
	@RequestMapping(path="myMessageList")
	public Object list(int no, HttpSession session) throws Exception {
		
		try {
			HashMap<String,Object> map = new HashMap<>();
			Member member = (Member)session.getAttribute("member");
			int sendMemberNo = member.getNo();
			int receiveMemberNo = no;
			session.setAttribute("receiveMemberNo", receiveMemberNo);
			System.out.println(sendMemberNo);
			System.out.println(receiveMemberNo);
			map.put("receiveNo", no);
			map.put("sendNo", sendMemberNo);
		  return JsonResult.success(messageDao.selectMyMessageList(map));
		  
		} catch (Exception e) {
			return JsonResult.fail(e.getMessage());
		}
	}
	
	@RequestMapping(path="messageAdd")
  public Object add(Message message, HttpSession session) throws Exception {
    
    Member member = (Member)session.getAttribute("member");
    message.setSendMemberNo(member.getNo());
    int receiveMemberNo = (int)session.getAttribute("receiveMemberNo");
    message.setReceiveMemberNo(receiveMemberNo);
    
    try {
    	messageDao.insert(message);
     return JsonResult.success();
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
	@RequestMapping(path="messageAdd2")
  public Object add2(Message message, HttpSession session) throws Exception {
    
    Member member = (Member)session.getAttribute("member");
    message.setSendMemberNo(member.getNo());
    int receiveMemberNo = (int)session.getAttribute("travelMemberNo");
    message.setReceiveMemberNo(receiveMemberNo);
    
    try {
    	messageDao.insert(message);
     return JsonResult.success();
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
}