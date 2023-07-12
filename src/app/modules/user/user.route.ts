import express from "express";
import {
  createUser,
  getAdminUsers,
  getUserById,
  getUsers,
} from "./user.controller";

const router = express.Router();

// *** inside router.get(), the controller function will be called //

// post user to DB
router.post("/create-user", createUser);

// get all users from DB
router.get("/", getUsers);

// get admin users => called on top of dynamic route ":id", if not, /admins will be called as a dynamic id //
router.get("/admins", getAdminUsers);

// get specific user by id param
router.get("/:id", getUserById);

export default router; // router is an object //
