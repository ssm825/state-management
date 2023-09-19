# 🔐 [Recoil] Protected Route
- Recoil로 Protected Route 구현하기
- [유튜브-잡캐헨리](https://youtu.be/5rG48pDcTLQ?si=XcfCqTHk9z9pbZmG)

![recoil_protected_route](https://github.com/ssm825/readmetest/assets/105163878/e6fc097b-37d9-423f-a377-dc210418b7a5)

<br/>

## 실행 방법
```bash
$ git clone https://github.com/ssm825/state-management.git
$ cd recoil/protected-route
$ npm install
$ npm start
```
  
<br/>

## 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactRouter&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledComponents&logoColor=white">


<br/>

## 회원 전용 페이지 구현
- 인증이나 적절한 권한이 없는 사용자로부터 민감한 정보 또는 기능을 보호하기 위해, 특정 경로에 접근을 방지하는 기능
### 요구 사항
```ts
페이지 : 메인 / 로그인 / 마이페이지
1. ID와 Password를 입력받아 로그인
2. 사용자가 아닌 경우 마이페이지 접근 시, Login 페이지로 이동
3. 이미 로그인한 유저는 Login 페이지 접근 시, 메인 페이지로 이동

```
#### 로그인 구현
- `TokenAtom`에 {accessToken: '토큰^0^'}을 저장하고 `isLoginSelector`로 로그인 유/무를 판단한다.
```ts
export const TokenAtom = atom({
  key: "TokenAtom",
  default: undefined,
});

export const isLoginSelector = selector({
  key: "isLoginSelector",
  get: ({ get }) => !!get(TokenAtom),
});
```
#### protected-route
- 로그인 유/무를 판단하여 중첩 라우팅으로 프로텍티드 라우팅을 해준다.
```ts
// Routes/ProtectedRoute.tsx
const ProtectedRoute = () => {
  const isLogin = useRecoilValue(isLoginSelector);
  return isLogin ? <Outlet /> : <Navigate to={"/login"} />;
};
```
```ts
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          // 사용자 전용
          <Route element={<ProtectedRoute />}>
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
```
- 로그인을 하지 않은 사용자가 마이 페이지를 클릭했을 때 로그인 페이지로 넘어간다.
- 이때, **로그인하지 않은 상태로 '뒤로 가기'를 클릭**하면 마이 페이지로 넘어가고 또다시 로그인 페이지로 이동하게 되어 로그인 페이지에 갇히게 된다.
- 이를 해결하기 위해 `history stack`을 쌓지 않고 이동할 수 있도록 `replace` 옵션을 추가해 주어야 한다.
- 또한, 사용자가 직전에 있던 페이지로 이동할 수 있도록 Navigate `state에 경로를 저장`하여 로그인 완료 시, 저장된 경로로 이동하게 한다.
```ts
// Recoil selector를 통해 로그인 상태 확인
const isLogin = useRecoilValue(isLoginSelector);
// 현재 위치 정보 가져오기
const currentLocation = useLocation();

// 만약 로그인 상태라면 Outlet 컴포넌트(즉, 자식 라우트)을 그대로 보여주고,
// 아니라면 "/login" 경로로 리다이렉트하며, 이동 전의 위치 정보를 state에 저장
return isLogin 
? ( <Outlet /> ) 
: ( <Navigate to={"/login"} replace state={{ redirectedFrom: currentLocation }} /> );
```
```ts
// pages/Login.tsx
const from = location?.state?.redirectedFrom?.pathname || "/";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  axios.post("/user/login", { id: id, pw: password }).then((res) => {
    setAccessToken(res.data.accessToken);
    navigate(from);
  });
};
```
  
<br/>


## 프로젝트 구조
```
📦src
 ┣ 📂components
 ┃ ┗ 📂Layout
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂mocks
 ┃ ┣ 📜browser.ts
 ┃ ┗ 📜handlers.ts
 ┣ 📂pages
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜Login.tsx
 ┃ ┗ 📜MyPage.tsx
 ┣ 📂Recoil
 ┃ ┗ 📜TokenAtom.ts
 ┣ 📂Routes
 ┃ ┗ 📜ProtectedRoute.tsx
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.tsx
```
<br/>
