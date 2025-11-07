import express from "express";
import { createTeacher, getAllTeachers, getSingleTeacher, updateTeacher, deleteTeacher } from "../controllers/teacher.controllers.js";

const router = express.Router();

//CREATE
router.post("/", createTeacher);

//GET ALL
router.get("/", getAllTeachers);

//GET SINGLE
router.get("/:id", getSingleTeacher);

//UPDATE
router.put("/:id", updateTeacher);

//DELETE
router.delete("/:id", deleteTeacher);




export default router;