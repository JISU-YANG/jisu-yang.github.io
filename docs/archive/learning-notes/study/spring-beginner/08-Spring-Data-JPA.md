---
layout: note_series
parent: Learning Notes
study: Spring Beginner
chapter: 8
title: Spring Data JPA
toc: true
reference:
  1:
    author: 최원빈
    year: 2023
    platform: 스파르타코딩클럽
    content: 웹개발의 봄 Spring
    content-link: https://spartacodingclub.kr/online/spring_v2
---

### Spring Boot 환경에서의 JPA
Spring Boot에서는 **EntityManagerFactory**와 **EntityManager**가 자동으로 생성된다.  
`application.properties` 파일에 DB 정보를 입력하면 이를 바탕으로 **EntityManager**가 생성되어 사용할 수 있게 된다.  
또한, **@PersistenceContext** 어노테이션을 사용하면 자동으로 생성된 **EntityManager**를 주입받아 사용할 수 있다.

---

### Spring의 트랜잭션 관리
Spring 프레임워크는 DB의 트랜잭션 개념을 적용할 수 있도록 **SimpleJpaRepository** 클래스를 제공한다.  
**@Transactional(readOnly = true)** 어노테이션이 클래스에 추가되어 있으면 해당 클래스의 메서드는 읽기 전용으로 처리되고, 데이터 수정이 불가능하다.  
만약 특정 메서드에서 데이터를 수정하고 싶다면 **@Transactional**을 메서드에 별도로 적용하여 덮어쓰면 된다.

---

### 영속성 컨텍스트와 트랜잭션의 생명주기
Spring 컨테이너 환경에서는 **영속성 컨텍스트**와 **트랜잭션**의 생명주기가 일치한다.  
즉, 트랜잭션이 유지되는 동안에는 영속성 컨텍스트의 기능(1차 캐시, 더티 체크 등)을 사용할 수 있다.

---

### 트랜잭션 전파
부모 메서드에 **@Transactional**이 적용되어 있으면, 기본적으로 **REQUIRED** 옵션이 설정된다.  
이 의미는 부모 메서드가 호출한 자식 메서드도 같은 트랜잭션 안에서 처리된다는 것이다.  
부모 메서드가 실행 중일 때 자식 메서드를 호출하고, 자식 메서드가 완료된 후 부모 메서드의 나머지 로직을 처리한 다음 SQL이 처리된다.

반대로, 부모 메서드에 **@Transactional**이 없고 자식 메서드에만 **@Transactional**이 있다면, 
자식 메서드가 호출되는 시점에서 트랜잭션이 시작된다. 자식 메서드가 완료되면 바로 SQL이 처리된다.

---

### Spring DATA JPA란?
JPA를 쉽게 사용할 수 있게 만들어놓은 하나의 모듈이다.
JPA를 추상화시킨 Repository 인터페이스를 제공하기 때문에 개발자는 JPA를 구현체를 사용해 간편하게 사용할 수 있다.


---

## 실습자료
### GitHub
- [Spring Boot의 JPA](https://github.com/JISU-YANG/study-spring-memo/commit/b22fc30968ebee1f89cb3925e21545bbf2941729)
- [Spring Data JPA란 무엇일까?](https://github.com/JISU-YANG/study-spring-memo/commit/bb902a07c911269b0b1ac99d6e8666f14feac7f0)
- [JPA Auditing 적용하기](https://github.com/JISU-YANG/study-spring-memo/commit/a87da3586f4475818905f768b9b06e6b6e5001a4)
- [Query Methods란 무엇일까?](https://github.com/JISU-YANG/study-spring-memo/commit/ab78b637a30a008e9fb9f3d127b5546c11cdb171)