import jwt from 'jsonwebtoken'

const secretoGuardado="holatarola"
export const generateToken =(user)=>{
    return jwt.sign({user},secretoGuardado,{expiresIn:"24h"})
}

export const authToken = (req,res,next)=>{
    const authHader= req.headers.authorization;
    if(!authHader)return res.stauts(401).send({error:"No autencicado"})
        const token=authHader.split(' ')[1]

    console.log(token);
    jwt.verify(token,secretoGuardado,(error,credentials)=>{
        if(error) return res.status(403).send({error:"No autorizado"})

            req.user= credentials.user
            next()
    })
    
}