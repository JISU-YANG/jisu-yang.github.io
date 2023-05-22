---
layout: note_series
parent: Note
series: HTTP 기본 지식
chapter: 7
title: Cache
toc: true
reference:
  1:
    author: 김영한
    year: 2021
    platform: Inflearn
    content: 모든 개발자를 위한 HTTP 웹 기본 지식
    content-link: https://www.inflearn.com/course/http-%EC%9B%B9-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC
---

### 왜 캐시를 사용해야 하는가?

- 캐시 사용으로 네트워크를 적게 사용할 수 있다.
- 네트워크 사용량을 줄일 수 있다.
- 브라우저 로딩 속도가 빨라진다.
- 사용자에게 빠른 경험을 제공할 수 있다.

---

### 캐시 유효시간이 끝나면 무조건 새로 받아와야 하나?

캐시 유효 시간이 초과해도 서버의 데이터가 바뀌지 않았다면, 서버는 304 Not Modified와 함께 헤더 메타 정보만 응답한다. 클라이언트는 이 정보를 바탕으로 캐시의 메타 정보를 갱신하고 캐시에 저장된 데이터를 재사용한다.

---

### 검증 헤더와 조건부 요청 헤더는 무엇인가?

- 검증 헤더: 캐시 데이터와 서버 데이터가 같은지 확인하는 데이터. `Last-Modified`, `ETag` 등이 있다.
- 조건부 요청 헤더: 검증 헤더를 이용하여 조건에 따라 분기하는 헤더. `If-Modified-Since`, `If-None-Match` 등이 있다.

---

### Entity Tag(ETag)란 무엇인가?

ETag는 캐시 데이터에 붙은 고유한 버전 이름이다. 서버는 이 태그를 확인하여 데이터가 같으면 그대로 사용하고, 다르면 새로 받는다.

---

### 캐시 제어 헤더의 종류는?

- `Cache-Control`: 캐시 지시어를 포함하는 헤더.
- `Pragma`: 캐시 제어를 위한 헤더(하위 호환).
- `Expires`: 캐시 유효기간을 정하는 헤더(하위 호환).

---

### 캐시 지시어의 종류는?

- `Cache-Control: max-age`: 캐시 유효 시간을 초 단위로 지정.
- `Cache-Control: no-cache`: 데이터는 캐시해도 되지만, 항상 원본 서버에 검증하고 사용.
- `Cache-Control: no-store`: 데이터에 민감한 정보가 있으면 저장하지 않음.

---

### 프록시 캐시 서버를 위한 지시어

- `Cache-Control: public`: 응답이 public 캐시에 저장되어도 됨.
- `Cache-Control: private`: 응답이 해당 사용자만을 위한 것임, private 캐시에 저장해야 함.
- `Cache-Control: s-maxage`: 프록시 캐시에만 적용되는 유효시간.
- `Age`: 오리진 서버에서 응답 후 프록시 캐시 내에 머문 시간(초).

---

### 확실한 캐시 무효화 응답

- `Cache-Control: no-cache, no-store, must-revalidate`
- `Pragma: no-cache`

이 응답은 오리진 서버와 네트워크 단절 시 오래된 데이터도 보이지 않으며 항상 오류가 나며 매번 검증을 받아야 한다.

---

### 프록시 캐시 서버란?

Origin 서버와 클라이언트 사이의 트래픽을 효율적으로 다루기 위한 캐시를 이용한 서버다.

<img class="cdn-img" id="http-기본-지식-proxy.png"/>
