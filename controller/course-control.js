const courses = [
  { id: 1, name: "html", page: 20 },
  { id: 2, name: "css", page: 25 },
  { id: 3, name: "javascript", page: 35 },
];

//get courses
const getCourse = (req, res) => {
  res.send(courses);
};

//get courses by ID
const getCourseById = (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).json("coures with given id not found");
  }
  res.send(course);
};

//post
const postCourse = (req, res) => {
  try {
    if (!req.body.name || req.body.name.length < 3) {
      return res
        .status(404)
        .json("Name is mandatory and must be more than 3 characters");
    }
    const course = {
      id: courses.length + 1,
      name: req.body.name,
    };
    courses.push(course);
    res
      .status(200)
      .json({ data: course, message: "course created successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({
      data: null,
      message: "Error while creating user",
    });
  }
};

const putCourse = (req, res) => {
  const courseId = parseInt(req.params.id);
  const courseIndex = courses.findIndex((c) => c.id === courseId);

  if (courseIndex === -1) {
    return res.status(404).json({ data: null, message: "Course not found" });
  }

  const user = req.body;
  courses[courseIndex].name = user.name; // Assuming that you expect a "name" field in the request body
  courses[courseIndex].page = user.page; // Assuming that you expect a "page" field in the request body

  res
    .status(200)
    .json({ data: courses[courseIndex], code: 200, message: "OK" });
};

const deleteCourseById = (req, res) => {
  try {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) {
      return res.status(404).send("coures with given id not found");
    }

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send({ data: course, message: "deleted successful" });
  
  } catch (error) {
    console.log(error.message);
    res.status(400).send({ data: null, message: "Error while delete course" });
  }
};

export default {
  getCourse,
  getCourseById,
  postCourse,
  putCourse,
  deleteCourseById,
};
