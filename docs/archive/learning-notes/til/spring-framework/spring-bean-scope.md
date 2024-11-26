---
layout: note_shorts
parent: Learning Notes
category: Spring Framework
title: Spring Bean Scope
toc: true
---

## Spring Bean Scope란?
스프링 컨테이너가 관리하는 Bean의 생명주기와 생성 범위를 결정하는 개념이다.
요구사항에 따라 방식을 잘 설정하면 성능과 유지보수가 크게 개선된다.

---

Spring에서 Bean Scope는 두 가지를 결정한다.
1. 언제(시점) Bean이 생성되는가?
2. 누가(범위) Bean을 공유할 수 있는가?

---

## Spring Bean Scope의 종류
### Singleton(기본값)
애플리케이션 전체에서 단 하나의 Bean 인스턴스만 생성한다.

- 스프링 컨테이너가 초기화 될때 한번 생성한다.
- 모든 요청, 쓰레드에서 동일한 Bean을 사용한다.
- 메모리 효율적이다.
- 공통 로직을 처리하는 Service, Repository 클래스가 포함된다.

---

### Prototype
Bean이 요청될 때마다 새로운 인스턴스로 생성한다.

- 스프링 컨테이너가 요청을 받으면 새로 생성한다.
- 주로 상태를 가지는 객체에 사용된다.
- 메모리 사용량이 증가될 가능성이 있다.
- 사용자마다 다른 설정이 필요한 Bean이나, 독립적인 작업을 하는 Bean이 해당된다.

---

### Request(Web)
HTTP 요청당 하나의 Bean 인스턴스가 생성된다.

- 요청이 끝나면 Bean이 소멸한다.
- Thread-Safe하다.
- 웹 요청의 데이터 저장이나 처리 로직이 해당된다.

---

### Session(Web)
HTTP 세션마다 하나의 Bean 인스턴스를 생성한다.

- 동일한 사용자 세션에서는 같은 Bean을 사용한다.
- 세션이 종료되면 Bean이 소멸한다.
- 사용자 세션 데이터를 저장하는데 사용된다.


---

### Application
Application Context에서 하나의 Bean을 생성한다.

- 모든 요청과 모든 사용자에게 공유된다.
- 애플리케이션이 종료될 때까지 유지된다.
- 전역적인 설정 정보나 공용 데이터가 해당된다.

---

## 정리
1. Singleton이 기본값으로 설정되어있고 대부분의 서비스 클래스나 공통 로직에서는 충분하다.
2. Prototype은 직접 관리하거나 요청 범위가 명확하지 않으면 메모리 낭비로 이어질 수 있다.
3. Request/Session은 웹 애플리케이션에서만 사용한다. RESTful API 설계에서는 Stateless를 위해 Session사용을 최소화해야한다.
4. Application Scope는 자주 변경되지 않는 설정이나 전역 데이터 관리용으로 적합하다.
