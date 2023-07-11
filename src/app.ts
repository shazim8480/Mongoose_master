import express, { Application } from "express";
import cors from "cors";

const app : Application = express();

// Application routes //
import userRoute from "./app/modules/user/user.route";

// cors //
app.use(cors());

// parse data //
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// *** N.B as the routes are manually configured, we have to get the api as middleware by using app.use() instead of app.get() //

app.use('/api/v1/user', userRoute); // will call route

export default app;  