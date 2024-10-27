---
layout: note_shorts
parent: Learning Notes
category: Java
title: Optional
toc: true
---

## Optional이란?
Java에서 Optional이란 값이 있을 수도, 없을 수도 있는 상황을 다루기 위한 도구다. 
개발하면서 종종 마주하는 NullPointerException을 예방하기 위한 것이다. 
Optional을 사용하면 null을 안전하게 다루는 동시에, 코드의 가독성을 높일 수 있다.

---

## Optional 생성 방법
### 1. 빈 Optional 생성
값이 없는 Optional을 만들고 싶다면 Optional.empty()를 사용한다.

```java
Optional<String> emptyOpt = Optional.empty();
```
여기서 emptyOpt는 값이 없음을 명시한 빈 Optional 객체다.

---

### 2. 값이 있는 Optional 생성
값이 있을 때는 Optional.of()를 사용해 값을 가진 Optional을 생성한다. 단, null을 넣으면 예외가 발생하니 주의한다.

```java
Optional<String> opt = Optional.of("Hello, World!");
```

---

### 3. 값이 있을 수도 없을 수도 있는 경우
값이 null일 가능성이 있다면 Optional.ofNullable()을 사용한다. 이 방법으로 null일 경우 자동으로 빈 Optional을 반환하게 된다.

```java
String name = getName();  // name이 null일 가능성이 있다
Optional<String> optName = Optional.ofNullable(name);
```

---

## Optional의 주요 메소드
### 1. 값 존재 확인 - isPresent()
값이 있는지 확인하려면 isPresent()를 사용한다. 값이 있으면 true, 없으면 false를 반환한다.

```java
if (opt.isPresent()) {
System.out.println(opt.get());  // 값이 있을 때만 출력
}
```

---

### 2. 값이 있을 때만 실행 - ifPresent()
값이 있을 때만 특정 작업을 수행하고자 할 때 ifPresent()를 사용한다. 주어진 람다식을 값이 있을 때만 실행해준다.

```java
opt.ifPresent(value -> System.out.println(value));
```

---

### 3. 값이 없을 때 기본값 사용 - orElse()
값이 없을 경우 특정 기본값을 사용하고 싶다면 orElse()를 사용한다. null 대신 안전한 기본값을 반환해 준다.

``` java
String result = opt.orElse("Default Value");
```

---

### 4. 값이 없을 때 예외 던지기 - orElseThrow()
값이 반드시 필요한 경우, 값이 없으면 예외를 던지는 방식으로 처리한다. 값이 없으면 명확한 예외를 발생시키며 안전하게 다룰 수 있다.

```java
String result = opt.orElseThrow(() -> new IllegalArgumentException("Value is required"));
```

---

Optional은 코드에서 null을 안전하게 다루는 강력한 도구다. 사용하면 불필요한 null 체크를 줄이고, 좀 더 명확하게 값의 존재 여부를 다룰 수 있다.