const express = require("express");
const { courseRouter } = require("./routers/courses.router");
const { getfilescrs } = require("./routers/courses.router");
const app = express();
const path = require("path");
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${delta}ms`);
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use(getfilescrs);

app.use(express.json());
app.use(courseRouter);
module.exports = app;
