import express from 'express';

//NB!! in node.js you must add the .js on the end of the file name when importing it.
import {getPosts, createPost} from '../controllers/posts.js'

const router = express.Router();

//This is reached by going to localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPost);

export default router;