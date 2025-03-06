import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { addPosts, deletePost, getPost, getPosts, updatePosts } from '../controllers/post.controller.js';

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", verifyToken, addPosts);
router.post("/:id", verifyToken, updatePosts);
router.delete("/:id", verifyToken, deletePost);

export default router;