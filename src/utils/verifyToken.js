import jwt from "jsonwebtoken";
import { createError } from "./error.js";


export const verifyToken = (req,res,next)=>{

    const token = req.cookies.access_token;

    console.log("Verificando token");

    // Verificar se o token existe
    if (!token) {
        return next(createError(401, "Token de acesso ausente"));
    }

    // Decodificar o token e imprimir os dados
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) {
            return next(createError(403, "Token is not valid"));
        }
        console.log("Dados do token do usuario logado:", user);
        // Você pode acessar os dados do token em 'decoded'
        // Por exemplo: decoded.userId, decoded.username, etc.
        // Se desejar, você pode passar os dados decodificados para o próximo middleware
        req.user = user;
       
        next();
    });


}


export const verifyUser = (req,res,next)=>{

    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){

            console.log("Passou",req.user.id)
            next();

        }else{
            console.log("nao passou",req.user.id)
            return next(createError(403,"You are not authorized to remove this content!!"))
        }
    })
}