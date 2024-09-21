import {  Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import AuthForm from './pages/Authorization';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/about' element={<About />} />
      <Route path='/auth' element={<AuthForm />} />
      
    </Routes>
    <Footer />
    </>
  )
}

export default App
