import Header from './components/Header';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import ShopPage from './pages/shopPage';
import Login from './components/Login';
import ProductDetail from './pages/ProductDetail';
import AdminProductDetail from './pages/AdminProductDetail';
import AdminDashboard from './pages/AdminDashboard.jsx';
import ProtectedRoutes from './components/ProtectedRoutes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/product/:id" element={<AdminProductDetail />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;