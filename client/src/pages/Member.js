import React from "react";
import { useParams } from "react-router-dom";

import Header from "../components/Header";

const Member = ({ memberList }) => {
  const member = memberList[useParams()["id"]];

  return member ? (
    <>
      <Header />
      <div className="card-solo">
        <div className="card-info">
          <span>Name: </span> {member.name}
        </div>
        <div className="card-info">
          <span>Discord Tag:</span> {member.discord_tag}
        </div>
        <div className="card-info">
          <span>Team: </span> {member.team}
        </div>
        <div className="card-info">
          <span>Role: </span>
          {member.role}
        </div>
        <div className="card-info">
          <span>Current Year: </span> {member.year}
        </div>
      </div>
    </>
  ) : (
    <div>This member does not exist!</div>
  );
};

export default Member;
