import mongoose from "mongoose";

const StudentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the student name"],
        },

        class: {
            type: Number,
            required: [true],
            default: 0,
        },

        roll: {
            type: String,
            required: [true],
            default: 0,
        },

        age: {
            type: Number,
            required: [true],
            default: 0,
        },
        
        section: {
            type: String,
            required: [true],
        },
    },

        {
            timestamps: true,
        },
    
    
);

const Student = mongoose.model("Student", StudentSchema);

export default Student;