---
layout: note_shorts
parent: Learning Notes
category: Spring Framework
title: Annotation 기초
toc: true
---

### Annotation 기초
Annotation은 Java 1.5부터 지원되는 기능이다. 주로 Spring Web MVC Framework에서 활용되며, 코드의 설정을 간편하게 만들고 View 페이지와 객체 또는 메소드 간의 매핑을 명확하게 할 수 있다는 장점이 있다.

---

### 대표적인 Annotation
1. @Component: Stereotype의 최상위 Annotation으로, 일반적인 컴포넌트를 나타낸다.
2. @Controller: Spring MVC에서 컨트롤러로 인식되도록 지정한다.
3. @Service: 비즈니스 로직을 처리하는 클래스에 사용되며, 비즈니스 계층(Business Layer)에서 사용된다.
4. @Repository: 데이터베이스에 접근하는 클래스를 나타내며, 주로 DAO에서 사용된다.

---

### Annotation 등록
Stereotype의 Annotation은 `context:component-scan`을 통해 자동으로 등록되고 Spring Framework가 관리한다.

---

### 주요 Annotation 종류

1. @Autowired: 의존성 주입을 위해 사용되며, 해당하는 타입의 Bean을 자동으로 주입한다.
2. @Qualifier: 동일한 타입의 Bean이 여러 개 있을 때, 어떤 Bean을 주입할지 명시한다.
3. @Required: 필수적으로 주입되어야 하는 Bean을 나타낸다.
4. @Resource: 주입할 Bean을 지정하고자 할 때 사용된다.

---

이렇게 Annotation을 사용함으로써 코드의 설정이 간편해지고, 컴포넌트 간의 관계가 명확해진다. 이는 Spring Framework에서 자주 활용되는 기능이다.