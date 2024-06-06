import { PrismaClient } from "@prisma/client";
import { IAlumno } from "../models/Alumno";

const prisma = new PrismaClient();

export const insertarAlumno = async (alumno: IAlumno) => {
    await prisma.alumnos.create({
        data: {
            codigo: alumno.codigo,
            documento_identidad: alumno.documentoIdentidad,
            nombres: alumno.nombres,
            apellido_paterno: alumno.apellidoPaterno,
            apellido_materno: alumno.apellidoMaterno,
            correo_institucional: alumno.correoInstitucional,
            fecha_nacimiento: alumno.fechaNacimiento,
            sexo: alumno.sexo,
            direccion: alumno.direccion
        }
    });
    return {respuesta:'OK'};
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