import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../App.css';

const Home = ({ memberList }) => {
    const getIdByValue = (obj, value) => {
      return Object.keys(obj).find(id => obj[id] === value);
    }
    return (
        <>  
        <div className="subtitle">Members</div>
        <div className="members">
            {memberList &&
            Object.values(memberList).map(s => {
                return (
                <div className="card" key={s.discord_tag}  onClick={() => window.location = "/member/" + getIdByValue(memberList, s)}>
                <div className="member-box" >
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