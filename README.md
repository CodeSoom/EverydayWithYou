# <img src="https://img-s3-bucket.s3.ap-northeast-2.amazonaws.com/icon/logo-265px.svg" width="30px" height="30px"> 매일 그대와 | Everyday With You
사랑하는 혹은 호감이 가고 알아가고 싶은 상대와 어디 갈지 고민되시나요? 🤔💭
<br />
더 이상 결정장애는 Naver! 소중한 그대와의 데이트코스를 추천받는 여정이 시작됩니다!
<br />

## 🔗 배포 링크 Hosting URL
 https://superduper-india.codesoom.com
<br />

## 📑 사용법 How to use
* 앱 시작화면에서 오늘이 어떤 날인지 선택해주세요. 소개팅이라구요? 👀(띠용) 거기에 적절한 가게로 향하는 여정이 시작됩니다.

* 혹시 오늘 드시고 싶으신 게 있나요? 그리고 어디로 가고 싶으신가요? 선택해주시면 음식점 리스트를 보여드려요!

* 궁금해진 음식점을 클릭하셨나요? 한눈에 상세정보와 지도상 위치를 확인해보세요! 다음 코스도 추천받을 수 있습니다. 4km(도보로 1시간 거리 이내)의 가게들뿐만 아니라, 여기 좋아요! 추천가게에서 사용자가 직접 2차로 갔던 장소도 볼 수 있어요. 😉

* 마음에 드는 코스 페이지를 발견하셨나요? 공유하기로 데이트 상대에게 공유해서 의견을 물어보세요!

* 마음에 드는 코스 페이지를 발견하지 못하셨나요? 상단에 검색바를 누르면 검색페이지로 이동해요! 여기서 직접 지역, 음식 또는 가게 이름을 검색해보세요.

* 로고나 홈을 누르시면 홈에서 한눈에 메뉴들을 살필 수 있어요! 랜덤추천 가게목록도 살펴봐 주세요.

## 💾 프로젝트 구조 Project Structure
```
📦 src
 ┣ 📂 components
 ┃ ┣ 📂 home
 ┃ ┣ 📂 kakao
 ┃ ┣ 📂 random
 ┃ ┣ 📂 restaurants
 ┃ ┣ 📂 search
 ┃ ┣ 📂 sidebar
 ┃ ┗ 📂 topbar
 ┣ 📂 containers
 ┃ ┣ 📂 custom
 ┃ ┣ 📂 home
 ┃ ┣ 📂 restaurants
 ┃ ┣ 📂 search
 ┃ ┣ 📂 sidebar
 ┃ ┗ 📂 situationSelect
 ┣ 📂 pages
 ┣ 📂 services
 ┃ ┣ 📂 __mocks__
 ┃ ┣ 📜 api.js
 ┃ ┣ 📜 storage.js
 ┃ ┗ 📜 storage.test.js
 ┣ 📜 App.jsx
 ┣ 📜 App.test.jsx
 ┣ 📜 index.jsx
 ┣ 📜 kakao.js
 ┣ 📜 reducer.js
 ┣ 📜 reducer.test.js
 ┣ 📜 slice.js
 ┣ 📜 store.js
 ┗ 📜 utils.js
```

## ✨ 개발기간
- 2022.01.24 ~ 2022.03.16 (약 2개월)

## 🗓 주차 별 계획 및 회고

|➡️ 주차|계획|회고|
|:---:|:---:|:---:|
|1주 차|[:link:](https://github.com/CodeSoom/EverydayWithYou/issues/1)|[:link:](https://velog.io/@sunyoung1542/%EC%BD%94%EB%93%9C%EC%88%A8-%EB%A6%AC%EC%95%A1%ED%8A%B8-6%EA%B8%B0-9%EC%A3%BC%EC%B0%A8-%EC%A3%BC%EA%B0%84%ED%9A%8C%EA%B3%A0)|
|2주 차|[:link:](https://github.com/CodeSoom/EverydayWithYou/issues/20)|[:link:](https://velog.io/@sunyoung1542/%EC%BD%94%EB%93%9C%EC%88%A8-%EB%A6%AC%EC%95%A1%ED%8A%B8-6%EA%B8%B0-10%EC%A3%BC%EC%B0%A8-%EC%A3%BC%EA%B0%84%ED%9A%8C%EA%B3%A0)|
|3주 차|[:link:](https://github.com/CodeSoom/EverydayWithYou/issues/29)|[:link:](https://velog.io/@sunyoung1542/%EC%BD%94%EB%93%9C%EC%88%A8-%EB%A6%AC%EC%95%A1%ED%8A%B8-6%EA%B8%B0-11%EC%A3%BC%EC%B0%A8-%EC%A3%BC%EA%B0%84%ED%9A%8C%EA%B3%A0)|
|~6주 차|[:link:](https://github.com/CodeSoom/EverydayWithYou/issues/29)|[:link:](https://velog.io/@sunyoung1542/%EC%BD%94%EB%93%9C%EC%88%A8-%EB%A6%AC%EC%95%A1%ED%8A%B8-6%EA%B8%B0-12%EC%A3%BC%EC%B0%A8-%EC%A3%BC%EA%B0%84%ED%9A%8C%EA%B3%A0)|

## ⚙️ 프로젝트 세팅 Project Settings
### 설치하기 Installing
```
npm install
```

### 실행하기 Running the server
```
npm start
```

### 린트 실행하기 Running the lint
```
npm run lint
```

### 테스트 실행하기 Running the tests
```
# 전체 테스트 실행하기
npm test

# 파일이 저장됐을 때 자동으로 테스트 실행하기
npm run test -- --watch-all
```

### 배포하기 Deployment
```
npm run deploy
```

## 🛠 기술 스택 Project Stack
- React
- Redux, Redux-Toolkit, Redux-Thunk
- React Router Dom
- Emotion, facepaint, react-responsive
- Jest, React Testing Library
- Webpack, Eslint, Babel,
- Lodash
- GitHub Actions, gh-pages

## 🎞 미리보기 Preview
### 🖥 DeskTop
![웹 움짤](https://user-images.githubusercontent.com/89244209/172533898-753f23ad-9c3a-4b5f-b668-3e5ed57d9644.gif)

### 📱 Mobile
![모바일 움짤](https://user-images.githubusercontent.com/89244209/172533912-29ca0ff8-351b-44ed-aec1-fe3c41342cae.gif)
