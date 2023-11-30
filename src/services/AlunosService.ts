import { PrismaClient } from '@prisma/client'
import { Prisma } from '@prisma/client';
import { NOMEM } from 'dns';
const prisma = new PrismaClient()

class AlunosServices {
    constructor(){}

    async listAlunos(){
        try{
            const alunos = await prisma.aluno.findMany();
            return alunos;
        }catch(error){
            console.log(error);
            return null;
        }
    }



    async createAluno(aluno: Prisma.AlunoCreateInput){
        try{
            const newAluno = await prisma.aluno.create({
                data: aluno
            });
            return newAluno;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}




export default new AlunosServices();