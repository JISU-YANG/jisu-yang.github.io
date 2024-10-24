---
layout: note_series
parent: Learning Notes
study: Spring Intermediate
chapter: 1
title: Bean
toc: true
reference:
  1:
    author: 최원빈
    year: 2023
    platform: 스파르타코딩클럽
    content: 웹개발의 봄 Spring
    content-link: https://spartacodingclub.kr/online/spring_v2
---

### Bean을 수동으로 등록하는 방법

**Bean을 수동으로 등록하는 이유**는 기술적인 문제를 해결하거나 공통적인 처리가 필요한 경우, 객체의 수동 등록이 유리하기 때문이다.  
예를 들어, 공통적인 로그 처리나 같은 비즈니스 로직을 지원하는 부가적이고 공통적인 기능을 처리하는 **기술 지원 Bean**은 수동 등록하는 것이 좋다.  
수동으로 등록한 Bean은 문제가 발생했을 때 해당 위치를 정확히 파악할 수 있다는 장점이 있다.

수동으로 Bean을 등록하려면 `@Bean`과 `@Configuration` 어노테이션을 사용한다.

---

### 같은 타입의 Bean이 2개일 때

Bean을 **@Autowired**로 주입하려 할 때 같은 타입의 Bean이 여러 개 존재하는 경우가 있을 수 있다.  
이럴 때는 **@Primary**와 **@Qualifier**를 사용하여 우선순위를 정할 수 있다.

- **@Primary**: 범용적으로 사용되는 Bean에 적용한다.
- **@Qualifier**: 특정 지역적으로 사용되는 Bean에 적용하는 것이 좋다.

Spring에서 우선순위를 설정할 때 범위가 크면 낮은 우선순위를 가지며, 범위가 좁으면 높은 우선순위를 가진다. 
따라서 **@Qualifier**가 **@Primary**보다 더 높은 우선순위를 가진다.

---

## 실습자료
### GitHub
- [Bean을 수동으로 등록하는 방법](https://github.com/JISU-YANG/spring-auth/commit/1023cccf6581e50864ae89ccb9436d348d241e6d)
- [같은 타입의 Bean이 2개라면?](https://github.com/JISU-YANG/spring-auth/commit/21afcbd7f64199b550202ca2ae53015d1bec161c)