const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const { Console } = require("console");

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());
app.options("*", cors()); // include before other routes for preflight checks

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../build")));

app.post("/email", (req, res) => {
  var fs = require("fs");
  fs.stat("./data/email.csv", function (err, stat) {
    var csv = req.body.emailData + "\r\n";
    fs.appendFile("./data/email.csv", csv, function (err) {
      if (err) throw err;
      res.send("ok");
    });
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
