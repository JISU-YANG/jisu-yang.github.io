---
layout: note_series
parent: Note
series: Java 40 Level
chapter: 8
title: Primitive Type
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
### 기본형 타입 (Primitive Type)

기본형 타입은 문자, 숫자, 논리(True/False)와 같은 간단한 값(Value)을 저장하기 위한 공간을 말합니다. 프로그래밍에서는 효율을 중요하게 여기므로, 각 타입별로 메모리에 할당되는 공간과 값의 범위가 다릅니다.

---

### 기본형 타입 (Primitive Type)의 특징

기본형 타입은 메모리(Memory)의 스택(Stack)영역에 위치하고, 변수는 값을 직접 참조합니다. 이를 pass by value라고 합니다. 또한, 기본형 타입은 Mutable(변경 가능한)한 성질을 가집니다. 그리고 정수형, 실수형 변수의 가장 앞 비트는 부호를 나타내는 부호비트를 가집니다.

---

### 기본형 타입 (Primitive Type)의 종류

|분류|정수형|||||실수형(부동소수점)|논리형|문자형|
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|기본값|0|||||0.0|false|\u0000|
|타입|byte|short|int|long|float|double|boolean|char|
|크기|1byte (8bit)|2byte (16bit)|4byte (32bit)|8byte (64bit)|4byte (32bit)|8byte (64bit)|1byte (8bit)|2byte (16bit)|
|값|-128 ~ 127|-32,768 ~ 32,767|-21억 ~ 21억|-2^63 ~ 2^63 - 1|소수점 6자리|소수점 15자리|true / false|0 ~ 2^16|

---

### 리터럴 (Literal, Non-Computation-Value)

리터럴은 컴퓨터가 해석하지 않아도 되는 값으로, 프로그램이 실행될 때 이미 그 값이 결정되어 있습니다.

|분류|정수형|||||실수형||
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|종류|10진수|2진수|8진수|16진수|long 타입|float 타입|double 타입|
|리터럴 값|n|"0b" + n|"0" + n|"0x" + n|	n + "L"|n.n + "F"|n.n|
