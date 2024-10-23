---
layout: note_series
parent: Learning Notes
study: Spring Beginner
chapter: 7
title: JPA CORE
toc: true
reference:
  1:
    author: 최원빈
    year: 2023
    platform: 스파르타코딩클럽
    content: 웹개발의 봄 Spring
    content-link: https://spartacodingclub.kr/online/spring_v2
---

### DB와 SQL의 의존성 문제
DB를 직접 다룰 때는 **SQL**에 의존적이기 때문에 데이터베이스가 변경될 경우 코드도 많이 수정해야 하는 문제가 생길 수 있다.  
이러한 반복적이고 번거로운 SQL 작업을 줄이기 위해 **ORM**(Object Relational Mapping)이 등장했다.

---

### JPA (Java Persistence API)
**JPA**는 Java에서 사용하는 **ORM** 기술의 표준 명세이다.  
대표적인 구현체로는 **Hibernate**가 있다.

---

### Entity 이해하기
**Entity**는 데이터베이스의 테이블과 매핑되는 JPA에서 관리되는 클래스이다.

---

### 영속성 컨텍스트
**영속성 컨텍스트**는 Entity를 효율적으로 관리하기 위한 공간이다.  
**영속성(Persistence)**은 객체의 생명 주기나 위치를 자유롭게 관리할 수 있는 객체의 성질을 의미한다.

---

### EntityManager
영속성 컨텍스트에서 Entity 객체들을 조작하기 위해서는 **EntityManager**가 필요하다.  
일반적으로 데이터베이스 하나당 하나의 **EntityManagerFactory**가 생성되며, 이를 통해 여러 **EntityManager**를 생성할 수 있다.

---

### JPA 트랜잭션
**트랜잭션**은 DB 데이터를 안전하게 관리하기 위한 개념으로, **무결성**과 **정합성**을 유지하는 역할을 한다.  
JPA는 이러한 트랜잭션 개념을 도입하여, 쓰기 지연 저장소(**ActionQueue**)에 데이터를 저장하고 있다가 **커밋** 시점에 한꺼번에 데이터베이스에 반영하여 효율적으로 처리한다.

---

### 1차 캐시
영속성 컨텍스트는 내부적으로 **1차 캐시** 저장소를 가지고 있다.  
예를 들어, `em.persist(entity);` 메서드가 호출되면 해당 **Entity**는 1차 캐시에 저장된다.  
만약 1차 캐시에 요청한 데이터가 없으면, 데이터베이스에 요청하여 데이터를 가져온다.

- `em.remove(entity);`를 호출하면 삭제할 **Entity**가 **DELETED** 상태가 되고, 트랜잭션 커밋 후에 데이터베이스에서 삭제된다.
- 트랜잭션 중에 데이터를 조회하고, **Entity** 객체의 값을 변경하면, `persist`를 하지 않아도 JPA가 내부적으로 loadedState와 비교하여 변경을 감지하여 **Update SQL**을 생성하고 DB에 반영한다. 이를 **변경 감지(Dirty Checking)**라고 한다.
- **영속(Managed)** 상태일 때만 변경 감지가 이루어진다.

---

### Entity의 상태
1. **비영속(Transient)**: `new` 연산자를 통해 생성된, 인스턴스화된 **Entity** 객체를 의미한다.
2. **영속(Managed)**: `em.persist(entity);`를 통해 **EntityManager**가 **Entity**를 영속성 컨텍스트에 저장하고 관리하는 상태이다.
3. **준영속(Detached)**: 한때 영속성 컨텍스트에 저장되었으나, 더 이상 관리되지 않는 상태를 의미한다.

---

### 준영속 상태로 전환하는 방법
- `em.detach(entity);`: 특정 엔티티를 영속성 컨텍스트에서 분리한다.
- `em.clear();`: 영속성 컨텍스트를 초기화하여 모든 엔티티를 준영속 상태로 만든다.
- `em.close();`: 영속성 컨텍스트를 종료하여 모든 엔티티를 준영속 상태로 만든다.

---

### 그 외 상태
- `em.merge(entity);`: 비영속 또는 준영속 상태의 엔티티를 영속성 컨텍스트로 다시 가져와 없다면 데이터베이스에 **저장**, 있다면 **수정** 작업을 한다.
- `em.remove(entity);`: 엔티티를 **삭제** 상태로 만든다.

---

## 실습자료
### GitHub
- [Entity 이해하기](https://github.com/JISU-YANG/study-jpa-core/commit/13086110d807c737d9c98c6bee39e6c82eac62a8)
- [영속성 컨텍스트란 무엇일까?](https://github.com/JISU-YANG/study-jpa-core/commit/e0ebc4bee88b2630090cf299a32f4ff42a70d7ba)
- [영속성 컨텍스트의 기능](https://github.com/JISU-YANG/study-jpa-core/commit/de8600af82ff487af28dd246f43866741eedc390)
- [Entity의 상태](https://github.com/JISU-YANG/study-jpa-core/commit/4d1e14db15ce225a4b6522313c2cdee54c9e465f)