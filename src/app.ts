/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */

import express, { Application } from 'express';

import alumnoRoutes from './routes/alumnoRoutes';
import docenteRoutes from './routes/docenteRoutes';
import carreraRoutes from './routes/carreraRoutes';
import sedeRoutes from './routes/sedeRoutes';
import perfilRoutes from './routes/perfilRoutes';

const app: Application = express();

//Database

//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1/alumnos',alumnoRoutes);
app.use('/api/v1/docentes',docenteRoutes);
app.use('/api/v1/carreras',carreraRoutes);
app.use('/api/v1/sedes',sedeRoutes);
app.use('/api/v1/perfiles',perfilRoutes);

export default app;

