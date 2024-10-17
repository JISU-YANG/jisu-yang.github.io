---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 32
title: Single Ton Pattern
toc: true
reference:
  1:
    author: 한동석
    year: 2019
    platform: 코리아IT아카데미
    content: JAVA 단과 과정
    content-link:
  2:
    author: 전민균
    year: 2019
    platform: 코리아IT아카데미
    content: 웹 개발자 양성 과정
    content-link: 
---
싱글턴(Singleton) 패턴은 메모리에 객체를 한 번만 생성하여 여러 곳에서 동일한 객체를 공유하고자 할 때 사용하는 디자인 패턴이다.

---

### 싱글턴 디자인 패턴

싱글턴 패턴을 사용하면, 프로그램 내에서 단 하나의 객체 인스턴스만 존재하게 된다.

```java
public class SingleTon {
    // 선언: 객체의 주소를 담을 수 있는 변수를 선언한다.
    private static SingleTon instance;

    // 생성자 제한: 외부에서 객체를 직접 생성하지 못하도록 생성자를 private로 제한한다.
    private SingleTon(){}

    // 인스턴스 존재 확인: 객체의 주소를 판단하여 이미 객체가 생성되어 있다면 그 주소를 반환하고,
    // 아직 객체가 생성되지 않았다면 새로 생성하여 그 주소를 반환한다.
    public static SingleTon getInstance() {
        if (instance == null) {
            instance = new SingleTon();
        }
        return instance;
    }
}
```

싱글턴 패턴을 사용하면, 프로그램 전체에서 단 한 개의 객체만 생성되어, 메모리 사용을 최소화하는 데 도움이 된다.

---

### 추가적인 디자인 패턴

자바에서는 싱글턴 외에도 다양한 디자인 패턴을 제공한다.

1. Factory: 다형성(Polymorphism)을 활용한 객체 생성 패턴
2. Template: 객체의 복사를 지원하는 패턴
3. Delegate: Spring Framework의 핵심 기능인 IoC(Inversion of Control)를 지원하는 패턴
