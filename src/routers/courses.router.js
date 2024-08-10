const express = require("express");
const { getcourses } = require("./courses.controllers");
const courseRouter = express.Router();
courseRouter.get("/courses", getcourses);
module.exports = courseRouter;
