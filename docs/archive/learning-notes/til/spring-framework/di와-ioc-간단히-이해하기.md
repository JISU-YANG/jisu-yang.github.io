---
layout: note_shorts
parent: Learning Notes
category: Spring Framework
title: DI와 IoC 간단히 이해하기
toc: true
reference:
  1:
    author: 넥스트리소프트
    year: 2021
    platform: 블로그
    content: 세 가지 DI 컨테이너로 향하는 저녁 산책
    content-link: "https://www.nextree.co.kr/p11247/"
  2:
    author: _Jbee
    year: 2016
    platform: 블로그
    content: Spring 의 시작, 프레임워커의 구성요소와 동작원리
    content-link: "https://asfirstalways.tistory.com/334"
---

### DI와 IoC 간단히 이해하기

DI와 IoC는 두려움이나 거부감을 느낄 필요가 없는 개발 개념이다. 이해가 어렵게 느껴질 수 있지만, 간단하게 설명하면 충분히 이해할 수 있다. 만약 더 자세한 정보가 필요하다면, 이 포스팅 마지막에 있는 링크를 참조한다.

---

과거에는 개발자가 직접 소스코드의 흐름을 제어하고, 필요한 시점에 작동시켰다. 하지만 이 방식은 변경사항이 발생했을 때 모든 소스코드를 수정해야 하는 번거로움이 있었다. 이를 해결하기 위해 DI(Dependency Injection, 의존성 주입) 개념이 등장했다.

---

DI는 객체를 직접 지정하지 않고, 사용되는 시점에 객체를 할당하는 방식이다. 이 방식으로 인해 서비스는 추상화되며, 이를 통해 객체지향 프로그래밍의 가치를 더욱 증진시킬 수 있다.

---

### DI의 장점

- 객체 간 의존성을 줄인다.
- 코드 재사용성을 높인다.
- 코드의 가독성을 높인다.
- 코드에 변화에 유연하다.

---

### DI의 간단한 이해

1. "생수를 마셔라"라는 명령을 코딩하고 실행하면 "생수를 마신다".
2. "음료를 마셔라"라는 명령을 코딩하고, 실행 시점에 "생수"라는 객체를 전달하면 "생수를 마신다".

즉, 구체적인 객체를 지정하는 대신 실행 시점에 객체를 전달함으로써 코드의 유연성을 향상시킨다. 이것이 DI라고 부른다.

---

그리고 이를 가능하게 하는 것이 바로 Spring Container(IoC Container, Bean Factory, 이하 컨테이너)이다. 컨테이너는 제어 역전(Inversion of Control)이라는 개념을 구현한다. 즉, 흐름의 제어권이 개발자에서 컨테이너로 넘어간다. 그리고 이 컨테이너가 의존성을 주입(DI)해줌으로써, 작동 준비를 완료하게 된다.

---

### Spring Framework에서 의존성 주입 방법

1. 생성자 주입
2. setter 메소드 주입
3. 어노테이션 주입

---

**예시 코드**

- 생성자 주입

```java
private DependencyA dependencyA;
private DependencyB dependencyB;
private DependencyC dependencyC;

@Autowired
public DI(DependencyA dependencyA, DependencyB dependencyB, DependencyC dependencyC) {
    this.dependencyA = dependencyA;
    this.dependencyB = dependencyB;
    this.dependencyC = dependencyC;
}
```

- setter 메소드 주입

```java
private DependencyA dependencyA;
private DependencyB dependencyB;
private DependencyC dependencyC;

@Autowired
public void setDependencyA(DependencyA dependencyA) {
    this.dependencyA = dependencyA;
}

@Autowired
public void setDependencyB(DependencyB dependencyB) {
    this.dependencyB = dependencyB;
}

@Autowired
public void setDependencyC(DependencyC dependencyC) {
    this.dependencyC = dependencyC;
```

- 어노테이션 주입

```java
@Autowired
private DependencyA dependencyA;

@Autowired
private DependencyB dependencyB;

@Autowired
private DependencyC dependencyC;
```

---

### IoC 컨테이너의 역할

IoC 컨테이너의 주요 역할은 두 가지로 나눌 수 있다.

1. 빈 팩토리(Bean Factory)는 객체를 직접 관리하고, 이러한 객체를 빈(Bean)이라고 부른다. applicationContext.xml 파일에 등록된 빈을 생성하고 관리한다.
2. 애플리케이션 콘텍스트(ApplicationContext)는 트랜잭션 관리, 다국어 처리 등의 기능을 지원한다.