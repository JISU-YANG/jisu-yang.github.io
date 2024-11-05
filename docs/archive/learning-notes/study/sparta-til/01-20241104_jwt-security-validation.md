---
layout: note_series
parent: Learning Notes
study: Sparta Til
chapter: 1
title: 20241104_Jwt Security Validation
toc: true
---

## JWT와 Security
### 세션 저장소 대신 왜 JWT를 사용했나요?
JWT는 서버에서 사용자의 인증 정보를 별도로 저장하지 않고, **Secret Key**만으로 인증을 처리할 수 있습니다. 
그래서 서버의 부담을 덜어주는 데 효과적입니다.

---

### 왜 Security를 적용했나요?
안전하고 신뢰할 수 있는 **인증**과 **접근 제어**를 제공하기 위해서 입니다.

---

### Security와 JWT는 어떻게 다른가요?
Security는 Spring에서 제공하는 **보안 라이브러리**로, 인증과 인가를 다루는 기능을 갖추고 있습니다.
JWT는 **인증 정보를 담은 토큰**으로, 서버에 상태 정보를 저장하지 않습니다.
Security를 통해 JWT 방식의 인증을 구현할 수 있습니다.

---

## Validation
### Validation은 어떻게 적용했나요?
어노테이션으로 엔티티 클래스의 필드에 **특정 조건을 충족하는지 자동으로 검사**됩니다.
컨트롤러에서는 **DTO의 입력값을 자동으로 검증**합니다.

---

### 유효성 검사가 실패한 경우 어떻게 되나요?
Spring에서 자동으로 예외(Exception)를 발생시키고, **Global Exception Handler**가 잡아서 사용자에게 명확한 에러 메시지를 보여줍니다.

---

### Global Exception Handler는 무엇인가요?
다양한 예외를 **하나의 클래스에서 모아 관리**할 수 있습니다.

`@ExceptionHandler`: 특정 컨트롤러에서 특정 예외에 대해 맞춤형 처리 방식을 설정할 수 있습니다.
`@ControllerAdvice`: 특정 컨트롤러가 아닌 모든 컨트롤러에서 발생하는 예외를 한 곳에서 처리할 수 있도록 예외 처리의 범위를 확장할 수도 있습니다.
