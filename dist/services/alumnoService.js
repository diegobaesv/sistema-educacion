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
const insertarAlumno = (alumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::insertarAlumno', alumno);
});
exports.insertarAlumno = insertarAlumno;
const listarAlumnos = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::listarAlumnos');
});
exports.listarAlumnos = listarAlumnos;
const obtenerAlumno = (idAlumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::obtenerAlumno', idAlumno);
});
exports.obtenerAlumno = obtenerAlumno;
const modificarAlumno = (idAlumno, alumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::modificarAlumno', idAlumno, alumno);
});
exports.modificarAlumno = modificarAlumno;
const eliminarAlumno = (idAlumno) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoService::eliminarAlumno', idAlumno);
});
exports.eliminarAlumno = eliminarAlumno;
//# sourceMappingURL=alumnoService.js.map