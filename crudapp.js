const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const database = [
  { id: 1, name: "nayan", age: 47 },
  { id: 20, name: "cxcvbn", age: 852 },
];

//create(c)
app.post("/users", (req, res) => {
  const newuser = {
    id: database.length + 1,
    name: req.body.name,
    age: req.body.age,
  };
  database.push(newuser);
  res.status(201).json(newuser);
});

////READ(R)-->READALL
app.get("/users", (req, res) => {
  res.json(database);
});
app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
