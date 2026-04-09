import prismaClient from "../../prisma/index";

class ListCategoryService{
    async execute(){
        try{
            const categories = await prismaClient.category.findMany({
                select:{
                    id: true,
                    name: true,
                    createdAt: true,
                },
                orderBy:{
                    createdAt: "desc"
                }
            });

            return categories;
        }catch(error){
            console.log(error)
            throw new Error("Falha ao buscar categorias")
        }
    };
};
export {ListCategoryService};