import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/Layout/DefaultLayout";
import Nav from "./components/Nav/Nav";
import Cart from "./pages/Cart";
import Main from "./pages/Main";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
