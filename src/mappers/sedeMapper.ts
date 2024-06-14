import { sedes } from "@prisma/client"
import { ISede } from "../models/Sede"

export const fromPrismaSede = (sede: sedes): any=> ({
    idSede: sede.id_sede,
    nombre: sede.nombre,
    departamento: sede.departamento,
    provincia: sede.provincia,
    distrito: sede.distrito,
    direccion: sede.direccion
});

export const toPrismaSede = (sede: ISede): any => ({
    id_sede: sede.idSede,
    nombre: sede.nombre,
    departamento: sede.departamento,
    provincia: sede.provincia,
    distrito: sede.distrito,
    direccion: sede.direccion
})