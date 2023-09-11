---
# 페이지 셋팅
layout: project_review
title: 알로하 쿠폰
parent: 프로젝트 회고록
grand_parent: Essay
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
  service: # 서비스 정보 @name: 이름 @subject: 주제
    name: 알로하 쿠폰
    subject: 커플 쿠폰 앱
  platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
    environment: iOS 앱
    demo: https://apps.apple.com/us/app/%EC%95%8C%EB%A1%9C%ED%95%98-%EC%BF%A0%ED%8F%B0/id1548121101
    github: n
  period: # 개발 기간 @date: 범위 @day: 기간
    date: 20.12.28. ~ 21.03.18.
    day: 3달
  people: # 개발 인원 @number: 인원 수 @script: 비고
    number: 3명
    script: PM
intro:
  tech_stack: # 기술 스택 key(index):value(script)
    language: Swift/SwiftUI, Java
    server: Tomcat
    framework: Spring Boot
    api_and_library: Social Login(Kakao · Google · Apple), Firebase FCM Notification, Apple In-App Purchase API, Alamofire, SwiftyJSON, JPA, QueryDsl, Lombok, okhttp3, Jasypt
    database: MySql
    ide: Xcode, IntelliJ
  role:
    1:
      script: 서비스 기획 및 개발 문서 작성, 업무 분담 및 일정 조율
      contribution: 80
    2:
      script: 도메인 및 API 서버 구현
      contribution: 10
    3:
      script: Native iOS 앱 환경에서 데이터 관리, 비동기 통신, API 적용 등 기능 구현
      contribution: 100
    4:
      script: SwiftUI 언어로 화면 구성 및 흐름 제어
      contribution: 100
    5:
      script: 애플 개발자 프로그램 및 앱스토어 심사
      contribution: 100
    6:
      script: 서비스 브랜딩 및 마케팅
      contribution: 20
  thumbnail: 2021-alohacoupon-thumb01.png, 2021-alohacoupon-thumb02.png, 2021-alohacoupon-thumb03.png
---

## 어려움과 극복
### Swift와 SwiftUI

서비스의 핵심 기능인 쿠폰 사용 시 푸시 알림을 전송하는 것은 모바일 웹에서는 구현이 어렵다. 
따라서 앱 개발이 필요했는데, 팀원 모두 앱 개발 경험이 없었다. 그래서 Swift에 관심 있던 내가 맡았다.
인프런에서 JSON 통신과 다양한 예제들이 커리큘럼에 포함된 
[SwiftUI - iOS14 퍼펙트 가이드](https://www.inflearn.com/course/swift-ui-ios14/dashboard) 강의를 찾을 수 있었다.
전부 수강하고 나서야 SwiftUI는와 Swift는 완전히 다른 언어라는 것을 알게 되었다.
SwiftUI는 UI 구현에, Swift는 데이터 모델을 다루는데 특화되어 있었다.
이를 보완하기 위해 [iOS 개발을 위한 swift5 완벽 가이드](https://www.inflearn.com/course/Swift-KXcoding/dashboard) 강의도 함께 공부했다.
앱을 완성하는 과정에서 최신 버전 때문에 참조 자료가 부족한 점이 어려웠지만, 
구글링과 수많은 고민을 통해 문제를 해결해나갔다. 
두 언어가 모두 객체지향적이라는 특성이 흥미로웠고, 
이 경험을 통해 더 깊이 배우고 싶다는 생각이 들었다.

---


## 배운 점
### API
**API 서버와 통신**

[Postman](https://www.postman.com/)을 이용하여 API를 테스트하고 응답결과를 확인하며 앱과 연결해나갔다. 
처음에는 Swift의 내장된 기능을 사용한 방법으로 앱에서 서버로 요청을 보냈다.

<details class="my-5">
<summary class="pb-5 text-purple-000 fw-500">코드 보기</summary>
<div markdown="1">

```swift
class WebService{
	func getCoupon(completion: @escaping ([CouponVO]) -> Void) {
    	guard let url = URL(string: "") else {
        	return
        }
    
    	URLSession.shared.dataTask(with: url) { (data, response, err) in
 	 	  	guard let hasData = data else {
       		 	return
     	  	 }
             
             let coupons = try! JSONDecoder().decode([CouponVO].self, from: hasData)
             completion(coupons)
    	}
    }.resume()
    
}
```

</div>
</details>


그러다 직관성을 높일겸 편하게 HTTP 메소드를 사용하기 위해 라이브러리로 대체했다.
Cocoapods을 통해서 라이브러리들을 install 하여, 
Alamofire를 사용한 코드로 대체하여 통신하고 받아온 JSON은 SwiftyJSON으로 파싱하여 사용했다.


<details class="my-5">
<summary class="pb-5 text-purple-000 fw-500">코드 보기</summary>
<div markdown="1">

```swift
class WebService{
	func getCoupon(){
    	let url = ""
        AF.request(
        	url,
        	method: .get,
            parameters: nil,
            encoding: URLencoding.default,
            header: ["Content-Type":"application/json", "Accept":"application/json"]
            )
        .validate(statusCode: 200..<300)
        .responseJSON{ (json) in
        	print(json)
        }
    }
}
```

</div>
</details>

---

**소셜 로그인 API**

API 문서에 설명된 환경과 달라 한참을 해매다가 결국에 Main Struct에 Adaptor을 이용해 AppDelegate를 연결해주어 해결했다.
테스트에 성공을 하고 SocialSession 객체를 만들어 카카오, 구글, 애플 로그인을 한번에 컨트롤 할 수 있도록 했다.

<details class="my-5">
<summary class="pb-5 text-purple-000 fw-500">코드 보기</summary>
<div markdown="1">

```swift
import SwiftUI
import KakaoSDKCommon
import KakaoSDKAuth
import Firebase
import GoogleSignIn


class AppDelegate: NSObject, UIApplicationDelegate, GIDSignInDelegate {
	// 카카오 로그인
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        print("didFinishLaunchingWithOptions called!")
        
        KakaoSDKCommon.initSDK(appKey: "", loggingEnable:true)
        
        return true
    }
    
    // 구글 로그인
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        print("didFinishLaunchingWithOptions called!")
                
        FirebaseApp.configure()
        
        GIDSignIn.sharedInstance().clientID = FirebaseApp.app()?.options.clientID
        GIDSignIn.sharedInstance().delegate = self
        
        return true
    }
    
    
    func sign(_ signIn: GIDSignIn!, didSignInFor user: GIDGoogleUser!, withError error: Error!) {
        guard let user = user else{
            print(error.localizedDescription)
            return}
        
        let credential =
            GoogleAuthProvider.credential(withIDToken: user.authentication.idToken, accessToken: user.authentication.accessToken)
        
        Auth.auth().signIn(with: credential){ (result, err) in
            if err != nil{
                print((err?.localizedDescription)!)
                return
            }
            // SocialSession
            signTemp.set(platform:"google",id:(result?.user.email)!)
            print((result?.user.email)!)
        }
    }
}
```



애플 로그인은 화면에서 구현을 하게끔 되어있었다.

```swift
 SignInWithAppleButton(.signIn,
 	onRequest:{ (request) in
    	request.requestedScopes = [.fullName, .email]
    }, onCompletion:{ (result) in
    	switch result{
        	case .success(let authorization) :
            	if let appleIDCredential = authorization.credential as? ASAuthorizationAppleIDCredential {
                	let userId = appleIDCredential.user
                    let identityToken = appleIDCredential.identityToken
                    let authCode = appleIDCredential.authorizationCode
                    let email = appleIDCredential.email
                    let givenName = appleIDCredential.fullName?.givenName
                    let familyName = appleIDCredential.fullName?.familyName
                    let state = appleIDCredential.state
                    socialSession.set(state: true, id: userId)
                    isLogin.toggle()
				}
        	break
        case .failure(let error) :
             break
        }
	}
)
```


</div>
</details>

---

**푸시 API**

FCM API를 이용해 푸시 알림 기능을 개발하는데 앱 내의 라이브러리만을 사용한 로컬 푸시로 요청과 응답을 처리하려고 했는데 도무지 해결되지 않았다.
그래서 원격으로 서버를 한번 거쳐 앱 -> 서버 -> FCM -> 앱으로 푸시 알림을 보내는 방식으로 구현을 마쳤다.

<img class="cdn-img" id="2021-alohacoupon-image01.png"/>

---

### App Store Connect
**개발자 등록**

처음으로 해야할 것은 애플 개발자 등록이였다. 애플 개발자 프로그램의 회비는 무려 연 99달러로 한화 129,000원인 셈이라 작은 금액은 아니였지만 꼭 해야하는 절차였다. 개인의 경우 크게 어려움 없이 신청하고 몇 일이 지난 뒤 승인받을 수 있었다.

---

**App Upload**

예전에는 더 복잡했었다고 하는데 간단해졌다. Xcode에서 Archive해둔 App을 App Store Connect로 바로 Upload 할 수 있었다. 버전 업데이트할때마다 과정을 반복했다. 
처음에 애플 개발자 사이트에서 Certificates, Identifiers & Profiles, Provisioning 들을 등록해야하는데 사이트가 리뉴얼이 되면서 카테고리 분류도 달라져있어서 잘 찾아서 해야했다.

---

**TestFlight**

나는 바로 테스트 해볼 수 있었지만 팀원들의 경우 App을 테스트하려면 이메일 인증을 거쳐 사용자를 등록한다음 
TestFlight 앱을 앱스토어에서 다운 받으면 앱 내 리스트에서 베타 버전의 App을 설치하는 절차가 필요했다. 
개발자 팀원들은 어려움이 없었지만 일반 팀원들은 많이 복잡하게 느꼈다고 한다.

<img class="cdn-img" id="2021-alohacoupon-image02.jpeg"/>

---

## 결과 및 성과
### Appstore 심사
애플 앱스토어 심사가 깐깐하기로 유명했기에 리젝 사례들을 찾아 미리 검토를 열심히 했다. 최근 몇년사이 기간도 짧아지고 개선됐다고 한다.

<details class="highlight p-5" >

<summary class="text-purple-000">핵심 사항 요약</summary>

<div markdown="1">


---


**TIP**


-   애플 심사원은 한글을 읽을 수 있다.

-   코드를 뜯어보지 않고 표면적인 기능을 심사한다.

-   앱이 복잡하면 심사에 걸리는 시간이 길어진다.

-   보통 2일 내에 승인, 리젝이 나는 경우가 많다.

-   미국 휴일을 포함하는 경우 심사 기간이 매우 길어진다.


---


**REJECT CASE**


-   로고, 저작권 도용

    샘플 데이터, 아이콘, 스크린샷에 주의한다.


-   앱 빌더 사용

    다른 사업체의 앱을 하나의 계정으로 관리하는 것은 불가능하다.


-   테스트용 아이디

    애플 심사 직원은 회원가입을 하지 않는다.


-   회원가입 필수 필드

    GDPR(개인정보보호법)에 따라 표면적으로 연관성이 없다면 설득해야하고 보통 리젝된다.


-   ip 노출

    앱을 사용하는 도중 어떤 이유로든 ip가 노출되어선 안되고 반드시 도메인이 연결되어 있어야한다.


-   테스트 콘텐츠 노출

    차라리 아무 컨텐츠가 없는건 괜찮지만 test와 같은 개발을 위한 단어가 들어있으면 리젝 사유이다.



---


**ATTENTION**


-   통신

    -   HTTPS 프로토콜을 준수한다.

-   소셜 로그인

    -   일반 로그인 혹은 게스트 로그인이 필요하다.

    -   로그인 이외에 소셜 기능을 사용한다.

    -   애플 로그인은 필수로 탑재한다.

-   완성도

    -   오류가 발생하지 않는다.

    -   앱으로 만들지 않아도 될 정도의 단순한 기능 구성이 아니다.

    -   형편없는 서비스 디자인이 아니다.

-   결제

    -   인앱으로 구입해야하는 디지털 재화를 다른 방식(쿠폰과 같은)으로 제공하지 않는다.

    -   인앱으로 구입해야하는 디지털 재화를구입해서 상대방에게 선물하는 기능을 제공하지 않는다.

    -   초대, 리뷰에 대한 리워드를 주지 않는다.

-   스크린샷

    -   아이폰이 아닌 형태의 스마트폰이 그려져 있는 앱 스크린샷을 제출하지 않는다.


</div>

</details>

<img class="cdn-img" id="2021-alohacoupon-image03.png"/>

하지만 리젝을 피할 수 없었는데 양식에 어긋난 부분들을 조금씩 수정했다.
그리고 로그인을 하고 커플 연동을 해야 완전히 서비스를 이용해볼 수 있었기때문에
임시 커플 연동 코드를 기재해서 테스트 환경을 제공하고 나서 재심사에 통과했다.

---

### 알로하 쿠폰 플러스
<img class="cdn-img" id="2021-alohacoupon-image04.png"/>

<img class="cdn-img" id="2021-alohacoupon-image05.png"/>

구독방식 플러스 기능을 추가했으면 좋겠다고 팀의 의견이 모여서 인앱결제 기능을 개발하는데 정보를 얻기가 어려웠다.
지금 개발환경과 일치하지도 않아서 분석해서 여러 시도를 해보는데 애를 먹었다.
사업자와 통신판매업이 필요해 이것을 등록하는데는 보름정도 소요됐던 것 같다.
그런데 문제가 테스트 환경에서는 결제 기능이 잘 작동하지만 배포된 앱에서는 그렇지 않았다.
이게 앱에서 문제가 있는건지 Connect 설정에 문제가 있는건지 알 수 있는 단서가 없었다.
결국 해결하지 못 하고 프로젝트를 종료하게 되었고 아쉽게 생각한다.

---

## 마치며
JAVA 언어 기반의 웹 개발에 익숙해있던 나에게 새롭지만 막막한 모험이였던 프로젝트였다. 
끝까지 프로젝트를 진행할 수 있었던 것에 기쁘게 생각한다.
언어와 개발 및 테스트 환경에 배포까지 처음이라 많이 해매고 고민도 많이 했던 것 같은데 아주 특별한 경험으로 남을 것 같다.

<img class="cdn-img" id="2021-alohacoupon-image06.png"/>

