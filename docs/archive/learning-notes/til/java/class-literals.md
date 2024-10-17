---
layout: note_shorts
parent: Learning Notes
category: Java
title: Class Literals
toc: true
---

### 클래스 리터럴이란

`클래스 리터럴(Class Literals)`이란 Java SE에서 `.class` 부분을 가리킨다.

```java
public class ClassLiterals{
    public static void main(String[] args){
        System.out.println(Object.class);
    }
}
```
위의 코드에서 `Object.class` 부분이 클래스 리터럴이다.

---

### 클래스 리터럴 사용하기

클래스 리터럴은 아래의 항목들에 ".class" 토큰을 붙여서 사용할 수 있다.

- 클래스(`class`)
- 인터페이스(`interface`)
- 배열 타입(`array type`)
- 기본 타입(`primitive type`)
- `void`(the pseudo-type void)

---

### 클래스 리터럴에 대한 정리

```java
public final class Class<T> extends Object implements Serializable, GenericDeclaration, Type, AnnotatedElement
```

`Class` 클래스의 인스턴스는 JVM에 의해 자동적으로 생성되며, 이 인스턴스는 참조(`Reference`)를 가진다.

`Ex.class`의 리턴 값은 `Class<Ex>`의 참조 값이다.

추가로, `getClass` 메소드를 통해서도 같은 값을 얻을 수 있다.