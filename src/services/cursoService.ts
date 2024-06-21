import { PrismaClient, cursos } from "@prisma/client";
import { ICurso } from "../models/Curso";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaCurso, toPrismaCurso } from "../mappers/cursoMapper";

const prisma = new PrismaClient();


export const insertarCurso = async (curso: ICurso) => {
    await prisma.cursos.create({
        data: toPrismaCurso(curso)
    });
    return RESPONSE_INSERT_OK;
}

export const listarCursos = async () => {
    const cursos: any[] = await prisma.cursos.findMany({
        include: {
            carreras: true
        }
    });
    console.log('cursoService::cursos',cursos);
    return cursos.map((curso: any)=> fromPrismaCurso(curso, curso.carreras));
}

export const obtenerCurso = async (idCurso: number) => {
    const curso: any =  await prisma.cursos.findUnique({
        where: {
            id_curso: idCurso
        },
        include: {
            carreras: true
        }
    });
    return fromPrismaCurso(curso, curso.carreras);
}

export const modificarCurso = async (idCurso: number, curso:ICurso) => {
    await prisma.cursos.update({
        data: toPrismaCurso(curso),
        where:{
            id_curso: idCurso
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarCurso = async (idCurso: number) => {
    await prisma.cursos.delete({
        where: {
            id_curso: idCurso
        }
    });
    return RESPONSE_DELETE_OK;
}