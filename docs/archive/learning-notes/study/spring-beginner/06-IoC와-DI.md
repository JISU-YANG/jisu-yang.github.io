---
layout: note_series
parent: Learning Notes
study: Spring Beginner
chapter: 6
title: IoC와 DI
toc: true
reference:
  1: 
    author: Eric 튜터, Jinny 튜터, Jen 튜터
    year: 2024
    platform: 스파르타코딩클럽
    content: Spring Master 2주차
    content-link: https://online.spartacodingclub.kr/
---

### IoC와 DI
**IoC**(Inversion of Control)와 **DI**(Dependency Injection)는 Spring에서 처음 만들어진 개념이 아니다.  
IoC는 객체지향 프로그래밍의 SOLID 설계 원칙 중 하나이며, DI는 GoF 디자인 패턴에서 나온 개념이다.

Spring은 이러한 IoC와 DI 기술을 사용하여 더 좋은 코드를 작성할 수 있도록 개발자를 돕는다.

---

#### 좋은 코드의 예시
- 논리가 간단해야 한다.
- 중복을 제거하고 표현을 명확하게 해야 한다.
- 코드를 처음 보는 사람도 쉽게 이해하고 수정할 수 있어야 한다.
- 의존성을 최소화해야 한다.
- 새로운 기능을 추가하더라도 구조적인 변경이 최소화되어야 한다.
- ...

---

### DI와 IoC의 관계
Spring은 **DI**(의존성 주입)를 통해 **IoC**(제어의 역전)를 구현한다.

---

#### 의존성이란?
강하게 결합된 코드에서는 한 기능이 변경될 때 관련된 많은 코드를 수정해야 한다. 하지만 **다형성의 원리**를 활용해 느슨한 결합을 만들면, 실제 실행 부분에서만 변경을 통해 기능을 수정할 수 있게 된다.

DI는 다음과 같은 방식으로 의존성을 주입할 수 있다:
- **필드 주입**
- **메서드 주입**
- **생성자 주입** (객체의 불변성을 유지하는 데 적합)

생성자가 하나만 있거나, Lombok의 **@RequiredArgsConstructor**를 사용할 경우 **@Autowired**를 생략할 수 있다.

---

### Bean과 IoC Container
- **Bean**: Spring에서 관리하는 객체를 의미한다.
- **IoC Container**: Spring이 관리하는 객체들이 모여 있는 컨테이너를 의미한다.

---

## 실습자료
### GitHub
- [객체 중복 생성 문제 해결](https://github.com/JISU-YANG/study-spring-memo/commit/c9ebee78e1674544b53e1725aa8c79088501d895)
- [강한 결합을 느슨한 결합으로](https://github.com/JISU-YANG/study-spring-memo/commit/6368dffe3bc4c8d6872891a37ed11d5928a534fe)
- [IoC Container와 Bean](https://github.com/JISU-YANG/study-spring-memo/commit/47bace5aac2fcdb9cbfdd3cec5a93d82c8da8842)