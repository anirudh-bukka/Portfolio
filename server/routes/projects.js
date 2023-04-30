import express from "express";
import { getAllProjects,
    createProject,
    getProject,
    deleteProject,
    updateProject
} from '../controllers/projects.js';

const router = express.Router();

router.get("/", getAllProjects);
router.get("/:projectID", getProject);
router.patch("/:projectID", createProject);
router.post("/:projectID", updateProject);
router.delete("/:projectID", deleteProject);

export default router;