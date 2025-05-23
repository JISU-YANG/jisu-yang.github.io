---
layout: note_series
parent: SPARTA 일일 회고
chapter: 18
title: 20241127_Docker와 Compose
toc: true
nav_exclude: true
---

## 프로젝트 관리 심화
### 학습 범위
- Docker
- Docker-compose
- ~~CI/CD 파이프라인 구축~~
- ~~AWS Elastic Container Service (ECS)~~

모든 개념을 깊이 있게 이해하기보다는, "이런 식으로 구축하는 것이다"라는 그림으로 이해하는 것에 초점을 두자. 

---

## Docker
Docker는 애플리케이션을 **컨테이너**라는 가볍고 이식성 있는 패키지로 실행하도록 도와주는 도구이다. 
이를 통해 애플리케이션의 **개발, 테스트, 배포**를 쉽게 할 수 있다.

---

### 주요 특징
- **가상머신(VM)**보다 훨씬 가볍고 빠르게 동작하며, 어디서든 동일하게 실행 가능하다.
- 애플리케이션과 실행에 필요한 모든 요소를 포함한 **이미지**를 사용한다.
- 실행 중인 컨테이너는 동적인 환경으로, 다양한 설정을 통해 제어 가능하다.

---

### 주요 개념
- **도커 이미지**  
  `Dockerfile`로 애플리케이션과 실행에 필요한 모든 것을 포함한 정적인 파일이다.
- **컨테이너**  
  이미지를 실행하여 생성된 동적인 환경이다.
- **도커 허브**  
  이미지를 공유하는 중앙 저장소이다.
- **볼륨**  
  컨테이너가 삭제되더라도 데이터가 유지되는 저장 공간이다.
- **네트워크**  
  컨테이너 간 통신을 관리하는 방식으로, 기본적으로 브릿지 네트워크를 사용하여 내부 통신을 지원한다.

---

### 도입 효과
- 커맨드 창에서 발생하는 크리티컬 이슈를 줄일 수 있다.
- 일관된 실행 환경을 보장하여 배포와 확장이 용이하다.

---

## 도커와 가상머신(VM) 비교

| 항목               | Docker                                       | 가상머신 (VM)                     |
|--------------------|---------------------------------------------|------------------------------------|
| 격리 수준          | 동일한 OS 커널을 공유 (보안 격리 낮음)       | 완전한 OS 격리 제공               |
| 성능               | 빠른 시작 시간과 낮은 오버헤드              | 높은 오버헤드와 느린 시작 시간    |
| 호환성             | 리눅스 커널 기반으로, 리눅스 이외의 OS에서는 느릴 수 있음 | 다양한 OS에서 안정적으로 동작      |

---

### 언제 Docker를 사용해야할까
- 일관된 개발 환경이 필요할 때
- 애플리케이션을 빠르게 배포하고 싶을 때
- MSA(Microservices Architecture)를 도입할 때
- CI/CD 파이프라인을 구축할 때
- 애플리케이션 격리가 필요할 때
- 쉽게 스케일링하고 싶을 때
- 쿠버네티스와 함께 사용할 때

---

## Docker Container
### 컨테이너 관련 팁
- 컨테이너 ID는 **처음 몇 자리**만 입력해도 식별 가능하다. (예: 3자리)
- **Host의 포트**는 한정적이지만, 컨테이너 내부의 포트는 격리되어 있어 서로 간섭하지 않는다.

---

### Docker Compose
- Docker 20.10부터는 **Compose**가 기본 설치되어 있다. 버전 확인은 항상 중요하다.
- **`depends_on`**: 특정 이미지가 먼저 실행되도록 설정할 수 있다.
- 같은 네트워크에 있는 컨테이너끼리는 **컨테이너 이름**으로 호출할 수 있다.

---

## 마치며
- 실행에 필요한 **도커 명령어**를 잊지 않도록 프로젝트의 README.md에 정리하는 습관을 들이자.
- 볼륨과 네트워크 설정은 배포 환경에 맞게 미리 정의해두는 것이 중요하다.
