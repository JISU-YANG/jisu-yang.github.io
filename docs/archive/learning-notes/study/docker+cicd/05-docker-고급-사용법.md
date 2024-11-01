---
layout: note_series
parent: Learning Notes
study: Docker+CICD
chapter: 5
title: Docker 고급 사용법
toc: true
reference:
  1:
    author: 이현구
    year: 2023
    platform: 스파르타코딩클럽
    content: Docker + CI/CD
    content-link: https://spartacodingclub.kr/
---

## Docker Volume
### Volume
**볼륨이란**  
볼륨은 컴퓨터에 따로 생성된 폴더로, Docker가 관리하며 데이터를 여기에 저장한다.

---

**생성 위치**  
Docker는 볼륨을 보통 컴퓨터의 **`/var/lib/docker/volumes/`** 경로에 만든다.

---

**볼륨의 장점**

- **백업과 이동 용이성**  
  데이터를 다른 곳으로 옮기거나 백업하기가 편리하다.

- **Docker 명령어로 관리**  
  Docker 명령어나 API를 사용해 볼륨을 쉽게 관리할 수 있다.

- **플랫폼 호환성**  
  리눅스, 윈도우 등 다양한 플랫폼에서 문제없이 작동한다.

- **안전한 공유**  
  여러 컨테이너가 동일한 데이터를 안전하게 공유할 수 있다.

- **볼륨 드라이버 지원**  
  데이터를 외부 스토리지에 저장하거나 보안을 강화할 수 있는 추가 기능을 제공한다.

- **데이터 영속성**  
  컨테이너가 삭제되어도 데이터는 남아있어 지속적으로 사용할 수 있다.

- **빠른 속도**  
  Mac이나 Windows에서 볼륨이 기본 저장 방식보다 더 빠르게 작동한다.

Docker는 **Volume**, **Bind Mount**, **tmpfs Mount** 중에서 **Volume**을 가장 권장한다.

---

### Bind Mount
**바인드 마운트란**  
컴퓨터의 특정 폴더나 파일을 Docker 컨테이너에서 바로 사용할 수 있게 한다. 볼륨보다는 기능이 제한적이지만 특정 상황에서 유용하다.

---

**사용 방식**  
컴퓨터의 파일이나 폴더를 컨테이너에 연결하여 컨테이너 내에서 이를 사용할 수 있다. 절대 경로를 사용하여 설정한다.

---

### tmpfs Mount
**tmpfs 마운트란**  
컴퓨터의 메모리를 사용해 일시적으로 데이터를 저장하는 방법으로, 임시 데이터 저장에 적합하다.

---

**사용 이유**

- **일시적인 데이터 저장**  
  임시 데이터를 메모리에 저장해 컨테이너 종료 시 데이터가 삭제된다.

- **빠른 성능**  
  메모리를 사용하므로 빠르게 데이터 처리가 가능하다.

---

## Docker Network
### Docker Network 이해
Docker 네트워크는 도커 컨테이너 간 통신을 돕는 네트워크이다. 이를 통해 컨테이너 간 원활한 통신이 가능하며, 보안성을 높일 수 있다.

---

**Docker 네트워크의 주요 개념**

- **샌드박스**  
  컨테이너를 외부 네트워크로부터 분리하는 역할을 한다.

- **엔드포인트**  
  샌드박스를 외부 네트워크와 연결하는 지점이다.

- **네트워크**  
  컨테이너 간 데이터 전송 경로로, 여러 네트워크에 컨테이너를 동시에 연결할 수도 있다.

---

**Docker Network 모델 (CNM)**  
Docker는 컨테이너 네트워크 모델(CNM)을 통해 컨테이너 간 네트워크 구현을 위한 요구사항을 정의한다.

---

### Docker Network 종류

1. **브리지 네트워크**  
   한 컴퓨터 내에서 여러 Docker 컨테이너 간 통신을 지원하는 기본 네트워크이다.

2. **공용 네트워크**  
   호스트 네트워크를 사용하여 컨테이너가 컴퓨터의 네트워크를 직접 사용할 수 있게 하는 방식이다.

3. **사설 네트워크**  
   특정 컨테이너끼리만 통신하도록 격리된 네트워크로, 다른 컨테이너나 외부 네트워크와는 분리된다.

---

## Docker Image 심화
### Docker hub repositories에 image push
**Push**  
이미지를 올리는 작업으로, Docker Hub와 같은 레지스트리에 저장할 수 있다.

---

**Registry**  
이미지를 저장하는 공간으로, `Dockerfile`이나 `docker commit`을 통해 생성한 이미지를 보관한다.

- **Public Registry**  
  공개적으로 사용할 수 있어 누구나 접근 가능하다.

- **Private Registry**  
  특정 사용자나 그룹만 접근할 수 있다.

- **Docker Hub**  
  `hub.docker.com`은 Docker 공식 레지스트리로, 자신의 계정 레지스트리에 이미지를 업로드하려면 Docker 계정 생성 및 로그인이 필요하다.

- **Docker Image Tag 후 Push**  
  Docker Hub의 개인 계정 레지스트리에 이미지를 저장하려면 이미지명 앞에 자신의 계정명을 추가해야 한다. 이를 통해 `docker push` 명령어 실행 시 이미지가 계정으로 연결된다.

  ```bash
  docker logout
  docker login

  docker image pull nginx:latest
  docker image pull ubuntu:22.04

  docker images

  docker image tag nginx:latest nbcdocker0000/nginx-test:1.0

  docker push nbcdocker0000/nginx-test:1.0

  docker images
  docker image rm nbcdocker0000/nginx-test:1.0
  docker container rm nginx-test --force
  docker image rm nginx-test:1.0 --force

  docker pull nbcdocker0000/nginx-test:1.0
  docker run -d -p 8001:80 --name=nginx-test nbcdocker0000/nginx-test:1.0
  ```

  - Push한 이미지는 Docker Hub 웹사이트에서 확인할 수 있다.

---

### Dockerfile 최적화
**Dockerfile 최적화의 필요성**
- **빠른 빌드**  
  Docker 이미지 생성 시간을 단축해 작업 속도를 높인다.

- **이미지 크기 감소**  
  이미지 크기를 줄이면 저장 공간이 절약되고, 다운로드 및 전송 속도가 빨라진다.

- **재사용성 향상**  
  효율적으로 작성된 Dockerfile은 여러 번, 다양한 환경에서 재사용할 수 있다.

- **보안 강화**  
  보안을 고려해 Dockerfile을 작성하면 해킹 등 보안 문제에 더 안전하다.

- **유지보수 용이**  
  깔끔하게 정리된 Dockerfile은 수정이나 업데이트가 쉽다.

---

### Java 환경 Image Build
**Dockerfile 예시**

- **alpine 이미지 사용**  
  최소한의 라이브러리만 포함된 `alpine` 이미지를 사용해 빌드 크기를 줄인다.

- **멀티 스테이지 빌드**  
  `gradle`이 애플리케이션 실행 컨테이너에 포함되지 않도록 멀티 스테이지 빌드를 사용한다.

```docker
# build는 gradle 이미지에서 `builder`라는 이름으로 설정
FROM gradle:8.5-jdk21-alpine AS builder

WORKDIR /app
COPY ./ ./
RUN gradle clean bootJar

# App
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app
COPY --from=builder /app/build/libs/spring-boot-0.0.1-SNAPSHOT.jar .

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "spring-boot-0.0.1-SNAPSHOT.jar"]
```

---

## Container 가상화
### Container 기술
`컨테이너`는 앱을 실행하는 데 필요한 모든 요소를 담은 상자와 같다. 
앱의 코드, 프로그래밍 언어, 라이브러리 등 필수 구성 요소를 하나에 담아 어디서든 동일한 환경에서 실행할 수 있다.
`Dockerfile`을 사용해 컨테이너 이미지를 생성한다.

---

### Container의 장점
**자원 효율성**  
컨테이너는 CPU나 메모리 같은 컴퓨터 자원을 여러 앱과 나눠 사용하며 효율적으로 관리할 수 있다.

---

**이식성**  
컨테이너는 한 번 설정한 환경을 어디서든 동일하게 실행할 수 있다.

---

**독립성**  
각 컨테이너는 독립적으로 작동해 하나의 컨테이너에 문제가 발생해도 다른 컨테이너에는 영향을 미치지 않는다.

---

### Container의 이점
**경량화**  
OS를 여러 컨테이너가 공유해 각 컨테이너에 OS를 따로 설치할 필요가 없으며, 파일 크기가 작고 빠르게 시작된다.

---

**이동성**  
실행에 필요한 환경을 모두 포함하므로, 한 번 만든 컨테이너를 어디서든 실행할 수 있다.

---

**최신 개발 및 아키텍처 지원**  
크기가 작고 다양한 플랫폼에 적합해, 새로운 코드 업데이트와 배포에 유리하다.

---

**자원 활용률 향상**  
컨테이너는 자원을 효과적으로 활용하며, 앱의 각 요소를 개별적으로 확장할 수 있어 유연성이 높아진다.

---

### Container 활용
**마이크로서비스**  
컨테이너는 작고 가벼워 앱을 작은 부분으로 나눠 관리하는 마이크로서비스에 적합하다.

---

**DevOps**  
DevOps 방식을 채택한 팀에서 필수 도구로 활용되며, 앱을 더 빠르고 효율적으로 개발하고 배포할 수 있다.

---

**하이브리드 및 멀티클라우드**  
노트북, 데이터 센터, 클라우드 등 어디서든 실행 가능해 하이브리드 및 멀티클라우드 환경에 이상적이다.

---

**클라우드 마이그레이션**  
앱을 컨테이너로 변환하면 클라우드로 쉽게 이전할 수 있으며, 관리도 용이해진다.