"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const alumnoService = __importStar(require("../services/alumnoService"));
const insertarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoController::insertarAlumno');
    yield alumnoService.insertarAlumno(req.body);
    res.send('OK');
});
exports.insertarAlumno = insertarAlumno;
const listarAlumnos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const alumnos = yield alumnoService.listarAlumnos();
    res.status(200).json(alumnos);
});
exports.listarAlumnos = listarAlumnos;
const obtenerAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoController::obtenerAlumno');
    const { id } = req.params;
    yield alumnoService.obtenerAlumno(Number(id));
    res.send('OK');
});
exports.obtenerAlumno = obtenerAlumno;
const modificarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoController::modificarAlumno');
    const { id } = req.params;
    yield alumnoService.modificarAlumno(Number(id), req.body);
    res.send('OK');
});
exports.modificarAlumno = modificarAlumno;
const eliminarAlumno = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('alumnoController::eliminarAlumno');
    const { id } = req.params;
    yield alumnoService.eliminarAlumno(Number(id));
    res.send('OK');
});
exports.eliminarAlumno = eliminarAlumno;
//# sourceMappingURL=alumnoController.js.map