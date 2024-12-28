import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
/* import Cart from './pages/Cart';
import MyPage from './pages/MyPage'; */

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
{/*             <Route path="/cart" element={<Cart />} />
            <Route path="/mypage" element={<MyPage />} /> */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
