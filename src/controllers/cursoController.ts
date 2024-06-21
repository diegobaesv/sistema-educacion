import { ResponseModel } from "../models/ResponseModel";
import * as cursoService from "../services/cursoService";
import { Request, Response } from "express"



export const insertarCurso = async (req: Request, res: Response) => {
    console.log('cursoController::insertarCurso');
    try {
        const response = await cursoService.insertarCurso(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarCursos = async (req: Request, res: Response) => {
    console.log('cursoController::listarCursos');
    try {
        const cursos = await cursoService.listarCursos();
        res.status(200).json(ResponseModel.success(cursos));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const obtenerCurso = async (req: Request, res: Response) => {
    console.log('cursoController::obtenerCurso');
    try {
        const { id } = req.params;
        const curso = await cursoService.obtenerCurso(Number(id))
        res.status(200).json(ResponseModel.success(curso));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarCurso = async (req: Request, res: Response) => {
    console.log('cursoController::modificarCurso');
    try {
        const { id } = req.params;
        const response = await cursoService.modificarCurso(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarCurso = async (req: Request, res: Response) => {
    console.log('cursoController::eliminarCurso');
    try {
        const { id } = req.params;
        const response = await cursoService.eliminarCurso(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}