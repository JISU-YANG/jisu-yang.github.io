---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 31
title: Extends
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


Java에서는 'Extends'와 'Implements'라는 두 가지 방식을 제공하여 클래스를 확장하고 특성을 추가할 수 있다.

---

### Extends와 Implements

'Extends'와 'Implements'는 부모 클래스의 특성을 자식 클래스로 확장시키는 데 사용된다.

---

### Extends

Java에서는 다중 상속을 지원하지 않는다. 이는 클래스가 여러 부모 클래스로부터 상속을 받는 것을 허용하지 않는다는 것을 의미한다. 따라서, 'Extends'는 단일 상속만 가능하다.

---

### Java의 Class 유형

Java에서는 크게 세 가지 유형의 클래스를 지원한다.

1. Class: extends 키워드를 이용하여 다른 클래스를 상속받는다.
2. Enum: 열거형 데이터를 나타내는 클래스다.
3. Interface: implements 키워드를 이용하여 다른 인터페이스를 구현한다.

---

### 인터페이스간의 상속

인터페이스 간에 'Extends'를 사용하면, 두 인터페이스의 특성이 합쳐진 새로운 인터페이스를 만들 수 있다.

<img class="cdn-img" id="java-40-level-Extends.png">

---

### 클래스간의 접근성

하위 클래스는 상위 클래스와 Object 클래스에 접근할 수 있다. 하지만, 클래스간의 형변환에서는 주의가 필요하다. 아래 예시 코드를 참고하자.

```java
public class ex(){
    public static void main(String[] args){
        Child c1 = new Child();
        Child_Two c2 = new Child_Two();
        c1.parentsPrint();
        c2.parentsPrint();
        c2.child_Two_Print();

        // 코드에는 문제가 없지만 클래스의 기능을 잃어버리기 때문에
        // ClassCastException이 발생한다.
        Object o1 = c1;
        Object o2 = c2;

        Child_Two cc1 = (Child_Two)o1;
        Child cc2 = (Child)o2;
    }
}
```