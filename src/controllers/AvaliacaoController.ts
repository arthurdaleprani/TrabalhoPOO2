import { Request, Response } from 'express';
import AvaliacaoService from '../services/AvaliacaoService';
import { Prisma } from '@prisma/client';
class AvaliacaoController {
    constructor(){
    }
        async listAvaliacao(req: Request, res: Response){
        const avaliacao = await AvaliacaoService.listAvaliacoes();
        res.render('avaliações', {avaliacao:avaliacao }) 
      }

      async createAvaliacao(req: Request, res: Response){
        const dados: Prisma.AvaliacaoCreateInput = req.body;
        if( dados.id !== "" &&  dados.notaApresentacao !== 10  && dados.notaIdeia !== 10 && dados.notaProjeto !== 10){
            const newAvaliacao = await AvaliacaoService.createAvalicao(dados)
            res.status(200).json({
                status: 'ok',
                newuser: newAvaliacao
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Erro'
            })
        }

    }

      
}
export default new AvaliacaoController();