import mongoose from "mongoose";

const InternshipSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        startDate: {
            type: String,
            required: true
        },
        endDate: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }
)

const Internship = mongoose.model("Internship", InternshipSchema);
export default Internship;