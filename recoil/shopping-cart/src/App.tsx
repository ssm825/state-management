import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/Layout/DefaultLayout";
import Nav from "./components/Nav/Nav";
import Cart from "./pages/Cart";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
