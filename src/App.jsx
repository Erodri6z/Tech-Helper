import './App.css';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';

function App() {
  return (
  <>
  <Routes>
    <Route 
    path="/about"
    element={
    <About />
    }
    />
  </Routes>
  <Footer />
  </> 
  )
}

export default App;
