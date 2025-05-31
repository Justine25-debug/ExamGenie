import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import CurriculumPage from './Pages/Curriculum/Page';
import LoginPage from './Pages/Login/Page';
import Home from './Pages/Home/Page';
import SignUpPage from './Pages/SignUp/Page';
import TOSPage from './Pages/TOS/Page'; // ✅ Add this line

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
        <Route path="/tos" element={<TOSPage />} /> {/* ✅ Add this route */}
        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
