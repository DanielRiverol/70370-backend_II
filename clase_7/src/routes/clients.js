import CustomRouter from "./customRouter.js";

class ClientsRouter extends CustomRouter{
    init(){
        this.get('/',(req,res)=>{
            // res.send('Listado de clientes')
            res.sendSuccess({message:"Listado de clientes", clientes:[]})
        })
    }
} 

export default ClientsRouter