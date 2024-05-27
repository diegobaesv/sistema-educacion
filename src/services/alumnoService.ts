import { IAlumno } from "../models/Alumno";

export const insertarAlumno = async (alumno: IAlumno) => {
    console.log('alumnoService::insertarAlumno',alumno);
}

export const listarAlumnos = async () => {
    console.log('alumnoService::listarAlumnos');
}

export const obtenerAlumno = async (idAlumno: number) => {
    console.log('alumnoService::obtenerAlumno',idAlumno);
}

export const modificarAlumno = async (idAlumno: number, alumno:IAlumno) => {
    console.log('alumnoService::modificarAlumno',idAlumno,alumno);
}

export const eliminarAlumno = async (idAlumno: number) => {
    console.log('alumnoService::eliminarAlumno',idAlumno);
}