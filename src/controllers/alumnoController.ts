import { Request, Response } from "express"


export const insertarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::insertarAlumno');
    res.send('OK');
}

export const listarAlumnos = async (req: Request, res: Response) => {
    console.log('alumnoController::listarAlumnos');
    res.send('OK');
}

export const obtenerAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::obtenerAlumno');
    res.send('OK');
}

export const modificarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::modificarAlumno');
    res.send('OK');
}

export const eliminarAlumno = async (req: Request, res: Response) => {
    console.log('alumnoController::eliminarAlumno');
    res.send('OK');
}

