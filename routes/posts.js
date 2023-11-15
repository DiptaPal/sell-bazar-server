import express from "express";
import { deletePost, getFeedPosts, getPosts, getUserPosts, likePost, setLevel, updatePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.get("/dashboard", verifyToken, getPosts);

/* DELETE */
router.delete("/:id", verifyToken, deletePost);

/* UPDATE */
router.patch("/:id/level", verifyToken, setLevel);
router.patch("/:id/like", verifyToken, likePost);

export default router;
