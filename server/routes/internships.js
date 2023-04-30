import express from "express";
import { getAllInternships,
    createIntership,
    getInternship,
    deleteInternship,
    updateIntership
} from '../controllers/internships.js';

const router = express.Router();

router.get("/", getAllInternships);
router.get("/:internshipID", getInternship);
router.post("/add", createIntership);
router.patch("/:internshipID", updateIntership);
router.delete("/:internshipID");

export default router;