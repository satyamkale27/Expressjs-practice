const coursesData = require("../models/courses.model");
function getcourses(req, res) {
  res.status(200).json(coursesData);
}
function getcrsfiles(req, res) {
  res.render("index", {
    title: "courses",
    heading: "Explore the courses",
  });
}
module.exports = {
  getcourses,
  getcrsfiles,
};
