import { z } from "zod"

export const createUserSchema = z.object({
    body: z.object({
        name: z.string({message: "Nome inválido"}).min(3, {message: "Mínimo de 3 letras"}),
        email: z.email({message: "Email iválido"}),
        password: z.
        string({message: "Senha obrigatória"})
        .min(6, {message: "Mínimo de 6 caracteres"})
    })
});

export const authUserSchema = z.object({
    body: z.object({
        email: z.email({message: "Email iválido"}),
        password: z
        .string({message: "A senha é obrigatória"})
        .min(1, {message: "A senha é obrigatória"}),
    })
});



