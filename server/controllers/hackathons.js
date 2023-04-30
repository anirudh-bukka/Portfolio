import Hackathon from '../models/Hackathon.js';
import asyncWrapper from '../middleware/async.js';

export const getAllHackathons = asyncWrapper( async(req, res) => {
    const hackathons = await Hackathon.find({});
    res.status(200).json({ hackathons });
});

export const createHackathon = asyncWrapper( async(req, res) => {
    const hackathon = await Hackathon.create(req.body);
    res.status(201).json({ hackathon });
});

export const getHackathon = asyncWrapper( async(req, res, next) => {
    const { id: hackathonID } = req.params;
    const hackathon = await Hackathon.findOne({ _id: hackathonID });
    if(!hackathon) {
        return next(`No hackathon with this id: ${hackathonID}`, 400);
    }
    res.status(200).json({ hackathon });
});

export const deleteHackathon = asyncWrapper( async(req, res, next) => {
    const { id: hackathonID } = req.params;
    const hackathon = await Hackathon.findByIdAndDelete({ _id: hackathonID });
    if(!hackathon) {
        return next(`No hackathon with this id: ${hackathonID}`, 400);
    }
    res.status(200).json({ hackathon });
});

export const updateHackathon = asyncWrapper( async(req, res, next) => {
    const { id: hackathonID } = req.params;
    const hackathon = await Hackathon.findByIdAndUpdate({ _id: hackathonID }, req.body, { new: true });

    if(!hackathon) {
        return next(`No hackathon with this id: ${hackathonID}`, 404);
    }
    res.status(200).json({ hackathon });
});