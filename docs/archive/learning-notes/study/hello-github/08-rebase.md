---
layout: note_series
parent: Learning Notes
study: Hello GitHub
chapter: 8
title: Rebase
toc: true
reference:
  1: 
    author: 호눅스
    year: 2020
    platform: Inflearn
    content: Git과 GitHub 시작하기
    content-link: https://www.inflearn.com/course/git-and-github/dashboard
---

### 재배치 (Rebase)

재배치는 현재 브랜치를 대상 브랜치 위로 올리는 방식으로 두 브랜치를 합치는 작업이다.

---

### 재배치 (Rebase)의 특징

재배치는 다음과 같은 특징이 있다:

1. 커밋 히스토리가 깔끔하게 정리된다.
    - 갈래가 발생한 히스토리를 한 줄로 만들어준다.

2. 이미 원격 저장소에 올라간 경우, 협업을 하고 있는 경우에는 사용하기 위험하다.
    - 이는 재배치가 과거의 커밋을 변경하므로, 다른 사람과 공유하는 브랜치에서는 사용을 자제해야한다.

---

### 재배치 (Rebase)의 방법

재배치를 사용하는 방법은 아래와 같다:

1. 합쳐질 브랜치로 체크아웃한 후, 목적 브랜치를 대상으로 재배치 명령을 수행한다.

2. 충돌이 발생하면, 충돌 부분을 수정하고, 수정된 파일을 ADD 한다.

3. 다시 재배치 명령을 수행한다.

4. 목적 브랜치로 체크아웃하고, 합쳐질 브랜치를 병합한다.