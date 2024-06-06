import { Request, Response } from "express"
import * as alumnoService from "../services/alumnoService";

export const insertarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::insertarAlumno');
    const response = await alumnoService.insertarAlumno(req.body);
    res.status(200).json(response);
}

export const listarAlumnos = async (req: Request, res: Response) => {
    const alumnos = await alumnoService.listarAlumnos();
    res.status(200).json(alumnos);
}

export const obtenerAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::obtenerAlumno');
    const { id } = req.params;
    const alumno = await alumnoService.obtenerAlumno(Number(id))
    res.status(200).json(alumno);
}

export const modificarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::modificarAlumno');
    const { id } = req.params;
    await alumnoService.modificarAlumno(Number(id),req.body)
    res.send('OK');
}

export const eliminarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::eliminarAlumno');
    const { id } = req.params;
    await alumnoService.eliminarAlumno(Number(id));
    res.send('OK');
}

