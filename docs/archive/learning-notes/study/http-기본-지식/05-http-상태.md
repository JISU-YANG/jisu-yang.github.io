---
layout: note_series
parent: Learning Notes
study: HTTP 기본 지식
chapter: 5
title: HTTP 상태
toc: true
reference:
  1:
    author: 김영한
    year: 2021
    platform: Inflearn
    content: 모든 개발자를 위한 HTTP 웹 기본 지식
    content-link: https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC
---
### HTTP 상태는 어떻게 확인할까?

HTTP 상태 코드는 요청이 어떤 상태에 있는지 알려준다. 다음의 코드들로 상태를 알 수 있다.

- 1xx (informationnal): 요청이 서버에 도착하고 처리 중임을 알린다.
- 2xx (Successful): 요청이 정상적으로 처리되었다는 것을 알린다.
- 3xx (Redirection): 요청을 완료하기 위해 추가 행동이 필요하다는 것을 알린다.
- 4xx (Client Error): 클라이언트 오류, 잘못된 문법 등으로 서버가 요청을 처리할 수 없다는 것을 알린다.
- 5xx (Server Error): 서버 오류로 인해 요청을 처리하지 못했다는 것을 알린다.

---

### 2xx 상태 코드는 어떤 종류가 있을까?

2xx 상태 코드는 다음과 같이 나타낸다.

- 200 OK: 요청이 성공적으로 처리되었다는 것을 알린다.
- 201 Created: 요청이 성공적으로 처리되어 새로운 리소스가 생성되었다는 것을 알린다. 이 때, `Location` 헤더를 반환한다.
- 202 Accepted: 요청이 서버에 접수되었지만, 아직 처리되지 않았다는 것을 알린다.
- 204 No Content: 요청이 성공적으로 처리되었지만, 응답 본문에 보낼 데이터가 없다는 것을 알린다.

---

### 리다이렉트란 무엇인가?

웹 브라우저는 3xx 응답 결과에 `Location` 헤더가 있으면, 해당 위치로 자동 이동한다. 이를 리다이렉션(Redirection)이라고 한다. 리다이렉션에는 영구 리다이렉션, 일시 리다이렉션, 특수 리다이렉션 등 여러 종류가 있다.

---

### 3xx 상태 코드는 어떤 종류가 있을까?

3xx 상태 코드는 다음과 같다.

- 300 Multiple Choices (기타 리다이렉션)
- 301 Moved Permanently (영구 리다이렉션)
- 302 Found (일시 리다이렉션)
- 303 See Other (일시 리다이렉션)
- 304 Not Modified (기타 리다이렉션)
- 307 Temporary Redirect (일시 리다이렉션)
- 308 Permanent Redirect (영구 리다이렉션)

---

### 4xx와 5xx 상태 코드는 무엇을 의미하나?

4xx나 5xx 상태 코드는 클라이언트의 요청이 서버로부터 오류 응답을 받았다는 것을 알린다.

- 401 Unauthorized: 클라이언트가 해당 리소스에 대한 인증이 필요함(로그인이나 권한문제)
- 403 Forbidden: 서버가 요청을 이해했지만 승인을 거부함(인증은 됐지만 권한문제)
- 404 Not Found: 요청 리소스를 찾을 수 없음(또는 권한이 부족한 리소스에 접근하거나 숨기고 싶을때)
- 500 Internal Server Error: 서버 문제로 오류발생
- 503 Service Unavailable: 서비스 이용불가  (일시적이거나 예정된 작업으로 잠시 요청을 처리할 수 있다. 헤더 필드로 복구예상시간을 보내기도한다.)