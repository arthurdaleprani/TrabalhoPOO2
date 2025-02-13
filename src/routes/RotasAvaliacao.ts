import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import AvaliacaoController from "../controllers/AvaliacaoController";


const prisma = new PrismaClient();//Instancia o prisma client
const AvaliacaoRouter = Router();//Instancia o Router

AvaliacaoRouter.get("/avaliacao", AvaliacaoController.listAvaliacao)
AvaliacaoRouter.post("/avaliacao", AvaliacaoController.createAvaliacao);

export default AvaliacaoRouter;