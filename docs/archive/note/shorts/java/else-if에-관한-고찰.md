---
layout: note_shorts
parent: Note
category: Java
title: else if에 관한 고찰
toc: true
---

### else if의 사용과 기능

`else if`는 `if`문과 함께 사용되는 조건문으로, `if`문과 같이 조건식을 정의할 수 있다. 이를 범위 조건문이라고 부르며, 이는 `switch`문과 달리 조건을 범위로 지정할 수 있기 때문이다.

```java
int hidden = 3;

if (hidden > 3){
    System.out.println("3보다 높습니다.");
}else if(hidden < 3){
    System.out.println("3보다 작습니다.");
}else{
    System.out.println("3입니다.");
}
```

---

### else if의 효과와 성능

때때로 개발자들이 가독성 향상을 목표로 모든 else if문을 if문으로 대체하는 것을 볼 수 있다. 그런데 이렇게 하면 어떤 변화가 있는지, 그리고 이 변화가 성능에 어떤 영향을 미치는지 알아보자.

**기능적 차이**

`if`문을 사용하면, `else if`나 `else`문은 해당 `if`문의 결과에 따라 실행 여부가 결정된다. 특히 `else`문의 경우는 조건식의 연산이 필요 없다.

```java
int a = 1;
String result = "";

if(a == 1){
    result = "정답 일치함";
}else{
    result = "정답 일치하지 않음";
}
```

```java
int a = 1;
String result = "";

if(a == 1){
    result = "정답 일치함";
}
if(a != 1){
    result = "정답 일치하지 않음";
}
```

`else if`문도 이런 흐름에 따라 수행된다. `if`문을 두 번 사용하면 두 개의 `if`문의 조건식이 항상 연산되지만, `else if`문을 사용하면 첫 번째 `if`문이 참일 경우 `else if`문의 조건식은 검사하지 않는다.

```java
int arNum = {1,2,3,4};
int cnt = 0;

for(int i = 0; i < arNum.length; i++){
    if(arNum[i] < 0){
        // 첫번째 로직
        cnt++;
    }else if(arNum[i] < 1){
        // 두번째 로직
        cnt++;
    }
}

// cnt = 4;
```

```java
int arNum = {1,2,3,4};
int cnt = 0;

for(int i = 0; i < arNum.length; i++){
    if(arNum[i] < 0){
        // 첫번째 로직
        cnt++;
    }
    if(arNum[i] < 1){
        // 두번째 로직
        cnt++;
    }
}

// cnt = 7;
```

**속도의 차이**

위에서 설명한 것처럼 `else if`문은 연산을 덜 수행하므로 일반적으로 더 빠른 성능을 보인다.
이를 직접 측정한 결과도 `else if`가 더 빠른 것으로 나타났다.
이 실험은 여러 차례 반복하여 평균값으로 결과를 비교하였고, 여전히 `else if`가 빠르다는 결과를 얻었다.

<img class="cdn-img" id="java-else-if-속도-비교.jpeg">

<img class="cdn-img" id="java-범위별-속도-비교.png">