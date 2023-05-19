---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 21
title: String 2
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
문자열을 나누는 방법에는 여러 가지가 있다. 여기서는 `java.lang.String` 클래스의 `substring()`과 `split()` 메소드, 그리고 `java.util.StringTokenizer` 클래스를 활용하는 방법을 살펴본다.

---

### 문자열 나누기

자주 사용되는 문자열 나누기 메소드는 다음과 같다:

1. `substring()`
2. `split()`

---

### substring() 사용시 주의사항

`substring()` 메소드는 끝 인덱스가 지정한 값보다 하나 작은 위치까지만 반환한다. 그래서 직접적으로 아규먼트를 인덱스로 사용하면 예외가 발생할 수 있다. 탐색을 할 때는 인덱스 -1을 사용해야 한다.

```java
class Ex() {
    String email = "jisuyang@egoist.im";
    int idx = email.indexOf("@");
    
    String id = email.substring(0, idx);  // 인덱스 -1을 사용
    String domain = email.substring(idx + 1);
    String domain2 = email.substring(idx + 1, email.length());
    String etc = email.substring(idx, idx + 1);
    String etc2 = email.substring(100);  // Exception
}
```

---

### split() 사용시 주의사항
`split(token)` 메소드는 문자열을 특정 토큰으로 나눈다. 그러나 앞쪽의 공백은 포함하지 않고 뒤쪽의 공백은 포함한다.

---

### StringTokenizer 사용하기
`java.util.StringTokenizer` 클래스를 이용하면 반복자 패턴을 사용해 개수와 순서를 모를 때 유리하다.