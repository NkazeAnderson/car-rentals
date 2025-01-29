import { z } from "zod";
const baseString = z.string().trim().toLowerCase()
export const categorySchema = z.object({
    name:baseString,
    description:baseString,
    image:baseString
})

export type categoriesT = z.infer<typeof categorySchema>
