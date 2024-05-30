import { PrismaClient } from "@prisma/client";
import { IAlumno } from "../models/Alumno";

const prisma = new PrismaClient();

export const insertarAlumno = async (alumno: IAlumno) => {
    /*prisma.alumnos.create({
        data: alumno
    });*/
}

export const listarAlumnos = async () => {
    return await prisma.alumnos.findMany();
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