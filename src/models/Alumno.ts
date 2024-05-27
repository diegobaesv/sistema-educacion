export interface IAlumno {
    idAlumno: number;
    codigo: string;
    documentoIdentidad: string;
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    correoInstitucional: string;
    fechaNacimiento: Date;
    sexo: string;
    direccion:string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}