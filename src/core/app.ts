import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerOptions from './swagger-config';
import { elevatorRouter } from '../modules/elevator';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

const specs = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/elevators', elevatorRouter);

export default app;
