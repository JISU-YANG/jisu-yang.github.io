---
layout: note_series
parent: Learning Notes
study: Spring Beginner
chapter: 5
title: 3 Layer Architecture
toc: true
reference:
  1:
    author: 최원빈
    year: 2023
    platform: 스파르타코딩클럽
    content: 웹개발의 봄 Spring
    content-link: https://spartacodingclub.kr/online/spring_v2
---
### 3 Layer Architecture

JDBC를 직접 사용하는 경우, 한 클래스 내에 많은 코드가 포함되어 유지보수가 어려워진다.  
이를 해결하기 위해 서버에서 수행하는 역할을 **3개의 계층**으로 나눈다.

1. **Controller**: 클라이언트의 요청을 받아 처리하는 역할을 한다.
2. **Service**: 비즈니스 로직을 처리하는 계층이다.
3. **Repository**: 데이터베이스와의 상호작용을 담당하며, 주로 CRUD 작업을 처리한다.

이렇게 계층을 나누면 코드의 재사용성, 유지보수성, 확장성이 크게 향상된다.

--- 

## 실습자료
### GitHub
- [역할 분리하기](https://github.com/JISU-YANG/study-spring-memo/commit/3f215c1abbca7035108475e58c9ed6433ece5130)