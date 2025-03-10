---
layout: note_shorts
parent: Learning Notes
category: ETC
title: 주요 HTTP 메서드
toc: true
---

## 주요 HTTP 메소드
HTTP 메서드는 클라이언트와 서버 간 통신에서 요청의 목적을 정의하는데 사용된다.
GET 메서드는 예외적으로 HTTP BODY에 데이터를 담지 않고 Query String으로 전달한다.

| 메서드    | 설명                   |
|--------|----------------------|
| GET    | 리소스를 읽는다.            |
| POST   | 리소스를 생성하거나 작업을 수행한다. |
| PUT    | 리소스를 완전히 대체한다.       |
| PATCH  | 리소스의 일부만 수정한다.       |
| DELETE | 리소스를 삭제한다.           |

---

## 멱등
### 멱등성이란 무엇인가?
같은 요청을 여러번 보내도 서버 상태의 변화가 없음을 보장한다.
일관성과 예측 가능성을 제공하여 안정성과 신뢰성을 높이기 때문에 멱등한 설계는 중요하다.
특히 `GET`, `PUT`, `DELETE`는 멱등해야한다.

---

### 멱등성 이해하기
`GET`은 리소스를 조회하고, `PUT`은 리소스를 대체하기 때문에 멱등하다는 것을 쉽게 이해했다.

**Q1.** 하지만 `DELETE`는 처음 요청에서 해당 리소스가 존재한다면 삭제처리가 될 것이고,
두번째 요청에서는 존재하지 않으니 삭제 처리가 안 될 것이다.

**A1.** 멱등성은 요청의 결과가 서버의 상태를 변경하지 않는다의 의미이지, 
응답이 동일하다는 것을 보장하는 것은 아니다.
최종 서버의 상태는 리소스가 삭제된 상태로 동일하다.

---

**Q2.** 요청에서 요구 했던 대상 리소스의 변화 상태라고 이해한다면, `PATCH`는 왜 멱등하지 않는가?

**A2.** 상황에 따라 멱등할 수도 있다.
예를 들어 특정한 값으로 수정을 한다면 리소스의 최종 상태가 동일하므로 멱등하다고 할 수 있다.
하지만 예를 들어 조회수를 증가시키는 `PATCH` 요청의 경우 요청을 반복해도 다른 결과가 발생하기 때문에 멱등하지 않다.
