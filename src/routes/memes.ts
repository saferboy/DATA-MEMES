import { Router } from "express";
import { upload } from "@middleware/upload";
import { createValidator } from "express-joi-validation"
import optimizeAndSave from '@middleware/optimazeImage'
import createMeme from "@controller/meme/createMeme";
import createComment from "@controller/comment/createComment";
import findComment from "@controller/comment/findComment";

import { CommentBody, memeBody } from "../joi.schema";

const validator = createValidator()

const router = Router()

    .post('/', upload.single('file'), validator.body(memeBody), createMeme)

    .post('/:id/comment', validator.body(CommentBody), createComment)
    .get('/:memeId/comment', findComment)

export default router


// router.post('/meme', upload.single('image'), optimizeAndSave, createMeme);