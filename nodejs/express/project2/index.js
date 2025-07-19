import express from 'express';
import { routes } from './routes/employeeRoutes.js';

const app = express();
const port = 4000;

routes(app);

app.listen(port, () => {
    console.log(`server started and running here http://localhost:${port}`);
})