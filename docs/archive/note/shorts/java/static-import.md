---
layout: note_shorts
parent: Note
category: Java
title: Static import
toc: true
---


### `static import`의 장단점

`static import`를 사용하면 Library에 바로 Member처럼 접근할 수 있어서 코드를 짧게 쓸 수 있고, 가독성을 높일 수 있다.

그런데 잘못 사용하면 가독성을 오히려 해칠 수 있다. 또한 네임스페이스가 오염될 수 있다. 이는 동일한 이름이 겹치는 경우를 말한다.

---

### 코드 예시

**일반적인 `import` 사용시**

```java
import java.lang.Math.*;

double a = Math.abs(123.456) * Math.PI;
```

**`static`을 이용한 `import` 사용시**

```java
import static java.lang.Math.abs;
import static java.lang.Math.PI;

double a = abs(123.456) * PI;
```
`static import`을 사용할 때는 [와일드 카드를 권장하지 않는다.](https://docs.oracle.com/javase/1.5.0/docs/guide/language/static-import.html)
왜냐하면 이를 사용하면 네임스페이스가 오염될 수 있기 때문이다.
