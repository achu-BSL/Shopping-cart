import { Routes, Route } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

import { Container } from 'react-bootstrap';
import { Navbar } from './components/Navbar';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Store } from './pages/Store';



function App() {
  return (
    <ShoppingCartProvider>
    <Navbar/> 
      <Container className='mb-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/store' element={<Store/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App
