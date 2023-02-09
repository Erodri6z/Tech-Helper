import './App.css';
import { Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import IOS from './pages/IOS/IOS';
import Android from './pages/Android/Android';

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
    <Route
    path='/android'
    element={
      <Android />
    } 
    />
  </Routes>
  <Footer />
  </> 
  )
}

export default App;
