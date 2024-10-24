---
layout: note_series
parent: Learning Notes
study: Spring Intermediate
chapter: 5
title: RestTemplate & OPEN API
toc: true
reference:
  1:
    author: 최원빈
    year: 2023
    platform: 스파르타코딩클럽
    content: 웹개발의 봄 Spring
    content-link: https://spartacodingclub.kr/online/spring_v2
---

### RestTemplate이란 무엇일까?
서비스 개발을 진행하다 보면, 라이브러리만으로는 구현하기 어려운 기능들이 많다.  
예를 들어, 회원가입 과정에서 사용자의 주소 정보를 받아야 할 때, 이를 직접 구현하면 많은 시간과 비용이 든다.  
이럴 때 **카카오**와 같은 외부 API 제공자의 **주소 검색 API**를 사용하면, 주소 검색 기능을 간편하게 구현할 수 있다.

**RestTemplate**은 이러한 외부 API와의 통신을 쉽게 처리하기 위해 Spring에서 제공하는 HTTP 클라이언트 라이브러리이다.  
이를 통해 외부 API 서버와 HTTP 요청 및 응답을 주고받을 수 있다.

---

## 실습자료
### GitHub
- [Client: RestTemplate Get 요청](https://github.com/JISU-YANG/spring-resttemplate-client/commit/8d7da9abd306af2b0f8f5bbc9bd499e62bee3706)
- [Server: RestTemplate Get 요청](https://github.com/JISU-YANG/spring-resttemplate-server/commit/13b8e2df211e23965d1430410bfad893942d9992)
- [Client: RestTemplate POST 요청](https://github.com/JISU-YANG/spring-resttemplate-client/commit/8c44a2e8680b7ef38516ea1c7bd68cac8a32817c)
- [Server: RestTemplate POST 요청](https://github.com/JISU-YANG/spring-resttemplate-server/commit/e70c8a30c12feabc015af48adcf776f8c930f577)
- [Client: RestTemplate Exchange 요청](https://github.com/JISU-YANG/spring-resttemplate-client/commit/c2e63eaf3e87945d086c90eee55feb8d72044ad2)
- [Server: RestTemplate Exchange 요청](https://github.com/JISU-YANG/spring-resttemplate-server/commit/6f5c951e74c1d30ba3c8318309e3aa75897bb60e)
- [Client: Naver Open API 구현](https://github.com/JISU-YANG/spring-resttemplate-client/commit/bb0131ca1896f642d05b9c922fc9a08e017bdd79)