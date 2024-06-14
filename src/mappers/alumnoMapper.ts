import { alumnos } from "@prisma/client"
import { IAlumno } from "../models/Alumno"

export const fromPrismaAlumno = (alumno: alumnos): any=> ({
    idAlumno: alumno.id_alumno,
    codigo: alumno.codigo,
    documentoIdentidad: alumno.documento_identidad,
    nombres: alumno.nombres,
    apellidoPaterno: alumno.apellido_paterno,
    apellidoMaterno: alumno.apellido_materno,
    correoInstitucional: alumno.correo_institucional,
    fechaNacimiento: alumno.fecha_nacimiento,
    sexo: alumno.sexo,
    direccion: alumno.direccion
});

export const toPrismaAlumno = (alumno: IAlumno): any => ({
    codigo: alumno.codigo,
    documento_identidad: alumno.documentoIdentidad,
    nombres: alumno.nombres,
    apellido_paterno: alumno.apellidoPaterno,
    apellido_materno: alumno.apellidoMaterno,
    correo_institucional: alumno.correoInstitucional,
    fecha_nacimiento: alumno.fechaNacimiento,
    sexo: alumno.sexo,
    direccion: alumno.direccion
})