---
layout: note_series
parent: Learning Notes
study: Spring Beginner
chapter: 2
title: Spring MVC
toc: true
reference:
  1: 
    author: Eric 튜터, Jinny 튜터, Jen 튜터
    year: 2024
    platform: 스파르타코딩클럽
    content: Spring Master 1주차
    content-link: https://online.spartacodingclub.kr/
---

### MVC 디자인 패턴
**디자인 패턴**은 효율적인 소프트웨어 설계를 위해 반복해서 사용할 수 있게 패턴화한 것을 말한다.  
그중 **MVC 디자인 패턴**은 다음과 같이 구성된다:

- **Model**: 데이터와 비즈니스 로직을 담당한다.
- **View**: 사용자 인터페이스를 담당한다.
- **Controller**: Model과 View 사이의 상호작용을 조정하고 제어한다.

---

### Spring MVC

Spring에서는 **DispatcherServlet**을 사용해 **Front Controller 패턴**을 구현하여 API 요청을 효율적으로 처리한다.  
Servlet이란 Java를 사용해 동적 페이지를 생성하는 서버 프로그램 또는 사양을 의미한다.

---

### Front Controller 패턴의 동작 과정

1. 클라이언트에서 HTTP 요청이 들어오면, **DispatcherServlet**이 요청을 분석한다.
2. 분석된 데이터를 기반으로 **HandlerMapping**을 통해 해당 요청을 처리할 **Controller**를 찾는다.
3. **Controller**는 요청을 처리한 후, 그 결과로 **Model**과 **View** 데이터를 DispatcherServlet에 전달한다.
4. **ViewResolver**가 Model을 적용하여 최종 **View**를 생성하고, 이를 클라이언트에게 응답으로 전달한다.

---

### Response 트렌드의 변화
과거에는 서버가 클라이언트에게 **HTML**을 직접 제공했지만, 최근에는 다음과 같은 방식으로 변화하고 있다.

- 클라이언트는 **데이터베이스에서 가져온 데이터**를 클라이언트 측의 JavaScript를 통해 화면에 표시한다.
- 프론트엔드와 백엔드가 느슨하게 **분리**되어, 개발되고 유지보수할 수 있는 구조로 발전하고 있다.
- 서버는 HTML이 아닌, 특정한 정보를 **JSON** 형식으로 제공하는 것이 일반적이다.

---

###  Jackson
**Jackson**은 **JSON 데이터**를 처리하기 위한 Java 라이브러리이다.

- 객체(Object)를 **JSON** 타입의 문자열로 변환한다.
- **JSON** 타입의 문자열을 객체(Object)로 변환한다.

---

### HTTP 데이터를 객체로 처리하는 방법

Spring에서는 클라이언트가 보낸 데이터를 객체로 변환하기 위해 다음과 같은 어노테이션을 사용한다.

- **@ModelAttribute**와 **@RequestParam**은 타입에 따라 자동으로 데이터를 객체로 매핑해준다. 생략 가능하다.
- **@RequestBody**는 **JSON** 데이터를 객체로 변환해야 할 때 사용한다.

---

## 실습자료
### GitHub
- [Controller 이해하기](https://github.com/JISU-YANG/study-spring-mvc/commit/021ed980e17db97de0b3f1e74a2a85d623e01cf1)
- [정적페이지와 동적페이지](https://github.com/JISU-YANG/study-spring-mvc/commit/badcd4a31cc7392012d3f3e964f86367f99bc694)
- [데이터를 클라이언트에 반환하는 방법](https://github.com/JISU-YANG/study-spring-mvc/commit/9d8754f8bec92c74f555aaf22af1055e4046095b)
- [Jackson이란 무엇일까?](https://github.com/JISU-YANG/study-spring-mvc/commit/67809d5c592e29f319746ad290534706ef7fa376)
- [Path Variable과 Request Param](https://github.com/JISU-YANG/study-spring-mvc/commit/6fa1dc99170538fcdfbde74c5c98d22a3f91e82a)
- [HTTP 데이터를 객체로 처리하는 방법](https://github.com/JISU-YANG/study-spring-mvc/commit/572ac663b1e70baa07c60451e0db6a5a04df02ec)
