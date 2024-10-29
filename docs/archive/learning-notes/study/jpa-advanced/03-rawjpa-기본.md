---
layout: note_series
parent: Learning Notes
study: JPA Advanced
chapter: 3
title: RawJPA 기본
toc: true
reference:
  1: 
    author: 김태선
    year: 2023
    platform: 스파르타코딩클럽
    content: JPA 심화
    content-link: 
---

## 쿼리 파일 만들기
### MyBatis란?
반복적인 JDBC 프로그래밍을 단순화하여 SQL을 XML 파일에 분리해 작성할 수 있게 한다.

**한계점**  
직접 SQL을 작성해야 하므로 유지보수가 번거로울 수 있으며, CRUD 작업이 반복되고 DB 타입 및 테이블에 종속적이다.

---

### MyBatis의 동작
1. `SqlSessionFactoryBuilder`가 MyBatis 설정 파일을 읽어 `SqlSessionFactory`를 생성한다.
2. 애플리케이션에서 `SqlSessionFactory`로부터 `SqlSession`을 받아와 MapperInterface를 호출한다.
3. MapperInterface는 Mapping File을 통해 미리 정의된 SQL 쿼리를 사용한다.

---

## 쿼리 코드 만들기
QueryMapper의 DB 의존성과 중복 쿼리 문제를 해결하기 위해 ORM이 등장했다. 
ORM은 DAO나 Mapper 대신 테이블을 객체와 매핑해 관리한다.

### ORM의 문제와 해결
**상속의 문제**  
객체는 상속 관계를 맺을 수 있으나 테이블에는 상속 개념이 없어 `@OneToMany`, `@ManyToOne`으로 상속 정보를 매핑한다.

**관계 문제**  
객체는 참조와 방향성을 가지지만, RDB는 외래키로 관계를 설정하므로 `@JoinColumn`, `@MappedBy`로 방향성을 지정한다.

**탐색 문제**  
객체는 참조를 통해 다른 객체로 탐색 가능하지만, RDB는 쿼리가 추가되어 비효율적이다. `@FetchType`과 `fetchJoin()`을 통해 탐색 시점을 관리한다.

**밀도 문제**  
객체의 멤버가 복잡할 수 있지만, RDB는 기본 데이터 타입만을 지원하므로 `@embedded`를 사용해 분리하여 매핑한다.

**식별성 문제**  
객체는 `hashCode`로 식별하나 RDB는 PK로 식별한다. `@Id`, `@GeneratedValue`로 PK를 객체의 ID로 매핑하여 관리한다.

---

### ORM의 문제에 대한 해결책
**영속성 컨텍스트 활용한 쓰기 지연**  
영속성 컨텍스트는 데이터 변경을 트랜잭션이 끝나는 시점까지 지연시키며, 최적화된 쿼리만 DB에 반영되도록 한다.

**영속성 4가지 상태**  
비영속 > 영속 > 준영속 or 삭제

> new -> 비영속 상태 -> persist(), merge() -> 영속성 컨텍스트에 저장된 상태 -> flush() -> DB에 쿼리가 전송된 상태 -> commit() -> DB에 쿼리가 반영된 상태


**쓰기 지연이 발생하는 시점**
- flush() 동작이 발생하기 전까지 쿼리 최적화를 하고 전송된 쿼리는 이후 `commit()`으로 반영만 가능하다.

**쓰기 지연 효과**
- 여러 개의 객체를 생성할 경우 모아서 한번에 쿼리를 전송한다.
- 영속성 상태의 객체가 생성 및 수정이 여러번 일어나도 트랜잭션 종료시 쿼리는 1번만 전송될수있다.
- 영속성 상태에서 객체가 생성되었다 삭제되었다면 실제 DB에는 아무 동작이 전송되지 않을 수 있다.
- 여러가지 동작이 많이 발생하더라도 쿼리는 트랜잭션 당 최적화되어 최소 쿼리만 날라가게 된다.

---

### ORM을 사용하는 가장 쉬운 방법: JpaRepository
**기존 Repository**
- `@Repository`를 클래스에 적용한다.
- `@Component` 어노테이션을 포함하고 있어서 앱 실행시 생성 후 Bean으로 등록된다.
- Repository 기본 기능을 가진 구현체가 생성된다. (DB 별 예외처리 등)

**JpaRepository**
- `JpaRepository<Extity, ID>` 인터페이스를 extends 한다.
- `@NotRepositoryBean` 으로 Bean 생성을 막아두었다.
- 상속을 받게 되면 SpringDataJpa에 의해 상위 인터페이스(CRUD, 페이징, 정렬 등)들의 구현체가 Bean으로 등록된다.

---

## 테이블 객체 이해하기
### Raw JPA 테이블 매핑 기능
**@Entity**  
서버 객체 이름이며 클래스 이름이 기본값이다. JQL에서 사용된다.

**@Table**  
RDB의 테이블 이름으로, SQL에서 사용된다.

**@Id**  
엔티티의 PK를 매핑하며 기본 및 래퍼 타입을 사용 가능하다.

**@GeneratedValue**  
PK 생성 전략을 설정한다.

**@Column**  
`unique`, `nullable`, `length`, `columnDefinition` 등 옵션을 설정할 수 있다.

**@Temporal**  
Date와 Calendar 지원.

**@Transient**  
컬럼으로 매핑되지 않는 변수에 적용.

---

### Raw JPA 필드 타입 매핑 기능
**기본 타입**  
`@Column`

**@Enumerated**  
기본은 ORDINAL(0, 1, 2…)이며, 실무에서는 EnumType.STRING을 권장한다.

**Composite Value 타입**
- `@Embeddable`, `@Embedded`로 복합 값 객체를 설정하고 적용할 필드 지정.
- `@AttributeOverrides`, `@AttributeOverride`로 여러 복합 값을 지정.

**Collection Value 타입**  
`@ElementCollection`으로 매핑.

---

## 테이블 객체끼리 관계만들기
### Raw JPA 연관관계 매핑 기능
**@OneToOne**  
일대일 관계이며 드문 케이스로, 하나의 목적에 부합하는 공통 데이터를 관리할 경우 하나의 테이블에 저장하는 것이 효율적이다.

**@OneToMany**  
일대다 관계이며 기본적으로 지연 로딩(LAZY)으로 설정된다. 단방향으로 사용되는 경우 문제가 생길 수 있다.

**@ManyToOne**  
다대일 관계로, 기본적으로 즉시 로딩(EAGER)으로 설정된다.

**@ManyToMany**  
다대다 관계로 매핑 테이블이 자동 생성되지만 관리가 어렵기 때문에 실무에서는 잘 사용하지 않는다.
