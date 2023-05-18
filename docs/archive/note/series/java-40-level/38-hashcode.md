---
layout: note_series
parent: Note
series: Java 40 Level
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

### HashCode 정의
객체는 자신만의 고유한 값을 갖게 되는데, 이를 HashCode라 부른다. 이 HashCode는 객체의 유일성을 보장하는 중요한 역할을 맡게 되고, 특히 해시 기반의 데이터 구조에서 중요성이 더욱 부각된다.

---

### Java의 HashCode 위치
`hashCode()` 메소드는 `java.lang.Object` 클래스 안에 정의되어 있다. 모든 Java 클래스는 이 Object 클래스를 상속받기 때문에, 어느 클래스에서든 접근하고 사용할 수 있다.

---

### HashCode의 기능
HashCode는 객체의 메모리 주소를 기반으로 정수 값을 만들어 낸다. 이 정수값은 중복되지 않는 유일한 식별자로 쓰이게 되어, 객체를 빠르고 정확하게 식별하는 메커니즘을 제공하게 된다.

---

### Equals 메소드와의 관계
Java에서는 equals 메소드를 통해 두 객체가 동일한지를 판단한다. 이 메소드는 고유한 HashCode를 비교하여 객체의 동일성을 판단하는데 쓰인다. 따라서 equals 메소드와 hashCode 메소드는 서로 밀접한 관계를 가지게 된다.

---

### HashCode 재정의
개발자는 필요에 따라 `hashCode()` 메소드를 재정의할 수 있다. 이 재정의는 주로 equals 메소드와 함께 이루어지게 된다. 이는 두 객체의 동일성 판단을 보다 정확하게 하기 위해서이다. 이를 통해 개발자는 객체의 동일성과 HashCode 생성 방식을 자신의 의도에 맞게 설정할 수 있게 된다.
