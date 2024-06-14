import { PrismaClient, carreras } from "@prisma/client";
import { ICarrera } from "../models/Carrera";
import { RESPONSE_DELETE_OK, RESPONSE_INSERT_OK, RESPONSE_UPDATE_OK } from "../shared/constants";
import { fromPrismaCarrera, toPrismaCarrera } from "../mappers/carreraMapper";

const prisma = new PrismaClient();

export const insertarCarrera = async (carrera: ICarrera) => {
    
    await prisma.carreras.create({
        data: toPrismaCarrera(carrera)
    });
    return RESPONSE_INSERT_OK;
}

export const listarCarreras = async () => {
    const carreras: carreras[] = await prisma.carreras.findMany();
    return carreras.map((carrera: carreras)=> fromPrismaCarrera(carrera));
}

export const obtenerCarrera = async (idCarrera: number) => {
    console.log('carreraService::obtenerCarrera',idCarrera);

    const carrera: carreras =  await prisma.carreras.findUnique({
        where: {
            id_carrera: idCarrera
        }
    });

    return fromPrismaCarrera(carrera);
}

export const modificarCarrera = async (idCarrera: number, carrera:ICarrera) => {
    console.log('carreraService::modificarCarrera',idCarrera,carrera);

    await prisma.carreras.update({
        data: toPrismaCarrera(carrera),
        where:{
            id_carrera: idCarrera
        }
    });

    return RESPONSE_UPDATE_OK;
}


export const eliminarCarrera = async (idCarrera: number) => {
    console.log('carreraService::eliminarCarrera',idCarrera);
    await prisma.carreras.delete({
        where: {
            id_carrera: idCarrera
        }
    });
    return RESPONSE_DELETE_OK;
}