import React, { useState, useEffect, createContext } from 'react';
import './App.css';
import { Member } from './components/Member';
import MemberCreate from './components/MemberCreateForm';
import MemberEdit from './components/MemberEditForm';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [members, setMembers] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/members")
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  return (
    <div className="App">
      <div className="title" onClick={ () => window.location = "/"} >CSESoc Projects 2022</div>
          <BrowserRouter>
          <Routes> 
            <Route path="/" exact element={ <Home memberList={members}/>} />
            <Route path="/member/:id" exact element={ <Member memberList={members}/>} /> 
            <Route path="/member/:id/create" exact element={ <MemberCreate />} /> 
            <Route path="/member/:id/edit" exact element={ <MemberEdit />} /> 
          </Routes>
          </BrowserRouter>
    
      </div>
  );
}

export default App;
