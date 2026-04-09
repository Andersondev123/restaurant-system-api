import { z } from "zod"

export const createProductSchema = z.object({
    body: z.object({
        name: z.string().min(1, {message: "Nome do produto é obrigatório"}),
        price: z.string().min(1, {message: "Valor do produto é obrigatório"}).regex(/^\d+$/),description: z.string().min(1, {message: "Descrição do produto é obrigatório"}),
        category_id: z.string({message: "Categoria do produto é obrigatório"})
    }),
});

export const listProductSchema = z.object({
    query: z.object({
        disabled: z.string().optional()
    })
});

export const listProductByCategorySchema = z.object({
    query: z.object({
        category_id: z.string({message: "ID da categoria é obrigatório"}),
    }),
});