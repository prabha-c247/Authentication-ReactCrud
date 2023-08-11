import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './component/Users';
import { Create } from './component/Create';
import { Update } from './component/Update';
import Login from './component/Login';
import Logout from './component/Logout';
// import {useState} from 'react'


function App() {
  // const [token, setToken] = useState();
  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users name='prabha'/>} />
        <Route path="/create" element={<Create allUsers={undefined} setAllUsers={undefined}/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
