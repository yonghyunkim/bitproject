package test.controller.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import test.dao.MemberDao;
import test.dao.TravelLocationDao;
import test.dao.TravelMainDao;
import test.dao.TravelMyStyleDao;
import test.dao.TravelScheduleDao;
import test.vo.JsonResult;
import test.vo.Member;
import test.vo.TravelMain;


@Controller
@RequestMapping("/travel/")
public class TravelMainController {
  @Autowired MemberDao memberDao;
  @Autowired TravelMainDao travelMainDao;
  @Autowired TravelLocationDao travelLocationDao;
  @Autowired TravelMyStyleDao travelMystyleDao;
  @Autowired TravelScheduleDao travelScheduleDao;
  TravelMain travelMain = new TravelMain();

  
  @RequestMapping(path="scheduleList")
  public Object list(HttpSession session) throws Exception {

    try {
      HashMap<String,Object> map = new HashMap<>();
      travelMain.setTravelMainNo((Integer)session.getAttribute("travelPostNo"));
      map.put("travelPostNo", travelMain.getTravelMainNo());
      System.out.println(travelMain.getTravelMainNo());
      
      return JsonResult.success(travelScheduleDao.selectMySchedule(map));
    
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }
  
  
  @RequestMapping(path="travelMainAdd")
  public Object add(TravelMain travelMain, String schedule, HttpSession session) throws Exception {
    
    Member member = (Member)session.getAttribute("member");
    travelMain.setMemberNo(member.getNo());
    
    System.out.println(travelMain);

    List<TravelMain> list = new Gson().fromJson(schedule, new TypeToken<List<TravelMain>>(){}.getType());
    
    int index = list.size();
    System.out.println(index);

    
    try {
     travelMainDao.insert(travelMain);
      System.out.println(travelMain);
      
      travelMystyleDao.insert(travelMain);
      System.out.println(travelMain);
      
      for (int i = 0; i < list.size(); i++) {
        
        travelMain.setContinent(list.get(i).getContinent());
        travelMain.setNation(list.get(i).getNation());
        travelMain.setCity(list.get(i).getCity());
        travelMain.setLatitude((float)list.get(i).getLatitude());
        travelMain.setLongitude((float)list.get(i).getLongitude());
        
        System.out.println(travelMain);
        
        travelLocationDao.insert(travelMain);
        
        travelMain.setStartDate(list.get(i).getStartDate1());
        travelMain.setEndDate(list.get(i).getEndDate1());
        
        System.out.println(travelMain);
        
        travelScheduleDao.insert(travelMain);
      }
      return JsonResult.success();
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }



  @RequestMapping(path="travelMainUpdate")
  public Object update(TravelMain travelMain, String schedule) throws Exception {
    
    List<TravelMain> list = new Gson().fromJson(schedule, new TypeToken<List<TravelMain>>(){}.getType());
    int index = list.size();
    System.out.println(index);
    System.out.println(list);
    
    try {
      
      travelMainDao.update(travelMain);
      System.out.println(travelMain);
      
      travelMystyleDao.update(travelMain);
      System.out.println(travelMain);
      
      for (int i = 0; i < list.size(); i++) {
        
      travelMain.setLocationNo(list.get(i).getLocationNo());
      travelMain.setContinent(list.get(i).getContinent());
      travelMain.setNation(list.get(i).getNation());
      travelMain.setCity(list.get(i).getCity());
      System.out.println(travelMain);
      travelLocationDao.update(travelMain);
      
      travelMain.setScheduleNo(list.get(i).getScheduleNo());
      travelMain.setTravelMainNo(list.get(i).getTravelMainNo());
      travelMain.setLocationNo(list.get(i).getLocationNo());
      travelMain.setStartDate(list.get(i).getStartDate1());
      travelMain.setEndDate(list.get(i).getEndDate1());
      System.out.println(travelMain);
      travelScheduleDao.update(travelMain);
      }
      return JsonResult.success();
      
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }

  @RequestMapping(path="travelMainDelete")
  public Object delete(TravelMain travelMain) throws Exception {

    try {
      travelMystyleDao.delete(travelMain);
      travelScheduleDao.delete(travelMain);
      travelLocationDao.delete(travelMain);
      travelMainDao.delete(travelMain);
      return JsonResult.success();
    } catch (Exception e) {
      return JsonResult.fail(e.getMessage());
    }
  }

}
