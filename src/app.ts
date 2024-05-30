/**
 * CONFIGURAR RUTAS Y CONEXION BD, ENTRE OTRAS COSAS DEL SERVICIO
 */

import express, { Application } from 'express';

import alumnoRoutes from './routes/alumnoRoutes';

const app: Application = express();

//Database

//Midlewares
app.use(express.json());

//Routes
app.use('/api/v1/alumnos',alumnoRoutes);

export default app;
