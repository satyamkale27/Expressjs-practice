const coursesData = require("../models/courses.model");
function getcourses(req, res) {
  return res.status(200).json(coursesData);
}
module.exports = {
  getcourses,
};
