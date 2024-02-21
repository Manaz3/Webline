import './styles/index.scss'
import { Link, Route, Routes } from "react-router-dom"
import { Suspense, useContext, useState } from "react"
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "./pages/MainPage/MainPage.async"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext,  } from './Theme/ThemeContext'
import { useTheme } from './Theme/useTheme'
import { classNames } from './helpers/classNames'


function App() {
const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPageAsync />} />
          <Route path='/' element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
