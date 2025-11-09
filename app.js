import express, { json, urlencoded } from "express";
import { PORT } from "./config/env.js";
import studentRoute from "./routes/student.routes.js";
import teacherRoute from "./routes/teacher.routes.js";
import connectDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

//custom middleware
app.use(errorMiddleware);

//routes
app.use("/api/students", studentRoute);
app.use("/api/teachers", teacherRoute);

//testing
app.get("/", (req,res)=>{
    res.send("Hello from Node Server.");
});


// database connection
app.listen(PORT, async () =>{
    console.log(`LearnGrid API is running on http://localhost:${PORT}`);

    await connectDatabase();
});
