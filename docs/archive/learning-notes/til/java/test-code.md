---
layout: note_shorts
parent: Learning Notes
category: Java
title: Test Code
toc: true
---

## JUnit5
**3개의 주요 모듈**로 구성된다.
- **Jupiter**: `TestEngine`의 구현체로서, 작성한 테스트 코드를 **발견하고 실행**하는 역할을 한다.
- **Vintage**: `TestEngine`의 구현체로, **JUnit 3, 4를 지원**한다.
- **Platform**: `TestEngine` 인터페이스를 제공하며, **IDE 연동**을 보조하는 역할도 수행한다.

----

## JUnit5 LifeCycle Annotation

| Annotation    | Description                                       |
|---------------|---------------------------------------------------|
| `@Test`       | **테스트 메소드**를 나타낸다.                             |
| `@BeforeEach` | **각** 테스트 메소드 **시작 전에 실행**되어야 하는 메소드           |
| `@AfterEach`  | **각** 테스트 메소드 **종료 후 실행**되어야 하는 메소드            |
| `@BeforeAll`  | **모든 테스트 시작 전**에 한 번만 실행되는 메소드            |
| `@AfterAll`   | **모든 테스트 종료 후**에 한 번만 실행되는 메소드            |

---

## JUnit5 Main Annotation

### `@SpringBootTest`
통합 테스트용으로 사용한다. 
**SpringBootApplication**을 찾아 하위의 모든 Bean을 스캔하여 로드하며, 
이 후 테스트용 Application Context를 만들어 **MockBean**을 추가하고 교체한다.

---

### `@ExtendWith`
JUnit4의 `@RunWith`의 역할을 대신하는 어노테이션으로, **실행할 메인 클래스를 지정**할 수 있다. 
`@SpringBootTest`에 기본적으로 포함된다.

---

### `@WebMvcTest(Class.class)`
특정 **컨트롤러 클래스만 로드**하여 테스트한다. 지정하지 않으면 Controller와 관련된 모든 Bean이 로드된다. 
**컨트롤러만 테스트할 경우** `@SpringBootTest` 대신 사용한다.

---

### `@Autowired`
- **MockMvc** 객체를 주입받아 **Controller의 API를 테스트**하는 용도로 사용된다.
- `perform()` 메소드를 사용하여 컨트롤러의 동작을 확인하며, `andExpect()`, `andDo()`, `andReturn()` 등을 활용할 수 있다.

---

### `@MockBean`
- **실제 동작하지 않는 가짜 객체**를 생성한다.
- `given()` 메소드로 가짜 객체의 동작을 정의할 수 있으며, `verify()`로 메소드 실행 여부를 확인할 수 있다.

---

### `@AutoConfigureMockMvc`
`spring.test.mockmvc` 설정을 로드하여 **MockMvc의 의존성을 자동 주입**한다. 
MockMvc는 **Rest API 테스트**를 지원하는 클래스이다.

---

### `@Import` 
필요한 클래스를 **Configuration으로 등록**하여 사용할 수 있다.

---

## 테스트
### 통합 테스트 
애플리케이션의 **전체 비즈니스 로직이 올바르게 동작하는지 확인**한다.
대규모 프로젝트에서는 모든 Bean을 스캔하고 로드하는 작업이 반복되어 테스트 실행 시 무거운 작업이 될 수 있다.

---

### 단위 테스트
각 기능을 개별적으로 **독립적으로 테스트**한다.

---

### F.I.R.S.T 원칙
테스트 설계 시 고려할 5가지 원칙이다.

> - **Fast**: 테스트는 빠르게 진행되어야 한다.
> - **Independent**: 각 테스트는 독립적이어야 한다.
> - **Repeatable**: 같은 결과를 반복적으로 만들어야 한다.
> - **Self-Validating**: 테스트 자체로 결과를 확인할 수 있어야 한다.
> - **Timely**: 비즈니스 코드가 완성되기 전에 테스트가 준비되어야 한다.

