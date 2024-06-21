import { carreras } from "@prisma/client"
import { ICarrera } from "../models/Carrera"

export const fromPrismaCarrera = (carrera: carreras): any=> ({
    idCarrera: carrera.id_carrera,
    nombre: carrera.nombre,
    directorNombre: carrera.director_nombre,
    fechaCreacion: carrera.fecha_creacion
});

export const toPrismaCarrera = (carrera: ICarrera): any => ({
    id_carrera: carrera.idCarrera,
    nombre: carrera.nombre,
    director_nombre: carrera.directorNombre
})