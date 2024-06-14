import { PrismaClient, cursos } from "@prisma/client";
import { ICurso } from "../models/Curso";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";

const prisma = new PrismaClient();


export const insertarCurso = async (curso: ICurso) => {
    
    /*await prisma.cursos.create({
        data: toPrismaCarrera(carrera)
    });*/
    return RESPONSE_INSERT_OK;
}

export const listarCursos = async () => {
    const cursos: cursos[] = await prisma.cursos.findMany();
    //return cursos.map((curso: cursos)=> fromPrismaCarrera(carrera));
}

export const obtenerCurso = async (idCurso: number) => {
    const curso: cursos =  await prisma.cursos.findUnique({
        where: {
            id_curso: idCurso
        }
    });

    //return fromPrismaCarrera(carrera);
}

export const modificarCurso = async (idCurso: number, curso:ICurso) => {
    /*await prisma.cursos.update({
        data: toPrismaCarrera(carrera),
        where:{
            id_carrera: idCarrera
        }
    });*/

    return RESPONSE_UPDATE_OK;
}


export const eliminarCurso = async (idCurso: number) => {
    /*await prisma.cursos.delete({
        where: {
            id_carrera: idCarrera
        }
    });*/
    return RESPONSE_DELETE_OK;
}