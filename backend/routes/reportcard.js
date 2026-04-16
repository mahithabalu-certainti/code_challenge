const express = require("express");
const router = express.Router();
const createStudent = require("../controllers/reportcardController.js");
router.post("/student", createStudent);
module.exports = router;