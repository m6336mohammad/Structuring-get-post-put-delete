const courses = [
  { id: 1, name: "html" },
  { id: 2, name: "css" },
  { id: 3, name: "javascript" },
];

//get courses
const getCourse = (req ,res)=>{
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
const postCourse = (req,res)=>{

  try{ 
     
    if(!req.body.name || req.body.name.length < 3){
      return res.status(404).json('Name is mandatory and must be more than 3 characters');
    };
    const course ={
      id: courses.length + 1,
      name: req.body.name,
    }
    courses.push(course);
    res.status(200).json({data:course , message: 'course created successfully'});
  
  }catch(error){
    console.error(error.message);
    res.status(400).json({
      data: null,
      message: "Error while creating user",
    });
  }
} 

export default {
  getCourse,
  getCourseById,
  postCourse,
}