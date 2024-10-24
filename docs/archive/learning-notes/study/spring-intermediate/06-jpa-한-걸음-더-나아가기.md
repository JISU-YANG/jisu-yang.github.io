---
layout: note_series
parent: Learning Notes
study: Spring Intermediate
chapter: 6
title: JPA 한 걸음 더 나아가기
toc: true
reference:
  1:
    author: 최원빈
    year: 2023
    platform: 스파르타코딩클럽
    content: 웹개발의 봄 Spring
    content-link: https://spartacodingclub.kr/online/spring_v2
---

### Entity 연관 관계
- **1:N 관계 예시**
    - 고객(1):음식(N)
- **N:M 관계 예시**
    - 고객과 음식(N:M)

N:M 관계는 중간 테이블을 사용하여 해결할 수 있다.

---

### 테이블 간 방향

데이터베이스에서는 테이블 간의 연관 관계를 **외래 키(FK)**로 설정할 수 있으며, 방향 없이 조회가 가능하다. 
어떤 테이블에서 **JOIN**을 하더라도 동일한 결과를 얻을 수 있기 때문이다.  
그러나 서버에서는 `@Entity`를 사용해 Java 컬렉션을 통해 한 로우에 여러 값을 가질 수 있다.

```java
@OneToMany
private List<Entity> entityList;
```

이를 통해 **N:1 양방향 관계**를 설정할 수 있다.

엔티티 클래스에서는 상대 엔티티 정보를 참조해야 조회가 가능하며, 이를 위해 **양방향 관계**로 설정해야 한다. 
엔티티 클래스 간에는 방향이라는 개념이 생겨난다.

---

### 1 대 1 관계
`@OneToOne` 어노테이션은 1:1 관계를 설정한다.  
**외래 키의 주인**은 외래 키를 등록, 수정, 삭제할 수 있으며, 주인이 아닌 쪽은 읽기만 가능하다.  
`@JoinColumn`은 외래 키의 주인이 사용하는 어노테이션으로, 컬럼명, null 여부, 유니크 여부 등을 설정할 수 있다.

**단방향 설정**  
외래 키의 주인 엔티티에 `@OneToOne`과 `@JoinColumn(name="column_id")`을 설정한다.

**양방향 설정**  
외래 키의 주인 엔티티에는 `@OneToOne`과 `@JoinColumn(name="column_id")`를 설정하고,  
주인이 아닌 상대 엔티티에는 `@OneToOne(mappedBy = "column")`을 설정하여 외래 키 주인 엔티티의 필드를 참조한다.

> **주의**: 외래 키의 주인 엔티티에서 `@JoinColumn`을 생략할 수 있지만 1:N 관계처럼 중간 테이블이 생성될 수 있으므로 특별한 목적이 없다면 1:1 관계에서도 `@JoinColumn`을 표기하는 것이 좋다.

---

### N 대 1 관계
`@ManyToOne` 어노테이션은 N:1 관계를 설정한다.

**단방향 설정**  
외래 키의 주인 엔티티에 `@ManyToOne`과 `@JoinColumn(name="column_id")`를 설정한다.

**양방향 설정**  
양방향 참조를 위해 상대 엔티티는 자바 컬렉션을 사용하여 주인 엔티티를 참조한다.  
주인 엔티티에는 `@ManyToOne`과 `@JoinColumn(name="column_id")`,  
상대 엔티티에는 `@OneToMany(mappedBy = "column")`을 설정한다.

---

### 1 대 N 관계
@OneToMany 어노테이션은 1:N 관계를 맺어준다.
`@OneToMany` 어노테이션은 1:N 관계를 설정한다.

**단방향 설정**  
주인 엔티티에 `@OneToMany`와 `@JoinColumn(name="column_id")`을 설정하여 자신의 id로 참조한다.  
그러나 실제 테이블에는 컬럼이 없어 **insert 후 update**가 되는 문제가 발생할 수 있다.

**양방향 설정**  
일반적으로 양방향 관계는 존재하지 않는다. 양쪽에서 억지로 설정할 수 있지만 권장하지 않는다.  
주인 엔티티에는 `@OneToMany`와 자신의 id를 담은 `@JoinColumn(name="column_id")`,  
상대 엔티티에는 `@ManyToOne`과 `@JoinColumn(name="column_id", insertable = false, updatable = false)`을 설정한다.

---

### N 대 M 관계
`@ManyToMany` 어노테이션은 N:M 관계를 설정한다.  
JPA는 중간 테이블을 자동으로 생성하지만, 중간 테이블에 PK가 없어 컨트롤이 어렵다.

**단방향 설정**  
주인 엔티티에 `@ManyToMany`와 `@JoinTable(name="table", joinColumns = @JoinColumn(name = "column_id"), inverseJoinColumns = @JoinColumn(name = "column_id"))`을 설정한다.

**양방향 설정**  
주인 엔티티에 `@ManyToMany`와 `@JoinTable(name="table", joinColumns = @JoinColumn(name = "column_id"), inverseJoinColumns = @JoinColumn(name = "column_id"))`,  
상대 엔티티에는 `@ManyToMany(mappedBy = "column")`을 설정한다.

---

### 중간 테이블 직접 생성
중간 테이블은 **외래 키의 주인 역할**을 하며, N:1 관계로 풀어낸다.
직접 생성하게되면 pk나 date 등 원하는 컬럼을 추가하며 컨트롤할 수 있다.

주인 엔티티에는 `@ManyToOne`과 `@JoinColumn(name = "column1_id")`, `@ManyToOne`과 `@JoinColumn(name = "column2_id")`을 설정한다.  
상대 테이블 1과 2는 각각 `@OneToMany(mappedBy = "column1")`, `@OneToMany(mappedBy = "column2")`을 설정하여 양방향 관계를 설정한다.

---
### 지연 로딩 (Lazy Loading)

JPA에서는 연관 관계가 설정된 엔티티의 데이터를 언제 가져올지를 결정할 수 있다. 
이 방법을 **FetchType**이라고 한다.

- **LAZY** (지연 로딩): 필요한 시점에 데이터를 가져온다.
- **EAGER** (즉시 로딩): 즉시 데이터를 가져온다.

---

**기본 설정**

- `@~Many`로 끝나는 어노테이션은 리스트를 반환한다.
  - **@OneToMany**
  - 기본값은 `LAZY` (지연 로딩)
- `@~One`으로 끝나는 어노테이션은 객체 하나를 반환한다.
  - **@ManyToOne**
  - 기본값은 `EAGER` (즉시 로딩)

지연 로딩은 영속성 컨텍스트의 기능 중 하나이므로, 지연 로딩이 설정된 엔티티를 조회하려면 영속성 컨텍스트가 반드시 존재해야 한다.
Spring Framework에서는 **@Transactional**을 적용해 영속성 컨텍스트를 유지할 수 있다.

---

### 영속성 전이 (Cascade)

데이터베이스에서 **on delete Cascade** 기능이 있는 것처럼, JPA에서도 **Cascade** 옵션을 통해 연관된 엔티티를 자동으로 처리할 수 있다.

예를 들어, 특정 엔티티를 저장할 때 그와 연관된 엔티티도 함께 저장하려면 연관 관계 어노테이션에 `cascade = CascadeType.PERSIST`를 추가한다.

```java
@OneToMany(mappedBy = "user", cascade = CascadeType.PERSIST)
```
다양한 옵션을 조합할 수도 있다.
- `cascade = {CascadeType.PERSIST, CascadeType.REMOVE}`

---

### 고아 Entity 삭제 (Orphan Removal)
JPA에서는 연관 관계를 제거함으로써 해당 데이터를 삭제할 수 있는 **orphanRemover** 기능을 제공한다.

`CascadeType.REMOVE`처럼 연관된 엔티티를 삭제하면 자동으로 연결된 엔티티도 함께 제거된다. 이 기능을 사용할 때는 신중해야 한다.
특히 다른 곳에서 해당 엔티티를 참조하고 있는지 확인해야 하며, **@ManyToOne** 관계에서는 사용하지 않는 것이 좋다.

---
 
## 실습자료
### GitHub
- [@OneToOne 양방향 및 조회 테스트](https://github.com/JISU-YANG/study-jpa-advance/commit/9723a39f558d34192696c4526292f9ece258d705)
- [@ManyToOne 단방향 테스트](https://github.com/JISU-YANG/study-jpa-advance/commit/ca1b84105ec9e0c2a227a65bed722fce4dd6344f)
- [@ManyToOne 양방향 및 조회 테스트](https://github.com/JISU-YANG/study-jpa-advance/commit/7fac55650932da298f6ab45fb7d9a718cdfedf09)
- [@OneToMany 단방향 및 조회 테스트](https://github.com/JISU-YANG/study-jpa-advance/commit/02ef74dd6766015c822fea4059356aa95c9f4592)
- [@ManyToMany 단방향 테스트](https://github.com/JISU-YANG/study-jpa-advance/commit/ab8fe9290e56afd2111c192a0af4ee603d6d1588)
- [@ManyToMany 양방향 및 조회 테스트](https://github.com/JISU-YANG/study-jpa-advance/commit/2bc4ad0ebabb495b743af3943e7f68b0a7598e07)
- [중간 테이블 Order 테스트](https://github.com/JISU-YANG/study-jpa-advance/commit/82e98e21efde08e7dab996853f8f6ff5653299b8)
- [중간 테이블 Order 주문일 추가](https://github.com/JISU-YANG/study-jpa-advance/commit/14d73158aee5c31e7de4371721f312a3908a1893)
- [지연 로딩과 즉시 로딩](https://github.com/JISU-YANG/study-jpa-advance/commit/ed73beee2b573760bea96d95f95222fe2c78c066)
- [영속성 전이](https://github.com/JISU-YANG/study-jpa-advance/commit/7ab86d21b4c6c5e04e5bcc0a1e6fc1a09c72f40f)
- [OrphanRemoval 적용](https://github.com/JISU-YANG/study-jpa-advance/commit/1895dc7cce734c501fba593f18ba84845018117e)
