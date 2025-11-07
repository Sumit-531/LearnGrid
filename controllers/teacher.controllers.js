import Teacher from "../models/teacher.model.js";

// Create
const createTeacher = async (req, res) =>{
    try {
        const teacher = await Teacher.create(req.body);
        res.status(200).json(teacher);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

//READ
//Read all
const getAllTeachers = async (req,res) =>{
    try{
        const teachers = await Teacher.find({});
        res.status(200).json(teachers);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

//Read single
const getSingleTeacher = async (req,res) =>{
    try{
        const {id} = req.params;
        const teacher = await Teacher.findById(id);

        if(!teacher){
            return res.status(404).json({message: "Teacher not found!"});
        }
        res.status(200).json(teacher);

    } catch(error){
        res.status(500).json({message: error.message});
    }
}

//Update
const updateTeacher = async (req,res) =>{
    try{
        const {id} = req.params;
        const teacher = await Teacher.findByIdAndUpdate(id, req.body);

        if(!teacher){
            return res.status(404).json({message: "Teacher not found!"});
        }

        const updatedTeacher = await Teacher.findById(id);
        res.status(200).json(updatedTeacher);

    } catch(error){
        res.status(500).json({message: error.message});
    }
}

//DELETE
const deleteTeacher = async (req,res) =>{
    try{
        const {id} = req.params;
        const teacher = await Teacher.findByIdAndDelete(id);

        if(!teacher){
            res.status(404).json({message: "Teacher not found!"});
        }

        res.status(200).json({message: "Teacher deleted successfully"});
    }catch(error){
        res.status(500).json({message: error.message});
    }
}


export {
    createTeacher,
    getAllTeachers,
    getSingleTeacher,
    updateTeacher,
    deleteTeacher,
}