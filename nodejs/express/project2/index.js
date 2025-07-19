import express from 'express';
import { routes } from './routes/employeeRoutes.js';
import bodyParser from 'body-parser';

const app = express();
const port = 4000;
app.use(bodyParser.json())
routes(app);

app.listen(port, () => {
    console.log(`server started and running here http://localhost:${port}`);
})