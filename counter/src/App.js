import logo from './logo.svg';
import './App.css';
import Home from './home';
import Next from './next';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>


    
      <Routes>
        <Route path='/next' element={<Next/>} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
   
  
  );
}

export default App;
