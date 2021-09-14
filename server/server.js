import express from 'express';
import cors from 'cors';
import fs from "fs";

const PORT = 3000;
const app = express();

app.get('/users', cors(), (req, res) => {
  fs.readFile('users.json', 'utf8', ((err, data) => {
    if (err) res.status(404).send(err);
    res.header("Content-Type", "application/json");
    res.send(JSON.stringify(JSON.parse(data)));
  }))
})

app.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}...`);
})