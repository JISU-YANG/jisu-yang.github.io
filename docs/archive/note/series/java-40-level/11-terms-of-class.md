---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 11
title: Terms of Class
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

### 패키지 라인 (Package Line)

- 코드의 가장 첫 라인이다.
- 패키지 이름은 소문자로 작성한다.

```java
package noly.poly;
```

---

### 멤버 필드 (Member Field)
- 클래스 내에서 선언된 변수를 말한다.
- 기본적으로 멤버 변수에는 타입에 맞는 기본값이 대입된다.
- 'static' 키워드를 사용하면 정적 변수가 된다.
- 'public'으로 선언되면 인스턴스를 통해 접근 가능하다.

```java
private int a;
private static float f = 3.14f;
public String str = "홍길동";
```

---

### 생성자 (Constructor)
- 인스턴스를 생성할 때 호출되는 특별한 메서드다.
- 접근제한자가 'private'인 생성자는 외부에서 접근이 불가능하다.
- 'private' 생성자는 주로 싱글톤 패턴에서 사용된다.

```java
public Feature_Explain() {

}
```

---

### 멤버 메서드 (Member Method)
- 클래스 내에서 선언된 함수를 말한다.
- 메서드 안에 선언된 변수는 지역변수다.
- 메서드 안에서 변수의 우선순위는 지역변수 > 멤버필드다.
- 'this' 예약어를 사용하여 멤버필드의 우선순위를 변경할 수 있다.

```java
private void make(int param) {
    int a = 10;
    this.a = 100;

    for(int i = 0; i < 10; i++) {
        System.out.println(this.a);
    }
}
```