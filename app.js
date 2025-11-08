import express, { json, urlencoded } from "express";
import mongoose from 'mongoose';
import { PORT, URI } from "./config/env.js";
import studentRoute from "./routes/student.routes.js";
import teacherRoute from "./routes/teacher.routes.js";



// const port = process.env.PORT;
// const uri = process.env.URI;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/students", studentRoute);
app.use("/api/teachers", teacherRoute);

//testing
app.get("/", (req,res)=>{
    res.send("Hello from Node Server.");
})




// database connection
mongoose.connect(URI)
.then(()=>{
    console.log("Connected to the database!");
    app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
})
.catch(() =>{
    console.log("Connection failed!");
})
