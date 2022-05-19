import express from "express";
import { createHotel, updateHotel, getHotel, deleteHotel, getAllHotels } from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
// CREATE Hotel
router.post("/", verifyAdmin, createHotel );
// Update Hotel
router.put("/:id", verifyAdmin, updateHotel);
// Delete Hotel
router.delete("/:id", verifyAdmin,deleteHotel);
// Get Hotel
router.get("/:id", getHotel);
// Get All Hotels
router.get("/", getAllHotels);

export default router;