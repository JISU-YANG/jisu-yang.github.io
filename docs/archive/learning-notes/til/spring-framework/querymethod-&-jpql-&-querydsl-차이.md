---
layout: note_shorts
parent: Learning Notes
category: Spring Framework
title: QueryMethod & JPQL & QueryDSL 차이
toc: true
---

## 특징
### Query Method
```java
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByLastName(String lastName);
    List<User> findByAgeGreaterThan(int age);
}
```
- Spring Data JPA에서 기본적으로 제공하는 쿼리 작성 방식이다. 
- 메서드 이름으로 쿼리를 정의할 수 있어 간단한 CRUD 작성이 매우 쉽다. 
- IDE의 자동 완성을 활용할 수 있다.
- 복잡한 쿼리 작성은 어렵거나 불가능하다.

---

### JPQL
```java
@Query("SELECT u FROM User u WHERE u.lastName = :lastName")
List<User> findUsersByLastName(@Param("lastName") String lastName);
```
- JPA에서 지원하는 쿼리 언어이고, SQL과 비슷하지만 Entity 객체를 대상으로 작성할 수 있다.
- SQL과 유사한 문법으로 복잡한 쿼리도 작성할 수 있다.
- 가독성이 떨어지고, 문자열 기반이라 컴파일 시점에 오류를 확인하기 어렵다.

---

### QueryDSL
```java
QUser user = QUser.user;
List<User> users = queryFactory.selectFrom(user)
                               .where(user.lastName.eq("Smith"))
                               .fetch();

```
- Java 코드로 쿼리를 작성해 컴파일 시점에 에러를 잡을 수있다.
- 조건문을 활용해 런타임에 조건을 조합할 수 있다.
- 메서드 체이닝 방식으로 작성되어 가독성이 좋다.
- Q 클래스 생성이 필요하다.

---

## 비교
### 그래서 언제 어떤 것을 사용하는 것이 좋은가?
- 단순한 쿼리는 Query Method
- 복잡한 쿼리는 JPQL
- 동적 쿼리는 QueryDSL

---

### Specification
Spring Data JPA 기본 기능인 Specification으로도 동적 쿼리를 작성할 수 있다. 
하지만 가독성이 좋지 않고, 컴파일 시점에 오류를 잡기도 어렵다. 
성능 또한 QueryDSL에 비해 훨씬 떨어진다.