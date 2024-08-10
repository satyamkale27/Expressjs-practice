const coursesData = require("../models/courses.model");
function getcourses(req, res) {
  const start = Date.now();
  res.status(200).json(coursesData);
  const delta = Date.now() - start;
  console.log(`${delta}ms`);
}
module.exports = {
  getcourses,
};
