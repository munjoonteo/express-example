import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/header";

import "../style/App.css";

const Home = ({ memberList }) => {
  const navigate = useNavigate();

  const showMemberPage = id => {
    navigate(`/member/${id}`);
  };

  const showAddMemberPage = () => {
    navigate("/member/create");
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
      <Header />
      <div className="subtitle">Members</div>
      <div className="home-container">
        <div className="members">
          {memberList &&
            Object.values(memberList).map(s => {
              return (
                <div
                  className="card"
                  key={s.id}
                  onClick={() => showMemberPage(s.id)}
                >
                  <div>
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
                  <button className="delete" onClick={() => handleDelete(s.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              );
            })}
        </div>
        <button className="create" onClick={showAddMemberPage}>
          Add a new member
        </button>
      </div>
    </>
  );
};

export default Home;
