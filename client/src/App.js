import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Member from "./pages/Member";
import MemberCreate from "./pages/MemberCreateForm";
import MemberEdit from "./pages/MemberEditForm";

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
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={<Home memberList={members} setMembers={setMembers} />}
          />
          <Route
            path="/member/:id"
            exact
            element={<Member memberList={members} />}
          />
          <Route path="/member/create" exact element={<MemberCreate />} />
          <Route
            path="/member/:id/edit"
            exact
            element={<MemberEdit memberList={members} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
