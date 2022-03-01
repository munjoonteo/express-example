const cors = require("cors");
const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const getData = () => {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
};

app.get("/members", (req, res) => {
  const data = getData();
  res.send(data);
});

app.get("/member/:id", (req, res) => {
  const data = getData();
  const memberID = req.params.id;

  if (data.hasOwnProperty(memberID)) {
    res.send(data[memberID]);
  } else {
    res.status(400).send("Invalid request: Member does not exist!");
  }
});

app.post("/member", (req, res) => {
  const data = getData();

  try {
    const { name, discord_tag, team, role, year } = req.body;
    if (!name || !discord_tag || !team || !role || !year) {
      throw "Missing parameter for adding a new member!";
    }

    for (const member of data) {
      if (member.name === name || member.discord_tag === discord_tag) {
        throw "Member already exists!";
      }
    }

    const latestID = Object.keys(data).length;

    while (data.hasOwnProperty(latestID.toString())) {
      latestID++;
    }

    data[latestID] = {
      id: latestID,
      name: name,
      discord_tag: discord_tag,
      team: team,
      role: role,
      year: parseInt(year),
    };

    fs.writeFileSync("data.json", JSON.stringify(data));

    res.send("Add member success!");
  } catch (e) {
    res.status(400).send(`Invalid request: ${e}`);
  }
});

app.put("/member", (req, res) => {
  const data = getData();

  try {
    const { id, name, discord_tag, team, role, year } = req.body;
    if (!id || !name || !discord_tag || !team || !role || !year) {
      throw "Missing parameter for editing member details!";
    }

    const intID = parseInt(id);
    if (!data.hasOwnProperty(intID)) {
      throw "Member does not exist!";
    }

    data[intID] = {
      id: intID,
      name: name,
      discord_tag: discord_tag,
      team: team,
      role: role,
      year: parseInt(year),
    };

    fs.writeFileSync("data.json", JSON.stringify(data));

    res.send("Edit member success!");
  } catch (e) {
    res.status(400).send(`Invalid request: ${e}`);
  }
});

app.delete("/member", (req, res) => {
  const data = getData();

  try {
    const { id } = req.body;
    if (id === null) {
      throw "Missing parameter for deleting member!";
    }

    const intID = parseInt(id);
    if (!data.hasOwnProperty(intID)) {
      throw "Member does not exist!";
    }

    delete data[intID];

    fs.writeFileSync("data.json", JSON.stringify(data));

    res.send("Delete member success!");
  } catch (e) {
    res.status(400).send(`Invalid request: ${e}`);
  }
});

app.listen(port, () => {
  `Server listening on port ${port}!`;
});
