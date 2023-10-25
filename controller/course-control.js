const courses = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
  { id: 3, name: "javascript" },
];

//get
const getCourseById = (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    return res.status(404).json("coures with given id not found");
  }
  res.send(course);
};


const getCourse = (req ,res)=>{
  res.send(courses);
};