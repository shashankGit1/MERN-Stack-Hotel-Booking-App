import express from "express";
import { createRoom, updateRoom, getRoom, deleteRoom, getAllRooms } from "../controllers/RoomController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/", (req, res) =>{
//     res.send("rooms endpoint");
// })
//Create room
router.post("/:hotelid", verifyAdmin, createRoom);
//Update Room
router.put("/:id", verifyAdmin, updateRoom);
// Delete Room
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
// Get Room
router.get("/:id", getRoom);
// Get All Rooms
router.get("/", getAllRooms);

export default router;