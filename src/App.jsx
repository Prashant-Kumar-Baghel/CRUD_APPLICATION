import React from 'react'
import {BrowserRouter, Route, Routes}  from 'react-router-dom'
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css' 
import CreateStudent from './CreateStudent';
import Read from './Read'
import Update from './Update';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
    <Routes>
    
      <Route path='/' element={<Home/>}/> 
      <Route path='/create' element={<CreateStudent/>}/>
      <Route path='/read/:id' element={<Read/> }/>
      <Route path='/edit/:id' element={<Update/> }/>
      
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}

export default App;
