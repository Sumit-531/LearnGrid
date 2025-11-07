import express from "express";
import { createStudent, getAllStudents, getSingleStudent, updateStudent, deleteStudent } from "../controllers/student.controllers.js";


const router = express.Router();


//CREATE
router.post("/", createStudent);

//GET ALL
router.get("/", getAllStudents);

//GET SINGLE
router.get("/:id", getSingleStudent);

//UPDATE
router.put("/:id", updateStudent);

//DELETE
router.delete("/:id", deleteStudent);




export default router;