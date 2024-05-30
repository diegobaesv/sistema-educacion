import { eliminarAlumno, insertarAlumno, listarAlumnos, modificarAlumno, obtenerAlumno } from "../controllers/alumnoController";
import express from 'express';

const router = express.Router();

router.post('/',insertarAlumno);
router.get('/',listarAlumnos);
router.get('/:id',obtenerAlumno);
router.put('/:id',modificarAlumno);
router.delete('/:id',eliminarAlumno);



export default router;