import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import env from "../config/env.config.js";

const userSchema = new mongoose.Schema(
    {

    },
    {
        timestamps: true,
    }
)