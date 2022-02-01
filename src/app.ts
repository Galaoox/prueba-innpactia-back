import express from 'express';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';
import passportMiddleware from './middlewares/passport.middleware';
import indexRoutes from './routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

app.use(indexRoutes);

export default app;