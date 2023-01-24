/* eslint-disable import/no-extraneous-dependencies */
// import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import './App.css';
import { AnimatePresence } from 'framer-motion';

import './styles/bootstrap.scss';
import styles from './App.module.scss';

import ScrollToTop from './components/utils/ScrollToTop';
import MainLayout from './components/layout/MainLayout/MainLayout';
import MainPage from './components/views/MainPage/MainPage';
import NotFound from './components/views/NotFound/NotFound';
import Projects from './components/views/Projects/Projects';
import Contact from './components/views/Contact/Contact';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <MainLayout>
        <ScrollToTop />
        <AnimatePresence
          mode="wait"
          // initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </MainLayout>
    </div>
  );
}

export default App;
