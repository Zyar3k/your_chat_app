const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Yes my Friend :) Server is up and running " }).status(200);
});

module.exports = router;