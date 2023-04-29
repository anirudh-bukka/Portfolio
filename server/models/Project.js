import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        githubLink: {
            type: String
        },
        deploymentLink: {
            type: String
        },
        picturePath: {
            type: String,
            default: ""
        }
    }
)