import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";

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

  const deleteHandler = s => {
    const data = { id: s.id };

    fetch("http://localhost:8000/member", {
      headers: { "Content-Type": "application/json" },
      method: "DELETE",
      body: JSON.stringify(data),
    }).catch(err => {
      console.log(err);
    });

    navigate("/");
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
                <div>
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
                    <button
                      className="delete"
                      onClick={() => handleDelete(s.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                  <button onClick={() => deleteHandler(s)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              );
            })}
          <div className="add-member-button">
            <button>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
