import { Request, Response } from "express"
import * as alumnoService from "../services/alumnoService";

export const insertarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::insertarAlumno');
    await alumnoService.insertarAlumno(req.body);
    res.send('OK');
}

export const listarAlumnos = async (req: Request, res: Response) => {
    console.log('alumnoController::listarAlumnos');
    console.log('hola2');
    await alumnoService.listarAlumnos();
    res.send('OK');
}

export const obtenerAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::obtenerAlumno');
    const { id } = req.params;
    await alumnoService.obtenerAlumno(Number(id))
    res.send('OK');
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

