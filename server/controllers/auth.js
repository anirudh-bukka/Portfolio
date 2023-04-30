import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const func = async(req, res) => {
    try {
        const users = await User.find();
        return (res.status(200).json({users}));
    } catch (e) {
        res.status(500).json({msg: e.message});
    }
}

export const register = async (req, res) => {
    try {
        const { nickName, email, password } = req.body;

        // const salt = await bcrypt.genSalt();
        // const passwordHash = await bcrypt.hash(password, salt);

        // const newUser = new User({ nickName, email, password: passwordHash }) 
        const newUser = new User({ nickName, email, password }) 

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}

// LOGGING IN
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if(!user) return res.status(400).json({ msg: "User does not exist." });

        // const isMatch = await bcrypt.compare(password, user.password);
        // if(!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({ token, user });
        res.status(200).json({ token });

    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

