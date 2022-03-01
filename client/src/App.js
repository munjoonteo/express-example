import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Member from "./pages/Member";
import MemberCreate from "./pages/MemberCreateForm";
import MemberEdit from "./pages/MemberEditForm";
import Home from "./pages/Home";

import "./style/App.css";

function App() {
  const [members, setMembers] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/members")
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  return (
    <div className="App">
      <div className="title" onClick={() => (window.location = "/")}>
        CSESoc Projects 2022
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home memberList={members} />} />
          <Route
            path="/member/:id"
            exact
            element={<Member memberList={members} />}
          />
          <Route path="/member/:id/create" exact element={<MemberCreate />} />
          <Route path="/member/:id/edit" exact element={<MemberEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
