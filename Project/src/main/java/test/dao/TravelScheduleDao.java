package test.dao;

import test.vo.TravelMain;

public interface TravelScheduleDao {
	int insert(TravelMain travelMain) throws Exception;
  int update(TravelMain travelMain) throws Exception;
  int delete(TravelMain travelMain) throws Exception;
}








