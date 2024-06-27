import { Request, Response } from "express"
import * as alumnoService from "../services/alumnoService";
import { ResponseModel } from "../models/ResponseModel";
import { insertarAlumnoSchema, modificarAlumnoSchema } from "../schemas/alumnoSchema";

export const insertarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::insertarAlumno');
    try {
        const { error } = insertarAlumnoSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }
        const response = await alumnoService.insertarAlumno(req.body);
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const listarAlumnos = async (req: Request, res: Response) => {
    console.log('alumnoController::listarAlumnos');
    try {
        const alumnos = await alumnoService.listarAlumnos();
        res.status(200).json(ResponseModel.success(alumnos));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
    
}

export const obtenerAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::obtenerAlumno');
    try {
        const { id } = req.params;
        const alumno = await alumnoService.obtenerAlumno(Number(id))
        res.status(200).json(ResponseModel.success(alumno));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const modificarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::modificarAlumno');
    try {
        const { id } = req.params;
        const { error } = modificarAlumnoSchema.validate(req.body);
        if(error){
            console.error(error.message);
            res.status(400).json(ResponseModel.error(error.message,400));
            return;
        }
        const response = await alumnoService.modificarAlumno(Number(id),req.body)
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

export const eliminarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::eliminarAlumno');
    try {
        const { id } = req.params;
        const response = await alumnoService.eliminarAlumno(Number(id));
        res.status(200).json(ResponseModel.success(null,response));
    } catch (error) {
        console.error(error.message);
        res.status(500).json(ResponseModel.error(error.message));
    }
}

