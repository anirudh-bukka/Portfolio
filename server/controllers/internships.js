import Internship from "../models/Internship.js";
import asyncWrapper from '../middleware/async.js';

const getAllInternships = asyncWrapper( async(req, res) => {
    const internships = await Internship.find({});
    res.status(200).json({ internships });
});

const createIntership = asyncWrapper( async(req, res) => {
    const internship = await Internship.create(req.body);
    res.status(201).json({ internship });
});

const getInternship = asyncWrapper( async (req, res, next) => {
    const { id: internshipID } = req.params;
    const internship = await Internship.findOne({ _id: internshipID });
    if(!internship) {
        return next(`No internship with id: ${internshipID}`, 400);
    }

    res.status(200).json({ internship });
});

const deleteInternship = asyncWrapper( async(req, res, next) => {
    const { id: internshipID } = req.params;
    const internship = await Internship.findOneAndDelete({ _id: internshipID });
    if(!internship) {
        return next(`No internship with id: ${internshipID}`, 400);
    }

    res.status(200).json({ internship });
});

const updateIntership = asyncWrapper( async(req, res, next) => {
    const { id: internshipID } = req.params;
    
    const internship = await Internship.findOneAndUpdate({ _id: internshipID }, req.body, {
        new: true,
        runValidators: true
    });

    if(!internship) {
        return next(`No internship with id: ${internshipID}`, 404);
    }

    res.status(200).json({ internship });
});

module.exports = {
    getAllInternships,
    createIntership,
    getInternship,
    deleteInternship,
    updateIntership
}