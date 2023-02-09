import './App.css';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import IOS from './pages/IOS/IOS';

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
    <Route
    path='/ios'
    element={
      <IOS />
    }
    />
  </Routes>
  <Footer />
  </> 
  )
}

export default App;
