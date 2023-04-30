import express from "express";
import {
    getAllHackathons,
    getHackathon,
    createHackathon,
    updateHackathon,
    deleteHackathon
} from "../controllers/hackathons.js";

const router = express.Router();

router.get("/", getAllHackathons);
router.get("/:hackathonID", getHackathon);
router.post("/add", createHackathon);
router.patch("/:hackathonID", updateHackathon);
router.delete("/:hackathonID", deleteHackathon);

export default router;