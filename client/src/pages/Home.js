import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "../style/App.css";

const Home = ({ memberList }) => {
  const getIdByValue = (obj, value) => {
    return Object.keys(obj).find(id => obj[id] === value);
  };

  const handleDelete = id => {
    const data = { id: id };

    fetch("http://localhost:8000/member", {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify(data),
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <>
      <div className="subtitle">Members</div>
      <div className="members">
        {memberList &&
          Object.values(memberList).map(s => {
            return (
              <div className="card" key={s.id}>
                <div
                  onClick={() =>
                    (window.location = "/member/" + getIdByValue(memberList, s))
                  }
                >
                  <div className="card-info">
                    <span>Name: </span> {s.name}
                  </div>
                  <div className="card-info">
                    <span>Discord Tag:</span> {s.discord_tag}
                  </div>
                  <div className="card-info">
                    <span>Team: </span> {s.team}
                  </div>
                  <div className="card-info">
                    <span>Role: </span>
                    {s.role}
                  </div>
                  <div className="card-info">
                    <span>Current Year: </span> {s.year}
                  </div>
                </div>
                <button onClick={() => handleDelete(s.id)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
