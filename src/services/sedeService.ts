import { PrismaClient, sedes } from "@prisma/client";
import { ISede } from "../models/Sede";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaSede, toPrismaSede } from "../mappers/sedeMapper";

const prisma = new PrismaClient();

export const insertarSede = async (sede: ISede) => {
    
    await prisma.sedes.create({
        data: toPrismaSede(sede)
    });
    return RESPONSE_INSERT_OK;
}

export const listarSedes = async () => {
    const sedes: sedes[] = await prisma.sedes.findMany();
    return sedes.map((sede: sedes)=> fromPrismaSede(sede));
}

export const obtenerSede = async (idSede: number) => {
    console.log('sedeService::obtenerSede',idSede);

    const sede: sedes =  await prisma.sedes.findUnique({
        where: {
            id_sede: idSede
        }
    });

    return fromPrismaSede(sede);
}

export const modificarSede = async (idSede: number, sede:ISede) => {
    console.log('sedeService::modificarSede',idSede,sede);

    await prisma.sedes.update({
        data: toPrismaSede(sede),
        where:{
            id_sede: idSede
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarSede = async (idSede: number) => {
    console.log('sedeService::eliminarSede',idSede);
    await prisma.sedes.delete({
        where: {
            id_sede: idSede
        }
    });
    return RESPONSE_DELETE_OK;
}