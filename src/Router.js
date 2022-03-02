import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import LoginHansol from "./pages/hansolJeong/Login/Login";
import MainHansol from "./pages/hansolJeong/Main/Main";

import LoginSeoungwoo from "./pages/seoungwooMa/Login/Login"
import MainSeoungwoo from "./pages/seoungwooMa/Main/Main";

import LoginBongjun from "./pages/bongjunSeong/Login/Login"
import MainBongjun from "./pages/bongjunSeong/Main/Main";

import LoginChaeryung from "./pages/chaeryungHan/Login/Login"
import MainChaeryung from "./pages/chaeryungHan/Main/Main";

import LoginSeulki from "./pages/seulkiKim/Login/Login"
import MainSeulki from "./pages/seulkiKim/Main/Main";

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
      <Route path="/login-hansol" element={<LoginHansol />} />
      <Route path="/main-hansol" element={<MainHansol />} />

      <Route path="/login-seoungwoo" element={<LoginSeoungwoo />} />
      <Route path="/main-seoungwoo" element={<MainSeoungwoo />} />
      
      <Route path="/login-bongjun" element={<LoginBongjun />} />
      <Route path="/main-bongjun" element={<MainBongjun />} />
      
      <Route path="/login-chaeryung" element={<LoginChaeryung />} />
      <Route path="/main-chaeryung" element={<MainChaeryung />} />
      
      <Route path="/login-seulki" element={<LoginSeulki />} />
      <Route path="/main-seulki" element={<MainSeulki />} />


       
      </Routes>
      
    </BrowserRouter>
  );
}

export default Router;