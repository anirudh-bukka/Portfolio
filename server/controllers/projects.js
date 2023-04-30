import Project from "../models/Project.js";
import User from "../models/User.js";
import asyncWrapper from '../middleware/async.js';

export const getAllProjects = asyncWrapper( async (req, res) => {
    const projects = await Project.find({})
    res.status(200).json({ projects })
})

export const createProject = asyncWrapper(async (req, res) => {
    const project = await Project.create(req.body);
    res.status(201).json({ project });
    
    // try {
    //     const { userID, description, picturePath } = req.body;
    //     const newProject = new Project({
    //         userID,
    //         title,
    //         date,
    //         description,
    //         githubLink,
    //         deploymentLink,
    //         picturePath,
    //     });

    //     await newProject.save();

    //     const post = await Project.find();
    //     res.status(201).json(project);
    // } catch (e) {
    //     res.status(400).json({ message: e.message });
    // }
});

export const getProject = asyncWrapper (async (req, res, next) => {
    const { id: projectID } = req.params;
    const project = await Project.findOne({ _id: projectID })
    if(!project) {
        return next(`No project with id: ${projectID}`, 400)
    }
    res.status(200).json({ project });
})

export const deleteProject = asyncWrapper(async (req, res, next) => {
    const { id: projectID } = req.params;
    const project = await Project.findOneAndDelete({ _id: projectID });
    if(!project) {
        return next(`No project with id: ${projectID} to delete.`, 400);
    }
    res.status(200).json({ project });
})

export const updateProject = asyncWrapper(async (req, res, next) => {
    const { id: projectID } = req.params;
    
    const project = await Project.findOneAndUpdate({ _id: projectID }, req.body, {
        new: true,
        runValidators: true
    });

    if(!project) {
        return next(`No project with id: ${projectID} to update.`, 404);
    }
    res.status(200).json({ project });
})

// module.exports = {
//     getAllProjects,
//     createProject,
//     getProject,
//     deleteProject,
//     updateProject
// }