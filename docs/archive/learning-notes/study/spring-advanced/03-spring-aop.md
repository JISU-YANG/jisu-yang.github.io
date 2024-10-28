---
layout: note_series
parent: Learning Notes
study: Spring Advanced
chapter: 3
title: Spring AOP
toc: true
reference:
  1: 
    author: 최원빈
    year: 2023
    platform: 스파르타코딩클럽
    content: 웹개발의 봄 Spring
    content-link: https://spartacodingclub.kr/online/spring_v2
---

### AOP와 모듈화
서비스의 기능을 **핵심 기능**과 이를 보조하는 **부가 기능**으로 나누어 모듈화하는 것이 필요하다.  
모듈화로 인해 핵심 비즈니스 로직과 부가 기능을 분리할 수 있으며, 이를 위해 Spring에서는 AOP(Aspect-Oriented Programming)를 사용한다.

---

### Aspect 설정
> `@Aspect`: AOP 설정을 적용하는 클래스에 사용하며, Spring Bean으로 등록된 클래스에만 적용된다.  

---

**어드바이스(Advice)**  
특정 시점에 수행될 작업을 정의하는 것으로, 아래와 같은 어노테이션을 사용해 시점을 설정한다.
- `@Around`: 핵심 기능 전후
- `@Before`: 핵심 기능 전
- `@After`: 핵심 기능 후
- `@AfterReturning`: 핵심 기능 성공 시 (메서드의 반환 값 사용 가능)
- `@AfterThrowing`: 핵심 기능 실패 시, 예외가 발생한 경우에만 동작 (예: 예외 발생 시 개발자에게 알림 전송)

---

### 포인트컷(Pointcut)
> 포인트컷은 AOP 기능이 적용될 지점을 정하는 것으로, **Expression Language**를 사용해 지정한다.  

---

**표현식 예시**  
`execution(modifiers-pattern? return-type-pattern declaring-type-pattern? method-name-pattern(param-pattern) throws-pattern?)`  

---

| **패턴 옵션**                              | **설명**       | **예시**                                                               |
|----------------------------------------|--------------|----------------------------------------------------------------------|
| **modifiers-pattern**                  | 접근 제한자 패턴    | `public`, `private`, `*`                                             |
| **return-type-pattern**                | 반환 타입 패턴     | `void`, `String`, `List<String>`, `*`                                |
| **declaring-type-pattern**             | 클래스명 또는 패키지명 | `com.sparta.myselectshop.controller.*`:<br>controller 패키지의 모든 클래스에 적용 |
| **method-name-pattern(param-pattern)** | 메서드 패턴       | `addFolders`: addFolders() 메서드에만 적용 <br> `add*`: add로 시작하는 모든 메서드에 적용 |
| **param-pattern**                      | 파라미터 패턴      | `(com.sparta.myselectshop.dto.FolderRequestDto)`:<br>해당 인수만 적용       |

---

### `@Pointcut` 사용
`@Aspect` 클래스 내에서 `@Pointcut` 메서드를 정의하여 범위를 지정한 후, 어드바이스 어노테이션에서 해당 메서드 이름을 통해 포인트컷을 제어할 수 있다.

---

## 실습자료
### GitHub
- [Top 5 회원 찾기 구현](https://github.com/JISU-YANG/study-my-select-shop/commit/968b6301c22178b64fc27cbda54f97feac924108)
- [Spring AOP 적용](https://github.com/JISU-YANG/study-my-select-shop/commit/968b6301c22178b64fc27cbda54f97feac924108)