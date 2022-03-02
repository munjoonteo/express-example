import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../components/Header";
import FormInput from "../components/FormInput";

const MemberEdit = ({ memberList }) => {
  const id = useParams()["id"]
  const member = memberList[id];

  const [name, setName] = useState(member.name);
  const [discord_tag, setDiscordTag] = useState(member.discord_tag);
  const [team, setTeam] = useState(member.team);
  const [role, setRole] = useState(member.role);
  const [year, setYear] = useState(member.year);

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();

    const data = { id, name, discord_tag, team, role, year };

    fetch("http://localhost:8000/member", {
      headers: { "Content-Type": "application/json" },
      method: "PUT",
      body: JSON.stringify(data),
    }).catch(err => {
      console.log(err);
    });

    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="subtitle">Edit a Member's Details</div>
      <form onSubmit={handleSubmit}>
        <FormInput value={name} setter={setName} placeholder={"Name"} />
        <FormInput
          value={discord_tag}
          setter={setDiscordTag}
          placeholder={"Discord tag"}
        />
        <FormInput value={team} setter={setTeam} placeholder={"Team"} />
        <FormInput value={role} setter={setRole} placeholder={"Role"} />
        <FormInput value={year} setter={setYear} placeholder={"Year"} />
        <input type="submit" className="create submit-text" value="Edit" />
      </form>
    </>
  );
};

export default MemberEdit;
