---
# 페이지 셋팅
layout: project
title: Darling
parent: 프로젝트 회고록
grand_parent: Essay
nav_order: 1
nav_exclude: true
toc: true

summary: # 프로젝트 개요
  service: # 서비스 정보 @name: 이름 @subject: 주제
    name: Darling
    subject: 커플 다이어리 앱
  platform: # 서비스 플랫폼 @environment: 지원환경 @demo: 데모 url @github: 깃헙 url, @value: default -> n
    environment: iOS 앱
    demo: https://apps.apple.com/om/app/%EB%8B%AC%EB%A7%81/id1583530907
    github: n
  period: # 개발 기간 @date: 범위 @day: 기간
    date: 21.07.02. ~ 21.09.17.
    day: 3달
  people: # 개발 인원 @number: 인원 수 @script: 비고
    number: 3명
    script: PM
intro:
  tech_stack: # 기술 스택 key(index):value(script)
    language: Swift, SwiftUI, Java
    server: Tomcat
    framework: Spring Boot
    api_and_library: Social Login(Kakao · Google · Apple), Firebase FCM Notification, Apple In-App Purchase API, Alamofire, SwiftyJSON, AlertToast, SDWebImageSwiftUI, JPA, QueryDsl, Lombok, okhttp3, Jasypt
    database: MySql
    ide: Xcode, IntelliJ
  role:
    1:
      script: 서비스 기획, 업무 분담 및 일정 조율
      contribution: 100
    2:
      script: 기능 정의, ERD 등 개발 문서 작성
      contribution: 70
    3:
      script: 도메인 설계, API 서버 기능 구현(회원, 프로젝트, 팀원, 메시지)
      contribution: 100
  thumbnail: 2021-darling-thumb01.png, 2021-darling-thumb02.png
---


## 기획
### 커플 서비스의 경험
**장소기반 다이어리**

2017년 'Loviary'라는 커플이 장소를 기반해 다이어리를 간단하게 적을 수 있는 서비스를 php기반 CMS로 제작했었던 적이 있었다.

<img class="cdn-img" id="2021-darling-image01.png"/>

장소별 한마디, 오늘의 한줄평, 기분을 담고있는 다이어리를 작성해서 사귀고 난 후 몇 일의 데이트인지, 몇 번째 데이트인지 안내하고 장소별로 검색을 하는 기능과 다가오는 기념일들의 디데이를 제공했다. 오늘의 한줄평을 누가 썼는지, 둘 다 썼는지도 직관적으로 확인이 가능했다. 테스터들의 반응이 괜찮았었던 서비스였다.

---

**커플 쿠폰**

올해 초에 필요에 의해서 커플 쿠폰 서비스 '알로하 쿠폰'을 출시했다. 이 서비스에 디데이와 위시 리스트, 그리고 'Loviary'의 장소기반 한줄 다이어리를 하나의 서비스에서 사용할 수 있으면 좋겠다고 생각이 들어다. 그래서 바로 팀을 꾸렸고 한창 JPA를 사용하는 API 서버 개발에 흥미가 넘치고 있었기에 서버를 맡고 싶었지만, iOS 앱 제작 경험이 있는 사람이 없는 관계로 내가 맡게 되었다. 추가로 Android를 맡으며 서버를 멘토링해줄 팀원, 서버 개발 경험이 부족한 팀원과 함께 총 3명이서 프로젝트 시작하게 되었다.

---

### 커플 서비스의 총 집합
**하나의 커플 서비스**

일단 기획적인 부분은 기존의 서비스들을 일체화 시키는 것이기 때문에 서비스의 흐름과 기능들의 디테일만 신경쓰면 됐다. 모바일 앱으로 제작이 될 예정이기 때문에 홈화면은 대시보드 역할의 뷰, 나머지 주제들은 각각의 뷰로 하단탭을 구성하기로 했다. 하지만 프로젝트 진행 중에 알림 내역까지 하단바에 추가하게 되었는데, 주제별 뷰가 너무 많다고 판단하여 하나의 하단탭이지만 상단탭을 추가로 구성하였다.

<img class="cdn-img" id="2021-darling-image02.png"/>

---

## UI/UX
**메인화면**

각자의 프로필 사진, 한마디와 함께 찍은 사진 콕 찌르기와 같은 기능이 포함되어 있어야 했는데 오브젝트 배치에 대한 고민을 하다가 iOS의 홈화면을 참고하기로 했다. 정보들과 사진의 위젯이 있어도 친숙하고 못 나지 않은 디자인이 가능했다. 설정에 메뉴로 존재하지만 각각의 위젯들을 터치하면 수정할 수 있는 페이지로 바로 연결되도록 viewflag로 컨트롤 했다.

<img class="cdn-img" id="2021-darling-image03.png"/>

---

**서비스 뷰**

따로 하단바에 서비스들을 묶어놓은 탭을 만든것 까지는 좋았지만 테스터들의 불편사항이 있었다. 터치가 늘어났는데 손가락 동선이 최하단에서 최상단까지 가야하는 번거로움이 있었기 때문인데, 이 부분은 서비스 뷰의 하단탭 아이콘이 활성화된 상태에서 중복으로 터치하게 되면 상단바 탭이 현재의 오른쪽 탭으로 전환되는 기능을 추가해 해소시켜주었다. 그래서 하단에만 손가락이 위치하더라도 모든 서비스를 접근할 수 있게 되었다.

<img class="cdn-img" id="2021-darling-image04.png"/>

---

## 개발

### 라이브러리
**콕 찌르기, AlertToast**

콕찌르기 기능은 페이스북에 먼저 있던 기능인데 커플끼리도 사용하기 좋을 것 같아 추가됐다. 기능은 아주 단순하다. 내가 콕 찌르기를 누르면 상대에게 상대가 콕 찔렀다고 알림이 전송된다. 다양한 상황에서 쓸 수 있었던 것 같다. 그리고 테스터들에게도 가장 좋은 평을 받은 기능이 의외로 이 기능이었다. 그래서 인터렉션까지는 아니더라도 애니메이션 효과를 추가해주고 싶었다. 그래서 찾은 라이브러리가 [AlertToast](https://github.com/elai950/AlertToast)이다. 디자인을 바꿔 적용하여 상대에게 콕 찔렀다는 경험을 높일 수 있었다.

<img class="cdn-img" id="2021-darling-image05.png"/>

---

**이미지, SDWebImage**

이전 iOS 앱을 개발할때는 단순히 앱에 이미지를 포함하고 불러오는 형식만 사용했었다. 이번에는 [SDWebImageSwiftUI](https://github.com/SDWebImage/SDWebImageSwiftUI)를 사용하게 되었는데 장점이 아주 많다. 캐시 처리가 되지 않고 매번 새로 불러오는 과정을 겪는게 골치 덩어리였는데 해결이 되었고, 외부 경로(URL)로 가져오는 이미지를 간편하게 사용할 수 있다. gif같은 애니메이션을 지원하는 이미지도 사용할 수 있다.

---

### 스위프트 UI
**하단바**

```swift
// TabView 예시
 @State var viewFlag = 0

 TabView(selection:viewFlag) {
            FirstView(viewFlag:$viewFlag)
                .tabItem({
                    Image(systemName: "arrow.left")
                    Text("First")
                }).tag(0)
            SecondView(viewFlag:$viewFlag)
                .tabItem {
                    Image(systemName: "arrow.right")
                    Text("Second")
                }.tag(1)
}
```

```swift
// View Struct 예시
struct FirstView: View {
    @Binding var viewFlag:Int
    var body: some View {
        Button("Second View") {
            self.viewFlag = 1
        }
    }
}

struct SecondView: View {
    @Binding var viewFlag:Int
    var body: some View {
        Button("First View") {
            self.viewFlag = 0
        }
    }
}

```

TabView()를 이용헤서 하단바를 구성했다. tabItem의 tag로 View마다 index를 지정해주고, State 변수로 제어하며 struct 내부에 State 변수를 Binding함으로서 내부에서도 버튼을 이용한 화면 흐름을 관리할 수 있게 했다.

---

**상단바**

```swift
@State var tabFlag: String = "위시리스트"
let filterOption: [String] = [
	"디데이", "한줄일기", "쿠폰", "위시리스트"
]
```

```swift
Picker(
	selection: $tabFlag,
	content:{
    	ForEach(filterOptions.indices) { index in
        	Text(filterOptions[index])
            .tag(filterOptions[index])
    	}
	})
.pickerStyle(SegmentedPickerStyle())

```
개인적으로 상단바에 화면 정보를 표시하는 것 이외의 용도로 사용하는 것을 사용자 경험적인 측면에서 선호하지 않아 간단하게 Navigation Bar로 처리하고, 개별 View 안에서 상단 탭에서 목적에 맞는 탭을 제공하게 했다. 상단 탭은 Picker의 style 중 SegmentedPickerStyle()을 사용했다. 모든 탭의 작성하는 화면은 UISheetPresentationController를 사용해 Modal의 형태로 제공했다.

<img class="cdn-img" id="2021-darling-image06.png"/>

---

### iOS 위젯
**WidgetKit**

iOS의 위젯을 제작해보는 것은 처음이었다. iOS 14부터 홈 화면에 추가 할 수 있는 앱 위젯이 새로 생겼는데 마침 안 그래도 Swift 최신 버전의 레퍼런스도 많이 없는데 WidgetKit에 대한 레퍼런스를 찾기가 어려웠다. 그래서 하는 수 없이 몇 없는 자료들로 하나하나 테스트해보며 학습하면서 적용해나갔다. 화면을 구성하는 방식은 앱과 유사했지만 동작 방식은 완전히 달랐다.

---

**타임라인 동기화**

타임라인을 관리하는 것이 유난히 어려웠다. 서버에서 데이터를 받아와 반영해야하기 때문인 것으로 추측되는데, TimelineReloadPolicy(새로운 타임라인 요청 시기)가 설정 값대로 반영되지 않아 골머리를 썩혔다. 그래서 어쩔 수 없이 가능핱 즉시 타임라인을 요청하는 never 옵션으로 설정했다.

---

**위젯 갤러리**

<img class="cdn-img" id="2021-darling-image07.png"/>

위젯을 테스트를 해보는데 텍스트로만 구성했던 테스트 위젯도 사라지고 새로 짜여진 위젯이 위젯 갤러리에 반영이 되야 했지만 앱에 대한 위젯 정보가 사라지고 당최 추가되지 않았다. 그래서 앱을 삭제하고 다시 설치해보았고 테스트 기기를 재부팅해보았지만 그래도 아무 소용이 없었다. 머리를 환기시키고 돌아왔더니 아무 것도 건드리지 않았는데 추가가 되어있었다. 반영이 즉각적으로 되지 않고 간헐적으로 아주 오래 걸릴때도 있다는 것을 알게 되었다. 이후 테스트에서는 잘 반영이 되었는데, TestFlight로 QA를 할때 또 추가되지 않았고 코드를 다시 검토해보았는데 문제가 없어 재부팅을 권하고 해결이 되어 마무리가 되었다.


---

### Git
**AWS Access Key**

<img class="cdn-img" id="2021-darling-image08.png"/>

포트폴리오 목적으로 Github의 레포지토리를 공개 옵션으로 설정해두었었다. 그런데 몇일간 긴급 메일이 나에게 왔었고 이유는 AWS의 Access Key를 암호화해두지 않아서 노출되었고 승인되지 않고 비정상적인 패턴이 감지되어 바로 절차를 따르라는 안내였다. 깜짝 놀라서 바로 대응을 했고 운이 좋게도 큰 문제는 없었지만, 하마터면 해커들에게 악용당해 엄청난 비용이 청구될수도 있었다. 값진 경험을 했다.

---

**Xcode와 Swift**

새로운 플랫폼, 언어, 툴로 하다보니 당연했던 Git으로 버전관리를 하는 것을 너무나 자연스럽게 잊고 있었다. 이전의 aloha coupon 프로젝트 때도 그랬고 이번 프로젝트에서도 그랬다. 전에는 별일이 없었는데 이번에는 프로젝트를 날려버리는 사건이 있었다. 프로젝트 옵션에 대한 부분을 커스텀하다가 프로젝트 셋팅에 관련된 매핑 정보를 건드린 것 같은데 프로젝트를 전체를 인식할수가 없었다. 코드는 분명 살아있었는데 여러 시도를 해보아도 돌릴 수 가 없었다. 멘탈이 완전히 나가버렸지만 결국에 밤을 세워서 복구를 했다. 새로운 프로젝트를 만들어 경로를 잡아주고 텍스트 에디터로 코드를 일일이 확인해서 복사한 후 이미지와 자료 그리고 다른 라이브러리들도 추가 해주는 ~~노가다~~작업을 했다.

그럼에도 불구하고 왜 그때서라도 버전 관리를 생각하지 않았는가. 너무 바보같다. 데드라인에 너무 촉박하게 진행이 됐거나, 개발이 진행되는 기능들의 순서가 너무 불규칙해서라는 이유였던 것 같은데 그 이유이였다면 브랜치를 활용하는 방법을 잘 몰랐음을 깨닫는다.

이유를 불문하고 버전관리는 필수이니 명심해야겠다.

---

## 마치며
**WEB과 APP**

이번이 Swift는 프로젝트로는 두번째긴 하지만 여전히 느끼는 것은 첫 인상처럼 완전히 다르지 않다는 것이다. 많은 언어들이 객체지향 프로그래밍을 향해 가고 있기 때문에 그렇게 느낀 것 같다. "코어 언어 하나를 제대로 이해한다면, 다른 언어를 배우는 것은 쉬운 일이 될 것이다."라고 말씀을 들은 기억이 떠오른다. 그리고 추가로 언어마다 특색 및 장단점, 프레임워크를 배우는 것은 중요하다는 것을 새삼 느끼게 된다. 새로운 타지로 여행을 다녀오면서 접하는 문화와 만나는 사람들을 통해 얻는 인사이트와 같이 개발도 다르지 않다고 생각한다.

---

**협업**
API 서버만 다룰때는 고려하지 못한 것들이 프론트 웹이나 앱을 개발하는 포지션을 맡으면서 데이터 구조를 어떻게 전달하면 좋을지 알게되는 것 같다. 그리고 전체적인 포지션에 대한 경험이 늘수록 반대 상황일때도 소통이 수월하다는 것도 느꼈다.