---
layout: note_series
parent: Learning Notes
study: Spring Advanced
chapter: 4
title: API 예외처리
toc: true
reference:
  1: 
    author: 최원빈
    year: 2023
    platform: 스파르타코딩클럽
    content: 웹개발의 봄 Spring
    content-link: https://spartacodingclub.kr/online/spring_v2
---

### API 예외처리란?

웹 애플리케이션에서 에러가 발생할 경우, 클라이언트와 서버가 이를 제대로 이해하고 대응할 수 있어야 한다.  
API 예외 처리를 통해 오류 정보를 명확히 전달하여 문제를 신속하게 해결할 수 있다.

Spring에서는 **AOP**를 활용해 관심사를 분리하여 에러를 효율적으로 처리할 수 있다. 
핵심 로직과 에러 처리 로직을 분리하여 관리할 수 있으며, 예외 상황을 보다 일관되게 처리할 수 있다.

---

## 실습자료
### GitHub
- [@ExceptionHandler 적용](https://github.com/JISU-YANG/study-my-select-shop/commit/c23c91cff2da94230bc74b6fccb0550356b89c2f)
- [@ControllerAdvice 적용](https://github.com/JISU-YANG/study-my-select-shop/commit/2b8a95249000e1341548d3b32822782c07aba6d5)
- [Error 메시지 관리하기](https://github.com/JISU-YANG/study-my-select-shop/commit/41ea4ad78d3197a83c2c1535875266c3aceef0e1)