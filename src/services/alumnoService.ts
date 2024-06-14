import { PrismaClient, alumnos } from "@prisma/client";
import { IAlumno } from "../models/Alumno";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaAlumno, toPrismaAlumno } from "../mappers/alumnoMapper";

const prisma = new PrismaClient();

export const insertarAlumno = async (alumno: IAlumno) => {
    
    await prisma.alumnos.create({
        data: toPrismaAlumno(alumno)
    });
    return RESPONSE_INSERT_OK;
}

export const listarAlumnos = async () => {
    const alumnos: alumnos[] = await prisma.alumnos.findMany({
        where: {
            estado_auditoria: '1'
        }
    });
    return alumnos.map((alumno: alumnos)=> fromPrismaAlumno(alumno));
}

export const obtenerAlumno = async (idAlumno: number) => {
    console.log('alumnoService::obtenerAlumno',idAlumno);

    const alumno: alumnos =  await prisma.alumnos.findUnique({
        where: {
            id_alumno: idAlumno,
            estado_auditoria: '1'
        }
    });

    return fromPrismaAlumno(alumno);
}

export const modificarAlumno = async (idAlumno: number, alumno:IAlumno) => {
    console.log('alumnoService::modificarAlumno',idAlumno,alumno);
    await prisma.alumnos.update({
        data: toPrismaAlumno(alumno),
        where:{
            id_alumno: idAlumno
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarAlumno = async (idAlumno: number) => {
    console.log('alumnoService::eliminarAlumno',idAlumno);

    await prisma.alumnos.update({
        data: {
            estado_auditoria: '0'
        },
        where: {
            id_alumno: idAlumno
        }
    })

    /*await prisma.alumnos.delete({
        where: {
            id_alumno: idAlumno
        }
    });*/
    return RESPONSE_DELETE_OK;
}