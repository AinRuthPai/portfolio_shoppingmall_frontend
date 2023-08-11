## React.JS, React-Redux를 이용하여 신발 쇼핑몰 만들기

<br />

<center>

![main](/src/img/shoeshop1.png)

<div>
<img src="https://img.shields.io/badge/React-v18.2.0-61DAFB??style=flat-square&logo=React&logoColor=white" alt="react badge" />
<img src="https://img.shields.io/badge/TypeScript-4.9.4-764ABC??style=flat-square&logo=TypeScript&logoColor=white" alt="typescript badge" />
<img src="https://img.shields.io/badge/StyledComponents-5.3.5-DB7093??style=flat-square&logo=styled-components&logoColor=white" alt="styled-components badge" />
 </div>
 <div>
<img src="https://img.shields.io/badge/Redux-4.2.0-764ABC??style=flat-square&logo=Redux&logoColor=white" alt="redux badge" />
<img src="https://img.shields.io/badge/SweetAlert2-11.6.15-DB7093??style=flat-square&logo=sweetalert2&logoColor=white" alt="sweetalert2 badge" />
<img src="https://img.shields.io/badge/ReactRouterDom-6.4.5-61DAFB??style=flat-square&logo=react-router-dom&logoColor=white" alt="react-router-dom badge" />
</div>

</center>

<br />

### 📌 배포 링크

- [Link](https://ainruthpai.github.io/shoeshop)

<br />

---

### 📌 화면

<br />

![main](/src/img/shoeshop1.png)

- 상품 6개가 랜덤으로 표시되는 메인 페이지입니다.

<br />

---

<br />

![main](/src/img/shoeshop2.png)

- 전체 상품이 표시되는 페이지입니다.

<br />

---

<br />

![main](/src/img/shoeshop3.png)

- 상품 추가, 삭제, 수정, 최종 금액이 표시되는 장바구니입니다.

<br />

---

<br />

![main](/src/img/shoeshop4.png)

- 로그인 페이지입니다.

<br />

---

<br />

### 📌 규칙

<br />

#### 1) 코드 순서

- import package
- import components / element
- import redux / api
- const dispatch = useDispatch();
- const [state, useState] = useState();
- const result = useSelector(state ⇒ state.reducer.action)
- useEffect
- return ()
- styled-component

<br />

#### 2) CSS(styled-components) 순서

- position
- display
- width/height
- margin/padding
- color 관련
- text 관련
- tranform, transition, animation
- 기타

<br />

#### 3) commit rules

- add : asset, dependency 추가 하는 경우 (이미지 파일)
- feat : 새로운 기능 추가, view 포함
- edit : 코드를 수정한 경우 (fix가 아님)
- fix : 버그 수정
- docs : 문서 수정 (readme)
- style : css style code 수정
- refactor : 코드 리팩토링
- chore : 빌드 업무 수정, 패키지 매니저 수정

<br />
