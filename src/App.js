import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Users, About } from './components/About';
import { NaviBar } from './components/NaviBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <NaviBar />  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<Users />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
