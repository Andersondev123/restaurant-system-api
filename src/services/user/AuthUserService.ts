import { compare } from "bcryptjs";
import prismaClient from "../../prisma/index";
import { sign } from "jsonwebtoken";

interface AuthUserServiceProps {
    email: string;
    password: string;
}
class AuthUserService {
    async execute({email, password}: AuthUserServiceProps){
        const user = await prismaClient.user.findFirst({
            where:{
                email: email,
            },
        });
        if(!user){
            throw new Error("Email/Senha é obrigatório")
        }

        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch){
            throw new Error("Email/Senha é obrigatório")
        };

        const token = sign({
            email: user.email,
            name: user.name
        }, 
        process.env.JWT_SECRET as string,
        {
            subject: user.id,
            expiresIn: "60d"
        }
        )
        return{
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            token: token,
        };
    };

};

export {AuthUserService}