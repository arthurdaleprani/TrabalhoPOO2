import { Aluno, Professor, Grupo, Estande, Avaliacao } from '@prisma/client';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  


  /*const professor = await prisma.professor.create({
    data: {
      id: '12',
      email: 'Jorge@hotmail.com',
      nome: 'Jorge'
    }*/
    
    const aluno = await prisma.aluno.create({
      data: {
        id: '1',
        email: 'arthur@gmail.com',
        nome: 'Arthur',
        
    
      }
    });

    const aluno2 = await prisma.aluno.create({
      data: {
        id: '2',
        email: 'caio@gmail.com',
        nome: 'Arthur',
        
      }
    });

    const Grupo = await prisma.grupo.create({
      data: {
        id:'2',
        estandeId: '2'
      }
    });

    const Grupo2 = await prisma.grupo.create({
      data: {
        id:'1',
        estandeId: '1'
      }
    });
   


    
 const estande = await prisma.estande.create({
      data: {
        id: '1',
        grupoId:'1'
      }
    });
    const estande2 = await prisma.estande.create({
      data: {
        id: '2',
        grupoId:'2'
      }
    });

    
  const avaliacao = await prisma.avaliacao.create({
    data: {
      id: '1',
      estandeId: '2',
      notaApresentacao: 10,
      notaIdeia: 10,
      notaProjeto: 10
    }
  });
  

    

  console.log("Resgistro ok");
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect()
    process.exit(1)
  });