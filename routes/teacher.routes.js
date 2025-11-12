import express from "express";
import { createTeacher, getAllTeachers, getSingleTeacher, updateTeacher, deleteTeacher } from "../controllers/teacher.controllers.js";
import limiter from "../middlewares/rateLimit.middleware.js";

const router = express.Router();

//CREATE
router.post("/", limiter, createTeacher);

//GET ALL
router.get("/", limiter, getAllTeachers);

//GET SINGLE
router.get("/:id", limiter, getSingleTeacher);

//UPDATE
router.put("/:id", limiter, updateTeacher);

//DELETE
router.delete("/:id", limiter, deleteTeacher);




export default router;