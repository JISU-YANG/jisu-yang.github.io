---
layout: note_series
parent: Learning Notes
study: JPA Advanced
chapter: 4
title: SpringData JPA 기본
toc: true
reference:
  1: 
    author: 김태선
    year: 2023
    platform: 스파르타코딩클럽
    content: JPA 심화
    content-link: 
---
 
## 테이블 객체 다루는 법
### Cascade(영속성 전이)
부모 엔티티가 특정 작업을 수행할 때, 연관된 엔티티에서도 동일한 작업을 자동으로 적용할 수 있도록 설정하는 옵션.

- **ALL**: 전체 상태 전이
- **PERSIST**: 저장 상태 전이
- **REMOVE**: 삭제 상태 전이
- **MERGE**: 업데이트 상태 전이
- **REFRESH**: 갱신 상태 전이
- **DETACH**: 비영속 상태 전이

---

### orphanRemoval(고아 객체 제거)
연관 관계가 끊어진 자식 엔티티를 자동으로 삭제하는 옵션이다.  
부모 엔티티에서 자식 엔티티를 컬렉션에서 제거하거나 필드 값을 `null`로 설정하면 영속성 컨텍스트에서 자식 엔티티가 삭제된다.

---

### Fetch(조회 시점)
Entity의 `FetchType` 설정을 통해 조회 시점을 조정할 수 있다.  
`fetch join`을 사용하면 `LAZY`로 설정된 경우에도 즉시 데이터를 가져올 수 있다.

---

## 테이블 객체로 자동 쿼리 생성하기
### JpaRepository 쿼리 기능
`JpaRepository<Entity, ID>` 인터페이스를 사용하면 Spring Boot의 자동 설정(`@EnableJpaRepositories`)을 통해 
`SimpleJpaRepository` 구현체가 등록되어 다양한 쿼리 기능을 제공한다.

---

### JpaRepository 쿼리 사용 방법
제공되는 쿼리는 규칙에 따라 메서드명을 정의하여 자동 생성된다.
- `리턴타입` {`접두어`}{`도입부`}By{`프로퍼티 표현식`}(`조건식`)\[(And\|Or){`프로퍼티 표현식`}(`조건식`)](OrderBy{`프로퍼티`}Asc\|Desc) (`매개변수`...)

| **타입**       | **예시**                                                              |
|----------------|-----------------------------------------------------------------------|
| **접두어**      | Find, Get, Query, Count, ...                                          |
| **도입부**      | Distinct, First(N), Top(N)                                            |
| **프로퍼티 표현식** | `Person.Address.ZipCode` => `findByAddress_ZipCode(...)`            |
| **조건식**      | IgnoreCase, Between, LessThan, GreaterThan, Like, Contains, ...       |
| **정렬 조건**    | `OrderBy{프로퍼티}Asc`, `OrderBy{프로퍼티}Desc`                      |
| **리턴 타입**    | `E`, `Optional<E>`, `List<E>`, `Page<E>`, `Slice<E>`, `Stream<E>`   |
| **매개변수**     | Pageable, Sort                                                      |

---

### JpaRepository 효율적으로 사용하는 방법
1. **Optional 제거**: 인터페이스에 `default` 메서드를 작성하여 우아하게 처리할 수 있다.
2. **메서드명 간소화**: `default` 메서드를 활용하여 메서드명을 간결하게 지정할 수 있다.

---

## 테이블 객체로 페이지 조회하기
### 페이징 처리 프로세스
1. `PageRequest`를 사용해 `Pageable` 객체에 페이징 정보를 담는다.
2. `Pageable`을 JpaRepository의 메서드 파라미터로 전달한다.
3. `Page<T>`로 응답을 받아 필요한 페이지 정보를 바탕으로 로직을 처리한다.

---

### 페이징 요청/응답 클래스
**Pageable 만드는법**
- `PageRequest.of(int page, int size)`: 0부터 시작하는 페이지 번호와 개수를 설정
- `PageRequest.of(int page, int size, Sort sort)`: 페이지 번호와 개수, 정렬 조건을 설정
- `PageRequest.of(int page, int size, Sort.Direction direction, String... props)`: 페이지 번호, 개수, 정렬 방향 및 기준 설정

---

**Pageable 메서드**
- `getTotalPages()`: 총 페이지 수
- `getTotalElements()`: 전체 개수
- `getNumber()`: 현재 페이지 번호
- `getSize()`: 페이지당 데이터 개수
- `hasNext()`: 다음 페이지 여부
- `isFirst()`: 시작 페이지 여부
- `getContent()`, `get()`: 실제 컨텐츠 반환 (`List<Entity>`, `Stream<Entity>`)

---

### 페이지 반환 타입
- `Page<T>`: 게시판 형태의 페이징에 사용되며, 전체 요소 수까지 조회한다.
- `Slice<T>`: 더보기 형태의 페이징에 사용되며, `offset` 필드로 조회하여 count 쿼리가 발생하지 않는다.
- `List<T>`: 전체 목록 보기에서 사용되며, count 조회가 발생하지 않는다.

---

### 정렬
**컬럼 값으로 정렬하기**

```java
Sort sort1 = Sort.by("name").descending();       // 내림차순
Sort sort2 = Sort.by("password").ascending();    // 오름차순
Sort sortAll = sort1.and(sort2);                 // 다중 정렬
Pageable pageable = PageRequest.of(0, 10, sortAll);  // pageable 생성 시 추가
```

---

**컬럼이 아닌 값으로 정렬**  
`@Query` 사용시 Alias(쿼리에서 as 로 지정한 문구)를 기준으로 정렬 가능.

---

**SQL 함수를 사용한 정렬**  
`JpaSort`를 사용해서 쿼리 함수를 기준으로 정렬 가능.

---

## 테이블 객체로 수동 쿼리 생성하기
### JPQL
Table이 아닌 Entity 기준으로 작성하는 쿼리를 **JPQL**이라고 한다.

---

**EntityMananger.createQuery()**  
`setParameter` 와 같은 key-value 문자열을 통해 쿼리 파라미터를 매핑할 수 있다.

---

**`@Qeury` (repository interface)**  
- `@Query`의 인자를 통해 간단하게 쿼리를 작성할 수 있다.
- 테이블이 아닌 **Entity 이름**으로 조회한다.
- 변수 바인딩 `?변수순번`, `:변수명` 방식으로 할 수 있다.

