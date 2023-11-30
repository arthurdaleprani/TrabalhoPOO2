import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import EstandeController from "../controllers/EstandeController";
import ControllerProfessor from "../controllers/ControllerProfessor";


const prisma = new PrismaClient();//Instancia o prisma client
const EstanteRouter = Router();//Instancia o Router

EstanteRouter.get("/avaliacao", EstandeController.listEstandes)
EstanteRouter.post("/alunos", EstandeController.createEstandes);


export default EstanteRouter;