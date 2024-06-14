"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarAlumno = exports.modificarAlumno = exports.obtenerAlumno = exports.listarAlumnos = exports.insertarAlumno = void 0;
const client_1 = require("@prisma/client");
const constants_1 = require("../shared/constants");
const alumnoMapper_1 = require("../mappers/alumnoMapper");
const prisma = new client_1.PrismaClient();
const insertarAlumno = (alumno) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.alumnos.create({
        data: (0, alumnoMapper_1.toPrismaAlumno)(alumno)
    });
    return constants_1.RESPONSE_INSERT_OK;
});
exports.insertarAlumno = insertarAlumno;
const listarAlumnos = () => __awaiter(void 0, void 0, void 0, function* () {
    const alumnos = yield prisma.alumnos.findMany();
    return alumnos.map((alumno) => (0, alumnoMapper_1.fromPrismaAlumno)(alumno));
});
exports.listarAlumnos = listarAlumnos;
const obtenerAlumno = (idAlumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::obtenerAlumno', idAlumno);
    const alumno = yield prisma.alumnos.findUnique({
        where: {
            id_alumno: idAlumno
        }
    });
    return (0, alumnoMapper_1.fromPrismaAlumno)(alumno);
});
exports.obtenerAlumno = obtenerAlumno;
const modificarAlumno = (idAlumno, alumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::modificarAlumno', idAlumno, alumno);
    yield prisma.alumnos.update({
        data: (0, alumnoMapper_1.toPrismaAlumno)(alumno),
        where: {
            id_alumno: idAlumno
        }
    });
    return constants_1.RESPONSE_UPDATE_OK;
});
exports.modificarAlumno = modificarAlumno;
const eliminarAlumno = (idAlumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::eliminarAlumno', idAlumno);
    yield prisma.alumnos.delete({
        where: {
            id_alumno: idAlumno
        }
    });
    return constants_1.RESPONSE_DELETE_OK;
});
exports.eliminarAlumno = eliminarAlumno;
//# sourceMappingURL=alumnoService.js.map