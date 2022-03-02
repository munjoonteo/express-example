import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import FormInput from "../components/FormInput";

const MemberCreate = () => {
  const [name, setName] = useState("");
  const [discord_tag, setDiscordTag] = useState("");
  const [team, setTeam] = useState("");
  const [role, setRole] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    console.log("hi");

    const data = { name, discord_tag, team, role, year };

    fetch("http://localhost:8000/member", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    }).catch(err => {
      console.log(err);
    });

    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="subtitle">Create a New Member</div>
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
        <input type="submit" className="create submit-text" value="Create" />
      </form>
    </>
  );
};

export default MemberCreate;
