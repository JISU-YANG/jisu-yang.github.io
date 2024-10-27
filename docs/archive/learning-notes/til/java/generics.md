---
layout: note_shorts
parent: Learning Notes
category: Java
title: Generics
toc: true
---

## Generics란?
Java의 Generics는 클래스나 메서드를 특정 데이터 타입에 의존하지 않고 다양한 타입으로 재사용할 수 있게 하는 기능이다. 
쉽게 말해, 여러 데이터 타입을 받아들일 수 있게 해주는 "틀"이라고 생각하면 된다. 
Java의 ArrayList가 대표적인 예로, 다양한 타입의 데이터를 담을 수 있으면서도, 
컴파일러가 타입을 체크해 주기 때문에 안전하게 사용할 수 있다.

---
## Generics의 기본 문법
Generics는 대체로 타입을 나타내는 단일 대문자로 표현한다.

- `T` (Type): 일반적인 타입을 의미
- `E` (Element): 컬렉션의 요소를 의미
- `K` (Key), `V` (Value): 맵 형태의 Key-Value 쌍을 의미

---

### 1. 기본 사용법
```java
public class Box<T> {
private T content;

public T getContent() {
return content;
}

public void setContent(T content) {
this.content = content;
}
}
```
`Box` 클래스는 `T`라는 타입을 받아들인다. `T`는 실제로 사용하는 시점에 결정되며, 
`Box<String>`처럼 `String` 타입을 지정할 수도 있고, `Box<Integer>`처럼 `Integer`로 지정할 수도 있다.

---

### 2. 객체 생성 시 타입 지정
```java
Box<String> stringBox = new Box<>();
stringBox.setContent("Hello");
String content = stringBox.getContent();  // 컴파일 타임에 타입 확인 가능
```
여기서 `stringBox`는 `Box<String>` 타입이므로 `String` 외의 타입은 넣을 수 없다. 
컴파일러가 자동으로 타입을 확인해 주기 때문에 타입 안전성을 높일 수 있다.

---
## Generics의 장점
### 1. 타입 안전성
Generics를 사용하면 컴파일 시점에 타입이 체크되므로, 런타임 에러를 줄일 수 있다. 
예를 들어, `List<String>`에 `Integer`를 넣으려고 하면 컴파일 에러가 발생하므로, 불필요한 타입 체크를 줄일 수 있다.

```java
List<String> strings = new ArrayList<>();
strings.add("Hello");
// strings.add(100); // 컴파일 에러 발생
```

---

### 2. 코드 재사용성
Generics를 사용하면 하나의 클래스로 다양한 타입을 처리할 수 있다. 예를 들어, `Box<T>` 클래스를 정의해 두면 
`Box<String>`, `Box<Integer>`, `Box<Double>` 등 여러 타입에 대해 동일한 클래스를 사용할 수 있다.

---

## Generics의 와일드카드
Generics에서 `?`는 **와일드카드**로, 타입을 특정하지 않고 자유롭게 지정할 때 사용한다. 와일드카드는 상황에 따라 다른 제약을 둘 수도 있다.

---

### 1. 제한 없는 와일드카드 (`<?>`)
어떤 타입이든 받아들일 수 있게 할 때 사용한다.

```java
public void printBoxContent(Box<?> box) {
System.out.println(box.getContent());
}
```

---

### 2. 상한 경계 와일드카드 (`<? extends T>`)
특정 타입을 상한으로 하위 타입만 받아들이게 할 때 사용한다. 예를 들어, `<? extends Number>`는 `Number`와 그 하위 타입만 허용한다.

```java
public void printNumbers(Box<? extends Number> box) {
System.out.println(box.getContent());
}
```

---

### 3. 하한 경계 와일드카드 (`<? super T>`)
특정 타입의 상위 타입만 허용할 때 사용한다. `<? super Integer>`는 `Integer`와 그 상위 타입만 허용한다.

```java
public void addNumber(Box<? super Integer> box) {
box.setContent(100); // Integer와 상위 타입이므로 추가 가능
}
```

---

## Generics의 제한 사항
Generics는 강력하지만 몇 가지 제한 사항이 있다.

---

### 1. 기본 타입 사용 불가
`int`, `double`과 같은 기본 타입은 Generics에서 사용할 수 없다. 대신 `Integer`, `Double` 같은 래퍼 클래스를 사용해야 한다.

---

### 2. 정적 컨텍스트 Generics 사용 불가
클래스의 정적(static) 변수나 메서드에서는 제네릭 타입을 사용할 수 없다. 
멤버 필드는 클래스 전체에서 공유되는데 Generics 타입 파라미터는 인스턴스화할때 특정 타입으로 바인딩이 되기 떄문에 적용할 수 없다.

---

### 3. 인스턴스 생성 불가
Generics 타입 파라미터는 런타임에 특정 타입으로 바뀌지 않으므로, `new` 예약어로 인스턴스를 생성할 수 없다.
타입 소거되어 런타임에서는 Object 타입으로 간주된다.

이 경우, 인스턴스를 생성하기 위해서는 생성자 또는 팩토리 메서드에서 외부로부터 
구체적인 인스턴스를 주입받거나 제공자(Supplier)를 통해 생성해야한다.

---

Generics는 타입 안전성과 재사용성을 높이기 위한 강력한 도구다. Generics를 적절히 사용하면 더 안정적이고 유지보수가 쉬운 코드를 작성할 수 있다. Generics의 기본 개념을 잘 이해하고 활용해 보자.