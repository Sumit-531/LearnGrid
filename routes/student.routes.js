import express from "express";
import { createStudent, getAllStudents, getSingleStudent, updateStudent, deleteStudent } from "../controllers/student.controllers.js";
import limiter from "../middlewares/rateLimit.middleware.js";


const router = express.Router();


//CREATE
router.post("/", limiter, createStudent);

//GET ALL
router.get("/", limiter, getAllStudents);

//GET SINGLE
router.get("/:id", limiter, getSingleStudent);

//UPDATE
router.put("/:id", limiter, updateStudent);

//DELETE
router.delete("/:id", limiter, deleteStudent);




export default router;