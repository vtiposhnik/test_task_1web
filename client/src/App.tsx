import {  Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';

function App() {

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/catalog' element={<Catalog />} />
    </Routes>
    </>
  )
}

export default App
