---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 40
title: Design Pattern
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

### 프로토타입 패턴(Prototype Pattern)

프로토타입 패턴은 기존 인스턴스를 복제하여 새로운 인스턴스를 생성하는 방법이다.

1. 클래스 인스턴스를 생성한다.
2. 생성한 인스턴스를 복제한다. (값은 유지하면서 객체를 변경한다.)

```java
  public class A implements Cloneable {
      @Override
      protected Object clone() {
          return super.clone(); 
      }
  }
``` 

---

### 싱글턴 패턴(Singleton Pattern)

싱글턴 패턴은 한 클래스의 인스턴스를 단 하나만 생성하도록 하는 패턴이다.

1. 생성자를 `private`으로 선언한다.
2. 객체를 판별하고 주소를 담을 수 있는 필드를 선언한다.
3. 해당 필드가 `null`인지 확인하여 인스턴스 생성 여부를 판단한다.

---

### 이터레이터 패턴(Iterator Pattern)

이터레이터 패턴은 컬렉션을 순회하는 인터페이스를 제공하는 패턴이다.

1. 확인하는 메소드: `hasNext()`
2. 출력하는 메소드: `next()`
3. 삭제하는 메소드: `remove()`

---

### 팩토리 패턴(Factory Pattern)

팩토리 패턴은 인스턴스 생성 로직을 별도의 클래스/메소드에 위임하여, 객체를 생성하는 패턴이다.

1. 추상 클래스나 인터페이스로 구조를 만들고, 하위 클래스에서 구현체를 생성한다.
2. 코드의 재사용성을 높이고, 구조를 단순화할 수 있다.

---

### 템플릿 메소드 패턴(Template Method Pattern)

템플릿 메소드 패턴은 알고리즘의 구조를 메소드에 정의하고, 하위 클래스에서 알고리즘 구조의 변경 없이 알고리즘을 재정의하는 패턴이다.

1. 추상 클래스나 인터페이스를 정의한다.
2. 하위 클래스에서 메소드를 재정의(`Override`)한다.
3. 알고리즘의 골격은 유지하면서, 다른 동작을 실행할 수 있도록 한다.
