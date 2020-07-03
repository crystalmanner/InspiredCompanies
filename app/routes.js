module.exports = (app) => {
  var router = require("express").Router();

  // Create a new Event
  router.post("/emaildata", (req, res) => {
    var fs = require("fs");
    fs.stat("./data/email.csv", function (err, stat) {
      // console.log(req.body.emailData);
      var csv = req.body.emailData + "\r\n";
      fs.appendFile("./data/email.csv", csv, function (err) {
        if (err) throw err;
        res.status(400).send({ message: "ok" });
      });
    });
  });

  router.get("/emaildata", (req, res) => {
    res.status(400).send({ message: "get success!"})
  });

  router.post("/downloadcsv", function (req, res) {
    const file = `${__dirname}/data/email.csv`;
    // console.log(file);
    res.download(file); // Set disposition and send it.
  });

  app.use("/api", router);
};
