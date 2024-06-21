import { carreras, cursos } from "@prisma/client";
import { ICurso } from "../models/Curso";
import { fromPrismaCarrera } from "./carreraMapper";

export const fromPrismaCurso = (curso: cursos, carrera: carreras): any=> ({
    idCurso:curso.id_curso,
    carrera: fromPrismaCarrera(carrera),
    nombre: curso.nombre,
    bloque: curso.bloque,
    ciclo: curso.ciclo,
    malla: curso.malla,
    fechaCreacion: curso.fecha_creacion
});

export const toPrismaCurso = (curso: ICurso): any => ({
    id_curso:curso.idCurso,
    id_carrera: curso.carrera.idCarrera,
    nombre: curso.nombre,
    bloque: curso.bloque,
    ciclo: curso.ciclo,
    malla: curso.malla
})