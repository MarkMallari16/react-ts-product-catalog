import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { CartProvider } from './context/CartContext.tsx'
import Header from './component/Header.tsx'
import ProductPage from './pages/ProductPage.tsx'
import ProductDetailPage from './pages/ProductDetailPage.tsx'
import CartPage from './pages/CartPage.tsx'
import CheckoutPage from './pages/CheckoutPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Navigate to='/products' />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
)
