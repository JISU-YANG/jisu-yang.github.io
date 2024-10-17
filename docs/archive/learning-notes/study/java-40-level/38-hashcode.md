---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 38
title: Hashcode
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
객체는 각각 자신만의 고유한 값을 가지며, 이를 HashCode라고 부른다. 이 HashCode는 객체의 고유성을 보장하는 중요한 역할을 담당하며, 특히 해시 기반의 데이터 구조에서 중요하다.

---

### HashCode란?

HashCode는 객체가 가지는 유일한 값으로, 객체의 유일성을 보장한다. 특히 해시 기반의 데이터 구조에서 이 값의 중요성이 두드러진다.

---

### HashCode의 위치

`hashCode()` 메소드는 `java.lang.Object` 클래스에 정의되어 있다. 모든 Java 클래스가 이 Object 클래스를 상속받기 때문에, 어떤 클래스에서든 이 메소드를 호출할 수 있다.

---

### HashCode의 기능

HashCode는 객체의 메모리 주소를 바탕으로 고유한 정수 값을 생성한다. 이 값은 중복되지 않는 유일한 식별자 역할을 하여, 객체를 빠르고 정확하게 식별할 수 있는 메커니즘을 제공한다.

---

### Equals 메소드와의 관계

Java에서는 `equals()` 메소드를 통해 두 객체의 동일성을 판단한다. 이때 HashCode를 비교하여 판단하기 때문에, `equals()` 메소드와 `hashCode()` 메소드는 밀접한 관계를 가진다.

---

### HashCode의 재정의

필요에 따라 `hashCode()` 메소드를 재정의할 수 있다. 이 재정의는 주로 `equals()` 메소드와 함께 이루어진다. 이를 통해 개발자는 객체의 동일성 판단 기준과 HashCode 생성 방식을 자신의 의도에 맞게 조절할 수 있다.
