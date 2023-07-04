import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/Home' element={<Home/>} />
      <Route path='/About' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      
   </Routes>
  </Router>
); 


reportWebVitals();
