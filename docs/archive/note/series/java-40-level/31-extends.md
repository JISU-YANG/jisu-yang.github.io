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

### Extends, Implements
부모 Class의 특성을 Member로 확장시킨다.

### Extends
같은 부모를 중복으로 상속받는 형태가 되기때문에 다중 상속은 되지 않고 단일 상속만 가능하다.

### Java의 Class 종류
1. Class: extends
2. Enum(절차식)
3. Interface: implements

### 특징
- Interface끼리 Extends하면 합치는 형태가 된다.


![Extends Image](/Source/Extends.png)


- 하위 클래스는 상위 클래스와 오브젝트 클래스에 접근이 가능하다.


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
