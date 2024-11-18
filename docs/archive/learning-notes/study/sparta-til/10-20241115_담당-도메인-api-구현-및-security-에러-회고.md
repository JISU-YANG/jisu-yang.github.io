---
layout: note_series
parent: Learning Notes
study: Sparta Til
chapter: 10
title: 20241115_담당 도메인 Api 구현 및 Security 에러 회고
toc: true
---

## 회원 및 주소 API 개발 요약
### 회원 API 기능 개발 및 로직 개선
**구현 기능**  

- 회원의 상세 정보를 조회하는 API
- 각각의 닉네임, 이메일, 비밀번호를 변경하는 API
- 회원을 비활성화(숨김 처리)하는 API
- 회원 데이터를 삭제하는 API

---

**로직 개선**  

- 불필요한 검증 로직 최적화: 반복되거나 과도한 검증 로직 제거했다.
- 부정 연산자 수정: 누락된 부정 연산자로 인한 에러를 수정했다.
- 암호화되지 않은 비밀번호 변경: 암호화 과정에서 누락된 암호화과정을 추가했다.

---

### 회원 주소 API 기능 개발 및 논의
**구현 기능**
- 회원의 현재 주소를 설정하는 API
- 회원의 주소 목록을 조회하는 API
- 회원이 주소록에 주소를 추가하는 API
- 회원의 주소록에 등록된 주소를 수정하는 API
- 주소를 비활성화(숨김 처리)하는 API
- 주소 데이터를 삭제하는 API

---

**논의 및 변경 사항**  

- 가게의 배달 가능 지역과 회원 주소록의 주소를 자체 코드를 참조하여 관리하려던 초기 기획에서 별도로 분리하는 방식으로 수정되었다.
- 도로명주소에서 **구주소**를 입력받는 유즈 케이스로 변경했다.
- 주소록에 상세주소 아닌 **전체 주소**를 보관하도록 변경됐다.
- 주소코드 관련 **연관관계** 및 로직을 제거했다.

---

## Swagger 접근 문제 해결
### 문제 상황
Swagger 접근 시 **JWT 인증 필터**로 인해 500 에러 발생했다. 원인은 인증 필터가 Swagger 리소스 요청까지 처리하기 때문이었다.

### 해결 방법
`OncePerRequestFilter` 구현체에 Swagger 관련 요청(`/swagger-ui.html`, `/swagger-ui/**`, `/v3/api-docs/**`)은 필터에서 제외하도록 수정했다.

---

## Auditing 관련 필드 Null 값 문제 해결
### 문제 상황
Security 적용 후 Auditing 필드에 값이 들어가지 않았다. 원인은 `SecurityContextHolder`를 통해 사용자 정보를 가져오지 못해서였다.

### 해결 방법
`AuditorAware` 인터페이스 구현체를 별도로 생성했고, `SecurityContext`에서 인증된 사용자 정보를 가져오도록 로직을 수정했다.

```java
@Configuration
public class AuditorAwareConfig implements AuditorAware<Long> {

    @Override
    public Optional<Long> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        Object principal = authentication.getPrincipal();

        if (authentication == null || !authentication.isAuthenticated()) {
            return Optional.empty();
        }

        if (principal instanceof UserDetailsImpl) {
            Long userId = ((UserDetailsImpl) principal).getId();
            return Optional.of(userId);
        }

        return Optional.empty();
    }

}
```