import express from 'express'
import cors from 'cors'
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.VITE_API_URL || 3333, ()=>{
    console.log("HTTP server running!");
});