import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [members, setMembers] = useState({});

  useEffect(() => {
    fetch("http://localhost:8000/members")
      .then(res => res.json())
      .then(data => setMembers(data));
  }, []);

  return (
    <div className="App">
      <div className="title">CSESoc Projects 2022</div>
      <div className="subtitle">Members</div>
      <div className="members">
        {members &&
          Object.values(members).map(s => {
            return (
              <div className="member-box" key={s.discord_tag}>
                <div className="member-info">Name: {s.name}</div>
                <div className="member-info">Discord Tag: {s.discord_tag}</div>
                <div className="member-info">Team; {s.team}</div>
                <div className="member-info">Role: {s.role}</div>
                <div className="member-info">Current year: {s.year}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
