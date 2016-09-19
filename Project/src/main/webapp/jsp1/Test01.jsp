<%@ page language="java" 
		contentType="text/plain; charset=UTF-8"
    	pageEncoding="UTF-8"%>
 안녕하세요! Hello! Hola!
<%--JSP주석 : 출력문으로 바뀌지 않는다. JSP 엔진이 무시한다.
JSP 구동원리                 파일이름은 서버마다 다르다.
[hello.jsp]----------->[hello_jsp.java]   ---------->[hello_jsp.class]
              ^								^
              |	                            |
            JSp엔진						자바 컴파일러
            
 => 웹브라우저는 JSP의 실행을 요청한다.
 => 서블릿컨테이너는 JSP의 서블릿 (객체)클래스를 찾는다.
	 => 없다면, .jsp를 해석하여 .java 파일을 생성하고, 컴파일한다.
	 => 있다 하더라도 JSP가 갱신되었다면 다시 .jsp를 해석하여 .java파일을 생성하고, 컴파일한다.
	 => 클래스의 인스턴스를 생성한다.
 => JSP의 서블릿 객체를 실행한다.

* JSP의 자바 소스 파일
=> 서블릿 컨테이너마다 그 위치가 다르다.
   어떤 컨테이너는 컴파일 후 소스 파일을 삭제하기도 한다.
   
=> 이클립스 톰캣 테스용 배피 폴더 기준
	$톰캣테스트배치폴더 또는 $톰캣홈폴더/work/...

 --%>