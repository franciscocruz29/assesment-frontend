import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
