import express from "express";
import {  updateUser, getUser, deleteUser, getAllUsers } from "../controllers/UserController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) =>{
//     res.send("User logged in");
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) =>{
//     res.send("User logged in, you can now delete");
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) =>{
//     res.send("Admin verified, you can now delete");
// })
router.put("/:id", verifyUser, updateUser);
// Delete User
router.delete("/:id", verifyUser, deleteUser);
// Get User
router.get("/:id", verifyUser, getUser);
// Get All User
router.get("/", verifyAdmin, getAllUsers);

export default router;