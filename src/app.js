const express = require("express");
const courseRouter = require("./routers/courses.router");
const app = express();
app.use(express.json());
app.use(courseRouter);
module.exports = app;
