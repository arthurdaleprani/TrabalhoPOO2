import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import ControllerAlunos from "../controllers/ControllerAlunos";


const prisma = new PrismaClient();//Instancia o prisma client
const AlunoRouter = Router();//Instancia o Router

AlunoRouter.get("/alunos", ControllerAlunos.listAlunos)
AlunoRouter.post("/alunos", ControllerAlunos.createAluno);


export default AlunoRouter;