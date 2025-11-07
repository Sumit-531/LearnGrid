import mongoose from "mongoose";

const TeacherSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the teacher name"],
        },
        subject: {
            type: String,
            required: [true],
        },

        age: {
            type: Number,
            required: [false],
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

const Teacher = mongoose.model("Teacher", TeacherSchema);

export default Teacher;