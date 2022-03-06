const cors = require("cors");
const express = require("express");
const fs = require("fs");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

// TODO
// 1. Setup a MongoDB Atlas database
// 2. Recreate the backend we made in the example but instead of writing to a file, write to the database instead
// 2a. Remember to store the connection string in a .env file!
// 3. The fields in the "member" object should be exactly the same as in the provided JSON.
// If all goes well, if you start the frontend you should be able to play around with adding, viewing, editing and deleting users.