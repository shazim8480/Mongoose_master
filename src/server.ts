import express from "express";
import app from "./app";
import mongoose from "mongoose";

const port : Number = 4000;


async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log("Database connection successful");
        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log("Failed to connect database :(", error);
    }
  }

bootstrap();  

