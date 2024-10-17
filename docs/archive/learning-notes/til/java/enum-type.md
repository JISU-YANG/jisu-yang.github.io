---
layout: note_shorts
parent: Learning Notes
category: Java
title: Enum Type
toc: true
reference:
  1:
    author: 뱀귤
    year: 2021
    platform: 블로그
    content: "Java Enum 1편 : Enum 기본적인 사용"
    content-link: "https://bcp0109.tistory.com/334"
  2:
    author: 이동욱
    year: 2017
    platform: 블로그
    content: Java Enum 활용기
    content-link: "https://techblog.woowahan.com/2527/"
  3:
    author: skyepodium
    year: 2022
    platform: 블로그
    content: "[자바] enum 하나가 if 문 여러개 보다 낫다."
    content-link: "https://velog.io/@skyepodium/enum-하나가-if-문-여러개-보다-낫다"
---

### Java의 Enum Type

Java에서는 JDK 1.5부터 향상된 성능의 `Enum` 클래스를 지원한다. 이는 C/C++의 `int` 값 기반 `Enum`에 비해 여러 가지 장점을 가지고 있다.

---

### Enum Type의 사용 이유

`Enum` Type을 사용하면, 관련된 상수들을 그룹화하여 몇 가지 문제점을 해결할 수 있다.

- 개발자의 실수를 줄일 수 있다.
- 변수명을 깔끔하게 사용할 수 있으므로, 코드를 한 눈에 이해하기 쉽다.
- `Enum`이 제공하는 편리한 기능을 활용할 수 있다.
- 유지보수가 간편하다. 새로운 상수를 추가할 때는 `Enum`에 식별자를 하나 더 추가하기만 하면 된다.
- `Enum`의 인스턴스는 싱글톤으로 생성되므로, 프로그램 어디에서나 접근이 가능하다.

---

### Enum Type의 사용 방법

**기본적인 `Enum` 클래스 정의**

```java
public enum Day {
    MON, TUE, WED, THU, FRI, SAT, SUN
}
```

**필드가 추가된 `Enum` 클래스 정의**

```java
public enum Day {
    MON("Monday","Mon",0),
    TUE("Tuesday","Tue",1),
    WED("Wednesday","Wed",2),
    THU("Thursday","Thu",3),
    FRI("Friday","Fri",4),
    SAT("Saturday","Sat",5),
    SUN("Sunday","Sun",6);

    private String full;
    private String lower;
    private int index;

    Day(String full, String lower, int index) {
        this.full = full;
        this.lower = lower;
        this.index = index;
    }

    public String getFull() {
        return full;
    }

    public String getLower() {
        return lower;
    }

    public int getIndex() {
        return index;
    }
}
```
`Enum`에서는 필요한 로직을 추가하거나 Lombok 어노테이션을 사용해 코드를 더 간결하게 작성할 수 있다.

---

### Enum Type의 기능
`Enum` Type은 여러 유용한 메소드를 제공한다.

- `static E values()`: 해당 `Enum`의 모든 상수를 배열로 반환한다.
- `static E valueOf(String name)`: 전달된 문자열과 일치하는 필드의 상수를 반환한다.
- `protected void finalize()`: 해당 `Enum` 클래스가 `final` 메소드를 가질 수 없게 된다.
- `String name()`: 해당 상수의 이름을 반환한다.
- `int ordinal()`: 해당 상수가 정의된 순서에 따라 index를 반환한다.