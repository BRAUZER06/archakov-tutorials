import React from 'react';

import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { FullPost } from './pages/FullArticle';
import { Footer } from './components/Footer';
import { Route, Routes } from 'react-router';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<h1>Логин</h1>} />
        <Route path="/post/:id" element={<FullPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
