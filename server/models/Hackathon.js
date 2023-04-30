import mongoose from "mongoose";

const ExperienceSchema = new mongoose.Schema(
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
);

const Experience = mongoose.model("Experience", ExperienceSchema);
export default Experience;