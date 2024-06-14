import { ICarrera } from "./Carrera";

export interface ICurso {
    idCurso:number;
    carrera:ICarrera;
    nombre:string;
    bloque:string;
    ciclo:string;
    malla:string;
    estadoAuditoria: string;
    fechaCreacion: Date;
    fechaModificacion: Date;
}