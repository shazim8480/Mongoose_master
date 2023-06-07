import express, { Request, Response, NextFunction, Application } from "express";
import cors from "cors";

const app : Application = express();

// cors //
app.use(cors());

app.get('/', (req : Request, res: Response, next: NextFunction) => {
    res.send('Hello World!');
    next();
});

export default app;  