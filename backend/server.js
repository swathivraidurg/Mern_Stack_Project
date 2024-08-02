const express = require("express");
const notes = require("./data/notes");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.get("/", (req, res) => {
  res.send("API is running");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const noteid = notes.find((n) => n._id === req.params.id);
  res.send(noteid);
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, console.log(`server is listening on port ${PORT}`));
