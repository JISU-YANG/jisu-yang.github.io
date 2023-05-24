---
layout: note_shorts
parent: Note
category: Algorithm
title: K번째 수
toc: true
reference:
  1: 
    author: "programmers school"
    year: 코딩테스트 연습
    platform: "파트23 정렬"
    content: K번째 수
    content-link: "https://school.programmers.co.kr/learn/courses/30/lessons/42748"
---

> **문제설명:**
>
> 배열 `array`의 `i`번째 숫자부터 `j`번째 숫자까지 자르고 정렬했을 때, `k`번째에 있는 수를 구하려 합니다.
>
> 예를 들어, `array`가 `[1, 5, 2, 6, 3, 7, 4]`, `i = 2`, `j = 5`, `k = 3`인 경우에는
> 1. `array`의 2번째부터 5번째까지 자르면 `[5, 2, 6, 3]`입니다.
> 2. 1에서 나온 배열을 정렬하면 `[2, 3, 5, 6]`입니다.
> 3. 2에서 나온 배열의 3번째 숫자는 5입니다.
>
> 배열 `array`와 `[i, j, k]`를 원소로 가진 2차원 배열 `commands`가 매개변수로 주어질 때, `commands`의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 `return`하도록 `solution` 함수를 작성해주세요.
>
> **제한사항:**
> - `array`의 길이는 1 이상 100 이하입니다.
> - `array`의 각 원소는 1 이상 100 이하입니다.
> - `commands`의 길이는 1 이상 50 이하입니다.
> - `commands`의 각 원소는 길이가 3입니다.
>
> **입출력 예:**
> 
> | array                | commands                    | return     |
> |----------------------|-----------------------------|------------|
> | [1, 5, 2, 6, 3, 7, 4] | [[2, 5, 3], [4, 4, 1], [1, 7, 3]] | [5, 6, 3]  |
>
> **입출력 예 설명:**
> - [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
> - [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
> - [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

---

### 제출 코드
```java
import java.util.ArrayList;
import java.util.Collections; 

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] temp = new int[commands.length];
        for(int i = 0; i<commands.length; i++){
            temp[i] = cutter(array,commands[i][0],commands[i][1],commands[i][2]);
            System.out.println(temp[i]+"//"+i);

        }      
        return temp;
    }
    
    private static int cutter(int[] arNum, int sNum, int eNum, int choice) {
        int cnt = eNum - sNum + 1;
        ArrayList<Integer> result = new ArrayList<Integer>();

        for (int i = 0; i < cnt; i++) {
            result.add(arNum[sNum - 1 + i]);
        }
        Collections.sort(result);
        return result.get(choice-1);
    }
}
```

---

### 제출 코드 요약

1. 편하게 풀려고 ArrayList를 이용했다.
2. 어제 정렬은 직접 구현해봤기때문에 Collection의 sort 메서드를 이용했다.
3. index error를 조심해야한다