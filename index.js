const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const nayan = [
  {
    is: 101,
    name: "nayan",
    rollno: 104,
  },
];
app.get("/", (req, res) => {
  res.send("this is our home page");
});
app.get("/home", (req, res) => {
  //   res.send("this is about  section");
  res.sendFile(path.join(__dirname, "home.html"));
  //   res.json(nayan);
});
app.get("/about", (req, res) => {
  //   res.send("this is about  section");

  res.sendFile(path.join(__dirname, "aboutus.html"));
});
app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "contactus.html"));
});

app.listen(port, () => {
  console.log(`port is running on ${port}`);
});
