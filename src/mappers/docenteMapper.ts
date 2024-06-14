import { docentes } from "@prisma/client"
import { IDocente } from "../models/Docente"

export const fromPrismaDocente = (docente: docentes): any=> ({
    idDocente: docente.id_docente,
    codigo: docente.codigo,
    documentoIdentidad: docente.documento_identidad,
    nombres: docente.nombres,
    apellidoPaterno: docente.apellido_paterno,
    apellidoMaterno: docente.apellido_materno,
    correoInstitucional: docente.correo_institucional,
    fechaNacimiento: docente.fecha_nacimiento,
    sexo: docente.sexo,
    direccion: docente.direccion, 
    especialidad: docente.especialidad
});

export const toPrismaDocente = (docente: IDocente): any => ({
    id_docente: docente.idDocente,
    codigo: docente.codigo,
    documento_identidad: docente.documentoIdentidad,
    nombres: docente.nombres,
    apellido_paterno: docente.apellidoPaterno,
    apellido_materno: docente.apellidoMaterno,
    correo_institucional: docente.correoInstitucional,
    fecha_nacimiento: docente.fechaNacimiento,
    sexo: docente.sexo,
    direccion: docente.direccion,
    especialidad: docente.especialidad
})