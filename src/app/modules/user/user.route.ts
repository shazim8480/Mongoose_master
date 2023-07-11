import express from "express";
import { createUser, getUsers } from "./user.controller";

const router = express.Router();

// *** inside router.get(), the controller function will be called //

// post user to DB
router.post("/create-user", createUser);

// get all users from DB
router.get("/", getUsers);

export default router; // router is an object //
