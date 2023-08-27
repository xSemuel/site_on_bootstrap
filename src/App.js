import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Users, About, NaviBar, Footer } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NaviBar />  
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/about" element={<About />}/>
        </Routes>  
        <Footer />
      </BrowserRouter> 
    </>
  );
}
