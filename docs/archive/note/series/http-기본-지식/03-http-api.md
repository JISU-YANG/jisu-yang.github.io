---
layout: note_series
parent: Note
series: HTTP 기본 지식
chapter: 3
title: HTTP API
toc: true
reference:
  1:
    author: 김영한
    year: 2021
    platform: Inflearn
    content: 모든 개발자를 위한 HTTP 웹 기본 지식
    content-link: https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC
---
### URI 설계할 때 중요한 점

- 가장 중요한 것은 리소스의 의미를 잘 나타내는 것이다.
- URI의 계층 구조를 활용한다.
- 행위보다는 리소스를 먼저 식별하고, URI에 맵핑한다.
- 나머지는 컨트롤 URI(행위)로 처리한다.
- 상위 계층을 컬렉션으로 보고 복수 단어 사용을 권장한다.

---

### HTTP 메소드란?

1. `GET` : 리소스를 조회한다.
2. `POST` : 요청 데이터를 처리하거나, 주로 등록에 사용한다. 프로세스 상태가 변경되는 경우에도 사용한다.
3. `PUT` : 리소스를 대체한다. 해당 리소스가 없으면 생성한다. (완전히 대체, 덮어쓰기)
4. `DELETE` : 리소스를 삭제한다.
5. `PATCH` : 리소스를 부분 변경한다. (수정하기)

---

### HTTP 메소드의 특징

- `POST`는 대략적인 지정, `PUT`은 구체적인 지정을 한다.
- 값의 부분변경은 `PUT`이 아니라 `PATCH`로 (원본 변경)한다.

---

### HTTP API의 속성

1. `안전(Safe)` : 호출해도 리소스를 변경하지 않는다. (해당 리소스만 고려한다. ex) GET, HEAD)
2. `멱등(Idempotent)` : 호출을 여러번해도 결과가 같다. (외부요인으로 중간에 리소스가 변경되는 것까지 고려하지 않는다. ex) GET, PUT,DELETE)
3. `캐시가능(Cacheable)` : 응답결과를 캐시해서 사용해도 된다. (GET, HEAD, POST, PATCH가 가능하지만 캐시키 고려하는게 쉽지 않아서 GET, HEAD만 주로 사용한다.)
