---
layout: note_series
parent: Learning Notes
study: Java 40 Level
chapter: 30
title: Exception
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
Java에서는 다양한 종류의 예외 처리 방법을 제공한다. 여기서는 몇 가지 기본적인 용어와 기능에 대해 알아본다.

---

### 예외와 오류의 차이

1. 예외(Exception): 프로그래밍 코드에서 발생할 수 있는 문제들을 지칭한다. 예를 들어, null point exception과 같은 것들이 있다.
2. 오류(Error): 개발자가 직접적으로 처리할 수 없는 시스템 레벨의 문제를 지칭한다.

---

### 예외 처리

코드에서 예외가 발생했을 때 어떻게 대처할지 정해놓는 것을 '예외 처리'라고 한다. 양이 많더라도 자세히 적는 것이 중요하다.

---

### 유효값

유효값이란, 특정 함수나 메소드가 입력으로 받을 수 있는 값의 범위를 의미한다.

---

### printStackTrace()

'printStackTrace()' 메소드는 예외가 발생했을 때 그 예외의 추적 정보를 출력해준다.

---

### JDK 버전에 따른 예외 처리의 변화

1. JDK 1.6까지는 multi-catch라는 기능을 제공한다.
2. JDK 1.7부터는 or 절을 지원하게 되었다.
3. JDK 1.8부터는 Try-with-Resources라는 기능을 추가하였다.

---

### Try Catch 구문의 사용

아래는 Try Catch 구문의 기본적인 사용 방법을 보여주는 코드이다.

```java
class ex(){
    public static void main(String[] args) {
        try{
            // 감시할 코드
        }catch(Exception1 e1){
            // 파라미터 타입에 해당하는 예외가 발생했을 경우 작동될 코드
        }finally{
            // 선택적으로 사용하며 정리 코드를 주로 작성한다.
        }
    }
}
```