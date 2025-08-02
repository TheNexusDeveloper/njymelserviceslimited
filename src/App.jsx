import { React,  } from 'react'
import './App.css'
// import { Container, Row, Col } from 'react-bootstrap'
import { HashRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function App() {
 

  return (
    <div className="App">
        <Header />
        <main>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </HashRouter>
        </main>
        <Footer/>
    </div>
  )
}

export default App
