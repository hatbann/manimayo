import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Header from './components/layout/Header.tsx';
import Home from './pages/Home.tsx';
import Products from './pages/Products.tsx';
import Login from './pages/Login.tsx';
import Cart from './pages/Cart.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/product"
                element={<Navigate to="/product/griptok" replace />}
              />
              <Route path="/product/:type" element={<Products />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
