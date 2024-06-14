import { Request, Response } from "express"
import * as carreraService from "../services/carreraService";
import { ResponseModel } from "../models/ResponseModel";

export const insertarCarrera = async (req: Request, res: Response) => {
    console.log('carreraController::insertarCarrera');
    try {
        const response = await carreraService.insertarCarrera(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarCarreras = async (req: Request, res: Response) => {
    console.log('carreraController::listarCarreras');
    try {
        const carreras = await carreraService.listarCarreras();
        res.status(200).json(ResponseModel.success(carreras));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerCarrera = async (req: Request, res: Response) => {
    console.log('carreraController::obtenerCarrera');
    try {
        const { id } = req.params;
        const carrera = await carreraService.obtenerCarrera(Number(id))
        res.status(200).json(ResponseModel.success(carrera));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarCarrera = async (req: Request, res: Response) => {
    console.log('carreraController::modificarCarrera');
    try {
        const { id } = req.params;
        const response = await carreraService.modificarCarrera(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarCarrera = async (req: Request, res: Response) => {
    console.log('carreraController::eliminarCarrera');
    try {
        const { id } = req.params;
        const response = await carreraService.eliminarCarrera(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

