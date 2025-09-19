import logo from './logo.svg';
import './App.css';
import Home from './Screen/Home';
import Contact from './Screen/Contact';
import Support from './Screen/Support';
import About from './Screen/About';
import Employee from './Screen/Employee';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Headers from './Screen/Headers';
import Cal from './Screen/Cal';
import Cal1 from './Screen/Cal1';



function App() {
  return (
    <div className="App">
      <h2>Welcome SA</h2>
      <BrowserRouter>
      <Headers/>
      <Routes>
        <Route path ="home" element={<Home/>}/>
        <Route path ="about" element={<About/>}/>
        <Route path ="contact" element={<Contact/>}/>
        <Route path ="support" element={<Support/>}/>
        <Route path ="employee" element={<Employee/>}/>
        <Route path ="" element={<Home/>}/>
        <Route path ="cal" element={<Cal/>}/>
        <Route path ="cal1" element={<Cal1/>}/>
      {/* <Home/>lement={<About/>}/>
        <Route Path ="contact" element={<Contact/>}/>
        <Route Path ="support"
      <Contact/>
      <Support/>
      <About/>
      <Employee/> */}
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
