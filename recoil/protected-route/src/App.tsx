import ProtectedRoute from "Routes/ProtectedRoute";
import Layout from "components/Layout";
import Home from "pages/Home";
import Login from "pages/Login";
import MyPage from "pages/MyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/mypage" element={<MyPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
