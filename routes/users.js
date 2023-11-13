import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
  getUsers,
  userRating,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* UPDATE */
router.patch("/:id", verifyToken, userRating);
router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

export default router;
