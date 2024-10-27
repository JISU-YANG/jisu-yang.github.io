---
layout: note_shorts
parent: Learning Notes
category: Spring Framework
title: JPA & Hibernate & Spring Data JPA 차이점 정리
toc: true
---

## JPA, Hibernate, Spring Data JPA 차이점 비교하기
> Java 애플리케이션과 데이터베이스가 상호작용할 때, 자주 사용되는 ORM 기술들을 살펴보자.

---

### JPA (Java Persistence API)
데이터베이스와 Java 객체를 매핑하는 표준 API이다.
엔티티 매핑, 영속성 관리, 트랜잭션 처리와 같은 ORM 핵심 기능을 규약으로 제공한다.

---

### Hibernate
JPA의 대표적인 구현체로, JPA가 제공하는 기능 외에도 지연로딩, 캐싱 등 다양한 기능을 지원한다.
유연한 ORM 매핑을 제공하며, 복잡한 데이터베이스 연산도 효율적으로 처리할 수 있다.

---

### Spring Data JPA
Spring Framework에서 간단하게 JPA를 사용할 수 있도록 제공하는 라이브러리이다.
쿼리 메소드, 쿼리 자동 생성, 페이징 및 정렬 기능, 스프링 컨텍스트와의 통합 등을 통해 
Spring 애플리케이션에서 JPA를 보다 간결하게 사용할 수 있게한다.

---

| **항목**              | **JPA**                    | **Hibernate**                             | **Spring Data JPA**                                      |
|-----------------------|----------------------------|-------------------------------------------|----------------------------------------------------------|
| **정의**              | Java의 ORM 표준 인터페이스 | JPA 구현체 및 ORM 프레임워크              | Spring의 JPA 활용 라이브러리                              |
| **역할**              | 인터페이스 및 규약 제공    | JPA 구현 및 추가 기능 제공               | JPA 기능 간소화 및 Spring과 통합 지원                     |
| **주요 기능**         | 영속성 관리, 트랜잭션 처리 | 지연 로딩, 캐싱, 고유의 쿼리 언어 제공   | 쿼리 메소드, 페이징 및 정렬, 자동 리포지토리 생성 지원    |
| **추가 기능**         | 없음                       | 고유 기능 (HQL, Native API) 제공         | 쿼리 자동 생성 및 Spring 생태계와의 강력한 연동           |
