import { PrismaClient, docentes } from "@prisma/client";
import { IDocente } from "../models/Docente";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaDocente, toPrismaDocente } from "../mappers/docenteMapper";

const prisma = new PrismaClient();

export const insertarDocente = async (docente: IDocente) => {
    
    await prisma.docentes.create({
        data: toPrismaDocente(docente)
    });
    return RESPONSE_INSERT_OK;
}

export const listarDocentes = async () => {
    const docentes: docentes[] = await prisma.docentes.findMany();
    return docentes.map((docente: docentes)=> fromPrismaDocente(docente));
}

export const obtenerDocente = async (idDocente: number) => {
    console.log('docenteService::obtenerDocente',idDocente);

    const docente: docentes =  await prisma.docentes.findUnique({
        where: {
            id_docente: idDocente
        }
    });

    return fromPrismaDocente(docente);
}

export const modificarDocente = async (idDocente: number, docente:IDocente) => {
    console.log('docenteService::modificarDocente',idDocente,docente);

    await prisma.docentes.update({
        data: toPrismaDocente(docente),
        where:{
            id_docente: idDocente
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarDocente = async (idDocente: number) => {
    console.log('docenteService::eliminarDocente',idDocente);
    await prisma.docentes.delete({
        where: {
            id_docente: idDocente
        }
    });
    return RESPONSE_DELETE_OK;
}