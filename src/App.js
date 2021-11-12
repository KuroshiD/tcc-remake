import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home'
import UserProfile from './pages/UserProfile'
import AnimeProfile from './pages/AnimeProfile'
import GlobalStyles from './styles/GlobalStyles'

function App() {  
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<UserProfile />} path="/user/:username" />
        <Route element={<AnimeProfile />} path="/anime/:animeID" />
      </Routes>

      {/* <Footer />  */}

      <GlobalStyles />

    </BrowserRouter>
  )
}

export default App;
