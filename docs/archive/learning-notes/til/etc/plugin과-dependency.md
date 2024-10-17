---
layout: note_shorts
parent: Learning Notes
category: ETC
title: Plugin과 Dependency
toc: true
reference:
  1:
    author: r9891
    year: 2012
    platform: stack overflow
    content: Answer
    content-link: "https://stackoverflow.com/a/11883925"
---

Maven에서 Plugin과 Dependency는 모두 Jar 파일이지만, 사용 목적에 따라 나뉘게 된다. 이 둘의 차이를 알아보자.

---
### Dependency
Dependency는 프로젝트에서 직접 사용되는 Class 파일의 Jar 파일을 추가한다. 이는 Resource로서의 역할을 담당한다.

- Dependency는 클래스 경로에 필요한 Jar 파일을 추가하는 역할을 한다.
- 특정 라이브러리나 프레임워크를 사용하려면, 해당 라이브러리의 클래스 파일이 필요하다.
- 이러한 클래스 파일들이 포함된 Jar 파일을 Dependency로 선언하면, Maven이 이를 클래스 경로에 추가한다.
- 이를 통해 프로젝트 코드에서 해당 라이브러리의 클래스를 사용할 수 있다.

---
### Plugin
Plugin은 Maven 빌드 과정에서 실행되는 작업을 담당하는 Class 파일의 Jar 파일을 추가한다. 이는 Tool로서의 역할을 수행한다.

- Plugin은 빌드 과정에서 특정 작업을 수행하는 역할을 한다.
- 예를 들어, `compiler-plugin`은 소스 코드를 컴파일하는 작업을 수행한다.
- 이러한 Plugin은 빌드 과정에서만 필요하고, 빌드 후의 실행 파일에는 포함되지 않는다.

---
### 예시: Junit
Junit의 경우를 보면, 이 둘의 역할을 더욱 명확하게 이해할 수 있다.

1. `surefire-plugin`은 단위 테스트를 실행하는 작업을 수행한다.
2. 이 Plugin은 Junit라는 테스트 프레임워크의 클래스 파일이 필요하다.
3. 따라서, Junit의 Jar 파일을 Dependency로 추가하게 된다.
4. 이렇게 추가된 Dependency는 `surefire-plugin`이 사용하여 단위 테스트를 실행한다.

결론적으로, Plugin은 빌드 과정에서 실행되는 작업을 담당하며, Dependency는 이러한 작업을 수행하기 위해 필요한 클래스 파일을 제공한다. 이 둘은 각각 Tool과 Resource로서 Maven 빌드 시스템에서 중요한 역할을 수행한다.