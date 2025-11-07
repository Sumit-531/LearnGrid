import express, { json, urlencoded } from "express";
import mongoose from 'mongoose';
import 'dotenv/config';
import studentRoute from "./routes/student.routes.js"



const port = process.env.PORT;
const uri = process.env.URI;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
app.use("/api/students", studentRoute);

//testing
app.get("/", (req,res)=>{
    res.send("Hello from Node Server.");
})




// database connection
mongoose.connect(uri)
.then(()=>{
    console.log("Connected to the database!");
    app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});
})
.catch(() =>{
    console.log("Connection failed!");
})
