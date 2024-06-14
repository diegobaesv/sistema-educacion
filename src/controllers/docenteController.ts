import { Request, Response } from "express"
import * as docenteService from "../services/docenteService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarDocente = async (req: Request, res: Response) => {
    console.log('docenteController::insertarDocente');
    try {
        const response = await docenteService.insertarDocente(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarDocentes = async (req: Request, res: Response) => {
    console.log('docenteController::listarDocentes');
    try {
        const docentes = await docenteService.listarDocentes();
        res.status(200).json(ResponseModel.success(docentes));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerDocente = async (req: Request, res: Response) => {
    console.log('docenteController::obtenerDocente');
    try {
        const { id } = req.params;
        const docente = await docenteService.obtenerDocente(Number(id))
        res.status(200).json(ResponseModel.success(docente));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarDocente = async (req: Request, res: Response) => {
    console.log('docenteController::modificarDocente');
    try {
        const { id } = req.params;
        const response = await docenteService.modificarDocente(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarDocente = async (req: Request, res: Response) => {
    console.log('docenteController::eliminarDocente');
    try {
        const { id } = req.params;
        const response = await docenteService.eliminarDocente(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

