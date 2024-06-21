import express from 'express';
import { eliminarCurso, insertarCurso, listarCursos, modificarCurso, obtenerCurso } from '../controllers/cursoController';

const router = express.Router();

router.post('/',insertarCurso);
router.get('/',listarCursos);
router.get('/:id',obtenerCurso);
router.put('/:id',modificarCurso);
router.delete('/:id',eliminarCurso);

export default router;