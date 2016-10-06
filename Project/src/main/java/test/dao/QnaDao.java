package test.dao;

import java.util.List;
import java.util.Map;

import test.vo.Qna;

public interface QnaDao {
  List<Qna> selectList(Map<String,Object> paramMap) throws Exception;
  Qna selectOne(int qno) throws Exception;
  Qna selectOneByPassword(Map<String,Object> paramMap) throws Exception;
  int insert(Qna qna) throws Exception;
  int update(Qna qna) throws Exception;
  int delete(int qno) throws Exception;
}
