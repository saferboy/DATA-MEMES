import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


// export const createMeme = async (image: string, description: string) => {
//     return prisma.meme.create({
//         data: {
//             image,
//             description
//         }
//     })
// }

// export const findMeme = async (id: number) => {
//     return prisma.memes.findUnique({
//         where: {
//             id: id
//         }
//     })
// }
