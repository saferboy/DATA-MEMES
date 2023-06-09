import { Request, Response, NextFunction } from "express";
import { findMeme } from "@service/meme.service";

export default async (req: Request, res: Response, next: NextFunction) => {
    try {

        const id = +req.params.id
        const find = await findMeme(id)

        if(!find) {
            return res.status(404).json({
                message: `Meme not found by this ${id}`
            })
        }

        return res.status(201).json({
            id: find.id,
            author: {
                id: find.author.id,
                nickname: find.author.nickname,
                avatar: find.author.avatar
            },
            createdAt: find.createdAt,
            description: find.description,
            thumnail: find.thumbnail,
            image: find.image,
            likes: find._count.Like,
            comments: find._count.Comment
        })

    } catch (error) {
        next(error)
    }
}