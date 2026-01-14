import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Hero';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
