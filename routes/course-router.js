import express from "express";
const router = express.Router();
import courseControler from "./../controller/course-control.js";


router.get("/", courseControler.getCourse);
router.get("/:id", courseControler.getCourseById);
// router.post("/", courseControler.registerCourse);
// router.put("/:id", courseControler.updateCourse);
// router.delete("/:id");

export default router;
