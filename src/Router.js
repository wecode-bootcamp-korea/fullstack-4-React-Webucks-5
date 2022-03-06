import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import LoginHansol from './pages/hansolJeong/Login/Login';
// import MainHansol from './pages/hansolJeong/Main/Main';
// import ListHansol from './pages/hansolJeong/List/List';
// import DetailHansol from './pages/hansolJeong/Detail/Detail';

// import LoginSeoungwoo from './pages/seoungwooMa/Login/Login';
// import MainSeoungwoo from './pages/seoungwooMa/Main/Main';
// import ListSeoungwoo from './pages/seoungwooMa/List/List';
// import DetailSeoungwoo from './pages/seoungwooMa/Detail/Detail';

import LoginBongjun from './pages/bongjunSeong/Login/Login';
import MainBongjun from './pages/bongjunSeong/Main/Main';
import ListBongjun from './pages/bongjunSeong/List/List';
import DetailBongjun from './pages/bongjunSeong/Detail/Detail';

// import LoginChaeryung from './pages/chaeryungHan/Login/Login';
// import MainChaeryung from './pages/chaeryungHan/Main/Main';
// import ListChaeryung from './pages/chaeryungHan/List/List';
// import DetailChaeryung from './pages/chaeryungHan/Detail/Detail';

// import LoginSeulki from './pages/seulkiKim/Login/Login';
// import MainSeulki from './pages/seulkiKim/Main/Main';
// import ListSeulki from './pages/seulkiKim/List/List';
// import DetailSeulki from './pages/seulkiKim/Detail/Detail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login-hansol" element={<LoginHansol />} />
        <Route path="/main-hansol" element={<MainHansol />} />
        <Route path="/list-hansol" element={<ListHansol />} />
        <Route path="/detail-hansol" element={<DetailHansol />} /> */}

        {/* <Route path="/login-seoungwoo" element={<LoginSeoungwoo />} />
        <Route path="/main-seoungwoo" element={<MainSeoungwoo />} />
        <Route path="/list-seoungwoo" element={<ListSeoungwoo />} />
        <Route path="/detail-seoungwoo" element={<DetailSeoungwoo />} /> */}

        <Route path="/login-bongjun" element={<LoginBongjun />} />
        <Route path="/main-bongjun" element={<MainBongjun />} />
        <Route path="/list-bongjun" element={<ListBongjun />} />
        <Route path="/detail-bongjun" element={<DetailBongjun />} />

        {/* <Route path="/login-chaeryung" element={<LoginChaeryung />} />
        <Route path="/main-chaeryung" element={<MainChaeryung />} />
        <Route path="/list-chaeryung" element={<ListChaeryung />} />
        <Route path="/detail-chaeryung" element={<DetailChaeryung />} />

        <Route path="/login-seulki" element={<LoginSeulki />} />
        <Route path="/main-seulki" element={<MainSeulki />} />
        <Route path="/list-seulki" element={<ListSeulki />} />
        <Route path="/detail-seulki" element={<DetailSeulki />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
