import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', indexRoutes);

export default app;