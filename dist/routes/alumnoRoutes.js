"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alumnoController_1 = require("../controllers/alumnoController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/', alumnoController_1.insertarAlumno);
router.get('/', alumnoController_1.listarAlumnos);
router.get('/:id', alumnoController_1.obtenerAlumno);
router.put('/:id', alumnoController_1.modificarAlumno);
router.delete('/:id', alumnoController_1.eliminarAlumno);
exports.default = router;
//# sourceMappingURL=alumnoRoutes.js.map