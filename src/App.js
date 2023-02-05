// import logo from './logo.svg';
import './App.css';

// for multi pages routing imported files
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";

// react router part is imported here
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
   </Routes>
   </>
  );
}

export default App;
