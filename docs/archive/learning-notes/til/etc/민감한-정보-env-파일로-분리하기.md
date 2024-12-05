---
layout: note_shorts
parent: Learning Notes
category: ETC
title: 민감한 정보 env 파일로 분리하기
toc: true
reference:
1:
    author: 창의
    year: 2024
    platform: 블로그
    content: "[Spring Boot] 도커 컨테이너에 환경에서 application.yml 민감한 정보 환경변수로 묶어내기"
    content-link: "https://g-db.tistory.com/entry/Spring-Boot-%EB%8F%84%EC%BB%A4-%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%EC%97%90-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-applicationyml-%EB%AF%BC%EA%B0%90%ED%95%9C-%EC%A0%95%EB%B3%B4-%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98%EB%A1%9C-%EB%AC%B6%EC%96%B4%EB%82%B4%EA%B8%B0"
---

## 값 저장하기
### `.env` 파일 작성
KEY = value 형태로 작성합니다.

```
DB_URL=jdbc:postgresql://localhost:5432/oneeat
DB_USERNAME=postgres
DB_PASSWORD=12345678
```

---

### `application.yml` 적용
EL 표현식으로 KEY를 작성합니다.

```
spring:
  datasource:
    url: ${DB_URL}
    username: ${DB_USERNAME}
    password: ${DB_PASSWORD}
    driver-class-name: org.postgresql.Driver
```

---

### 로컬 환경에 적용
1. IntelliJ plugin에서 EnvFile을 다운로드하고 재시작합니다.
2. 실행/디버그 구성에서 Spring Boot - OneeatApplication으로 들어갑니다.
3. Enable EnvFile에 체크합니다.
4. \+ 버튼을 눌러 `.env` 파일을 등록합니다. (Mac 숨김파일 표시 단축키: `shift + command + .`)

<img class="cdn-img" id="intellij-env-적용.png">

---

## 서버에서 객체로 사용하기
### Gradle에 dependency 추가하기

```
implementation 'io.github.cdimascio:dotenv-java:3.0.0'
```

---

### Value 가져오기

```
Dotenv dotenv = Dotenv.load();
dotenv.get("MY_ENV_VAR1")
```

---

### Iterator 사용하기

```
for (DotenvEntry e : dotenv.entries()) {
    System.out.println(e.getKey());
    System.out.println(e.getValue());
}
```