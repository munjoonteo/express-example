import React, { useContext } from 'react'
import "./member.css";
import { useParams } from 'react-router-dom';



export const Member = ({memberList}) => {

  const member = memberList[useParams()["id"]];
  return member ? <>
  <div className='individual-box'>
      <div className="individual-info"><span>Name: </span> {member.name}</div>
        <div className="individual-info"><span>Discord Tag:</span> {member.discord_tag}</div>
        <div className="individual-info"><span>Team: </span> {member.team}</div>
        <div className="individual-info"><span>Role: </span>{ member.role}</div>
        <div className="individual-info"><span>Current Year: </span> {member.year}</div>
    </div>
  </> : <></>
  
}
