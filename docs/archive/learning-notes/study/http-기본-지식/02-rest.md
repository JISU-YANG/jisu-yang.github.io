---
layout: note_series
parent: Learning Notes
study: HTTP 기본 지식
chapter: 2
title: REST
toc: true
reference:
  1:
    author: 김영한
    year: 2021
    platform: Inflearn
    content: 모든 개발자를 위한 HTTP 웹 기본 지식
    content-link: https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC
---

### URL, URN, URI의 차이점

- `URL`은 자원의 위치를 나타낸다.
- `URN`은 자원의 이름을 나타내는데, 이해하기 어려워서 보편적으로 사용되지 않았다.
- `URI`는 URL과 URN을 모두 포함하는 개념이다.
- 표준 URI 형식은 `scheme://[userinfo@]host[:port][/path][?query][#fragment]` 이다.

---

### 웹 브라우저의 연결 흐름

1. 웹 브라우저는 HTTP 메시지를 생성한다.
2. 생성된 메시지는 SOCKET 라이브러리를 통해 TCP/UDP에 전달된다.

---

### HTTP에 유리한 구조

- 클라이언트는 사용자 인터페이스를, 서버는 비즈니스 로직을 담당하면 좋다.
- 이렇게 구조를 분리하면 다양한 환경에 대응하거나, 트래픽 증가에 따른 서버 증설을 효율적으로 할 수 있다.

---

### STATE의 종류

- `Stateful`은 이전 상태를 보존하는 특징을 가진다.
- `Stateless`는 필요할 때만 연결을 만들어, 상태를 유지하지 않는다.
- Stateless는 서버를 수평 확장하기 용이하고, 응답 서버를 쉽게 변경할 수 있어 장점이 더 많다.
- 단점으로는 매번 요청과 응답을 해야하므로 데이터 전송량이 늘어난다.

---

### STATELESS의 특징

- Stateless는 HTTP의 기본 모델이며, 빠른 응답속도를 가지고, 서버 자원을 효율적으로 사용할 수 있다.
- 하지만 매번 TCP/IP 연결을 새로 맺어야 하므로 추가 시간이 들 수 있다.
- 이 문제는 HTTP 지속 연결(Persistent Connections)로 해결되었다.

---

### HTTP MESSAGE란?

- HTTP 메시지는 HTML, 텍스트, 이미지, 비디오, 음성, 파일, JSON, XML 등 다양한 파일을 전송할 수 있다.
- 서버 간의 데이터 교환에도 주로 HTTP를 사용한다.

---

### HTTP MESSAGE의 구조

- HTTP 메시지는 Start-Line, Header, Empty-Line(CRLF), Message-Body로 구성된다.
- Start-Line은 요청 또는 응답을 시작하는 줄로, 요청 메서드(GET, POST, PUT, DELETE 등)와 HTTP 버전 정보를 포함한다.
- Header는 HTTP 전송에 필요한 모든 부가 정보를 담고 있다.
