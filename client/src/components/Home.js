import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
const Home = ({ memberList }) => {

    return (
        <>  
        <div className="subtitle">Members</div>
        <div className="members">
            {memberList &&
            Object.values(memberList).map(s => {
                return (
                <div className="card" onClick={() => window.location = "/member/" + s.discord_tag }>
                <div className="member-box" key={s.discord_tag} >
                    <div className="member-info"><span>Name: </span> {s.name}</div>
                    <div className="member-info"><span>Discord Tag:</span> {s.discord_tag}</div>
                    <div className="member-info"><span>Team: </span> {s.team}</div>
                    <div className="member-info"><span>Role: </span>{s.role}</div>
                    <div className="member-info"><span>Current Year: </span> {s.year}</div>
                </div>
                </div>
            );
          })}
      </div>
    </>
  );
}

export default Home