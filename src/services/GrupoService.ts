import { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client';
const prisma = new PrismaClient()

class GrupoServices {
    constructor(){}

    async listGrupos(){
        try{
            const grupos = await prisma.grupo.findMany();
            return grupos;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createGrupos(grupo: Prisma.GrupoCreateInput){
        try{
            const newGrupos = await prisma.grupo.create({
                data: grupo
            });
            return newGrupos;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}





export default new GrupoServices();