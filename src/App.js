import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Users, About, NaviBar } from './components';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
      <NaviBar />  
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
