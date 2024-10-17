---
layout: note_series
parent: Learning Notes
study: HTTP 기본 지식
chapter: 4
title: HTTP API 설계
toc: true
reference:
  1:
    author: 김영한
    year: 2021
    platform: Inflearn
    content: 모든 개발자를 위한 HTTP 웹 기본 지식
    content-link: https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC
---

### 클라이언트에서 서버로 데이터를 전송하는 방법

- 주로 두 가지 방법을 사용한다.
    - 쿼리 파라미터(`GET`)를 통해 전송한다.
    - 메시지 바디(`POST`)를 통해 데이터를 전송한다.

---

### HTTP API 데이터 전송은 언제 사용하는가?

1. 서버 to 서버
2. 앱 클라이언트
3. 웹 클라이언트
- 주로 `Content-Type: application/json`을 사용한다.

---

### HTTP API로 설계할 때 URI는?

- 회원을 예시로 들면 아래와 같다.
    - 회원 **목록** `/members` -> **GET**
    - 회원 **등록** `/members` -> **POST**
    - 회원 **조회** `/members/{id}` -> **GET**
    - 회원 **수정** `/members/{id}` -> **PATCH, PUT, POST**
    - 회원 **삭제** `/members/{id}` -> **DELETE**
- 클라이언트는 등록될 리소스의 URI를 모르기 때문에, 서버가 URI 생성 및 관리하며 응답할 때 URI를 반환한다.

---

### 등록을 다룰 때 POST와 PUT의 차이는?

- 파일을 예시로 들면 아래와 같다.
    - 파일 **목록** `/files` -> **GET**
    - 파일 **조회** `/files/{filename}` -> **GET**
    - 파일 **등록** `/files/{filename}` -> **PUT**
    - 파일 **삭제** `/files/{filename}` -> **DELETE**
    - 파일 **대량 등록** `/files` -> **POST**
- `PUT`을 사용하는 경우는 클라이언트가 리소스 URI를 알고 있어야한다.

---

### HTML FORM이 GET과 POST만 지원하는 이유는?

- 아래의 예시를 보면 이해가 쉽다.
    - 회원 **목록** `/members` -> **GET**
    - 회원 **등록 폼** `/members/new` -> **GET**
    - 회원 **등록** `/members/new`, `/members` -> **POST**
    - 회원 **조회** `/members/{id}` -> **GET**
    - 회원 **수정 폼** `/members/{id}/edit` -> **GET**
    - 회원 **수정** `/members/{id}/edit`, `/members/{id}` -> **POST**
    - 회원 **삭제** `/members/{id}/delete` -> **POST**
- `GET`, `POST`만 지원하면 제약이 생기는데 그것을 해결하기 위해 컨트롤 URI를 사용한다.
- 하지만, 최대한 Resource 중심으로 설계한 뒤 어쩔 수 없을때만 사용한다. 사용하게 될때는 동사를 사용한다.
