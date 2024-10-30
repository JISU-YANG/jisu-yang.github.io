---
layout: note_series
parent: Learning Notes
study: JPA Advanced
chapter: 5
title: SpringData JPA 심화
toc: true
reference:
  1: 
    author: 김태선
    year: 2023
    platform: 스파르타코딩클럽
    content: JPA 심화
    content-link: 
---

## 좀 더 멋지게 쿼리 생성하기
### QueryDSL
**QueryDSL**은 엔티티 매핑 정보를 활용해 쿼리에 적합한 **쿼리 전용 클래스(Q클래스)**를 생성하여 효율적인 쿼리 작성을 가능하게 하는 기술이다.  
`JPAQueryFactory`를 사용하여 객체나 함수로 쿼리를 작성하고 실행할 수 있다.

---

## 테이블 객체 방명록 설정하기
### Auditing 소개
**Auditing**을 사용하면 엔티티의 생성 및 수정 정보를 자동으로 기록할 수 있다.  
이를 통해 누가 언제 엔티티를 생성 또는 수정했는지 기록할 수 있으며, 아래와 같은 어노테이션을 사용한다.
- `@CreatedDate`, `@LastModifiedDate`
- `@CreatedBy`, `@LastModifiedBy`

---

### Auditing 적용 방법
1. 메인 애플리케이션에 `@EnableJpaAuditing` 어노테이션 추가
2. 엔티티 클래스에 `@EntityListeners(AuditingEntityListener.class)` 어노테이션 추가
3. `AuditorAware` 구현체 작성
   - `createdAt`, `modifiedAt`은 구현체 없이 동작하지만, `createdBy`, `modifiedBy`에는 구현체가 필요하다.
   - Spring Security의 `SecurityContextHolder`를 사용하여 인증 정보를 참조하고 `UserDetailsImpl`에서 사용자 객체를 가져온다.
4. `@EnableJpaAuditing`에 `AuditorAware` 빈을 설정해 적용

---

## 필요한 부분만 갱신하기
### @DynamicInsert
엔티티에 `@DynamicInsert` 어노테이션을 적용하면, **Insert** 쿼리에서 `null`인 값을 제외하고 쿼리가 생성됩니다.

---

### @DynamicUpdate
엔티티에 `@DynamicUpdate` 어노테이션을 적용하면, **Update** 쿼리에서 `null`인 값을 제외하고 쿼리가 생성됩니다.