import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import EstandeController from "../controllers/EstandeController";
import ControllerProfessor from "../controllers/ControllerProfessor";


const prisma = new PrismaClient();//Instancia o prisma client
const EstanteRouter = Router();//Instancia o Router

EstanteRouter.get("/estandes", EstandeController.listEstandes)
EstanteRouter.post("/estandes", EstandeController.createEstandes);


export default EstanteRouter;