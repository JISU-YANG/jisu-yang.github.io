---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 15
title: Syntax
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

### if(범위 조건문)
if문은 특정 조건이 참인 경우에만 코드 블록을 실행하는 구문이다.

### if문의 형태

```java
// if문 기본 형태
if(조건식){
    // 조건이 true일 때 실행되는 코드 블록
}

// if-else 형태
if(조건식){
    // 조건이 true일 때 실행되는 코드 블록
}else{
    // 조건이 false일 때 실행되는 코드 블록
}

// if-else if 형태 (다중 조건문)
if(A 조건식){
    // A 조건이 true일 때 실행되는 코드 블록
}else if(B 조건문){
    // B 조건이 true일 때 실행되는 코드 블록
}else{
    // A와 B 조건이 모두 false일 때 실행되는 코드 블록
}
 
```

### for(선택 반복문)
범위가 있거나 변수가 값으로 사용될 때 사용한다. 등차수열, 등비수열에 유리하다.

### for문의 형태
```java
for(int i = 0; i < 5; i++){ // 초기화; 조건; 증감
    // 반복되는 코드 블록
}
```

### while(무한 반복문)
while문은 특정 조건이 참인 동안 코드 블록을 반복 실행하는 구문이다.

### while문의 형태
```java
while(조건식){
    // 반복되는 코드 블록
}

// do-while문 (무조건 한 번은 실행)
do{
    // 반복되는 코드 블록
}while(조건식)

// 무한 반복 for문
    for(;;){
}
```

### 반복문의 제어 키워드
- break : 현재 반복문을 즉시 종료한다.
- continue : 반복문의 현재 회차를 즉시 종료하고 다음 회차를 시작한다.