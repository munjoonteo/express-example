import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faPencil } from "@fortawesome/free-solid-svg-icons";

import Header from "../components/Header";

import "../style/App.css";

const Home = ({ memberList }) => {
  const navigate = useNavigate();

  const showMemberPage = id => {
    navigate(`/member/${id}`);
  };

  const showAddMemberPage = () => {
    navigate("/member/create");
  };

  const handleEdit = (e, id) => {
    e.stopPropagation();
    navigate(`/member/${id}/edit`);
  };

  const handleDelete = id => {
    const data = { id };

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
                <div key={s.id}>
                  <div className="card" onClick={() => showMemberPage(s.id)}>
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
                    <div className="card-buttons">
                      <button
                        className="edit"
                        onClick={e => handleEdit(e, s.id)}
                      >
                        <FontAwesomeIcon icon={faPencil} />
                      </button>
                      <button
                        className="delete"
                        onClick={() => handleDelete(s.id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <button className="create create-logo" onClick={showAddMemberPage}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
};

export default Home;
