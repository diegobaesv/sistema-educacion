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
const insertarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoController::insertarAlumno');
    res.send('OK');
});
exports.insertarAlumno = insertarAlumno;
const listarAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoController::listarAlumnos');
    res.send('OK');
});
exports.listarAlumnos = listarAlumnos;
const obtenerAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoController::obtenerAlumno');
    res.send('OK');
});
exports.obtenerAlumno = obtenerAlumno;
const modificarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoController::modificarAlumno');
    res.send('OK');
});
exports.modificarAlumno = modificarAlumno;
const eliminarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoController::eliminarAlumno');
    res.send('OK');
});
exports.eliminarAlumno = eliminarAlumno;
//# sourceMappingURL=alumnoController.js.map