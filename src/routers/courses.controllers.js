const coursesData = require("../models/courses.model");
function getcourses(req, res) {
  res.status(200).json(coursesData);
}
module.exports = {
  getcourses,
};
