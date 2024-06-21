import { perfiles } from "@prisma/client"
import { IPerfil } from "../models/Perfil"

export const fromPrismaPerfil = (perfil: perfiles): any=> ({
    idPerfil: perfil.id_perfil,
    descripcion: perfil.descripcion,
    fechaCreacion: perfil.fecha_creacion
});

export const toPrismaPerfil = (perfil: IPerfil): any => ({
    id_perfil: perfil.idPerfil,
    descripcion: perfil.descripcion
})