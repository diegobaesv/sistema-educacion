import Joi from "joi";

const alumnoBaseSchema = {
    codigo: Joi.string()
        .alphanum()
        .max(10),
    documentoIdentidad: Joi.string()
        .pattern(new RegExp('^[0-9]{8}$'))
        .max(8)
        .min(8),
    nombres: Joi.string()
        .max(100),
    apellidoPaterno: Joi.string()
        .max(100),
    apellidoMaterno: Joi.string()
        .max(100),
    correoInstitucional: Joi.string()
        .email()
        .max(150),
    fechaNacimiento: Joi.string()
        .isoDate(),
    sexo: Joi.string()
        .max(1),
    direccion: Joi.string()
        .max(1024)
};

export const insertarAlumnoSchema = Joi.object({
    ...alumnoBaseSchema,
    codigo: alumnoBaseSchema.codigo.required(),
    documentoIdentidad: alumnoBaseSchema.documentoIdentidad.required(),
    nombres: alumnoBaseSchema.nombres.required(),
    apellidoPaterno: alumnoBaseSchema.apellidoPaterno.required(),
    apellidoMaterno: alumnoBaseSchema.apellidoMaterno.required(),
    correoInstitucional: alumnoBaseSchema.correoInstitucional.required(),
    fechaNacimiento: alumnoBaseSchema.fechaNacimiento.required(),
    sexo: alumnoBaseSchema.sexo.required()
});

export const modificarAlumnoSchema = Joi.object({
    ...alumnoBaseSchema
});


