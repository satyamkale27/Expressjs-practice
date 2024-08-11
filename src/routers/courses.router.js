const express = require("express");
const { getcourses } = require("./courses.controllers");
const { getcrsfiles } = require("./courses.controllers");
const courseRouter = express.Router();
const getfilescrs = express.Router();
const getsite = express.Router();
courseRouter.get("/courses", getcourses);
getfilescrs.get("/", getcrsfiles);
module.exports = {
  courseRouter,
  getfilescrs,
};
