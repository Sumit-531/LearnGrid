import Student from "../models/student.model.js";

// Create
const createStudent = async (req, res) =>{
    try {
        const student = await Student.create(req.body);
        res.status(200).json(student);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

//READ
//Read all
const getAllStudents = async (req,res) =>{
    try{
        const students = await Student.find({});
        res.status(200).json(students);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

//Read single
const getSingleStudent = async (req,res) =>{
    try{
        const {id} = req.params;
        const student = await Student.findById(id);

        if(!student){
            return res.status(404).json({message: "Student not found!"});
        }
        res.status(200).json(student);

    } catch(error){
        res.status(500).json({message: error.message});
    }
}

//Update
const updateStudent = async (req,res) =>{
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndUpdate(id, req.body);

        if(!student){
            return res.status(404).json({message: "Student not found!"});
        }

        const updatedStudent = await Student.findById(id);
        res.status(200).json(updatedStudent);

    } catch(error){
        res.status(500).json({message: error.message});
    }
}

//DELETE
const deleteStudent = async (req,res) =>{
    try{
        const {id} = req.params;
        const student = await Student.findByIdAndDelete(id);

        if(!student){
            res.status(404).json({message: "Student not found!"});
        }

        res.status(200).json({message: "Student deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}


export {
    createStudent,
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
};