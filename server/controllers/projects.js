import Project from "../models/Project.js";
import User from "../models/User.js";

// CREATE A PROJECT

export const createProject = async (req, res) => {
    try {
        const {userId, title, date, description, githubLink, deploymentLink, picturePath } = req.body;
        const user = await User.findById(userId);
        const newProject = new Post({ userId, title, date, description, githubLink, deploymentLink, picturePath });
        await newProject.save();
        
    } catch (e) {

    }
}

