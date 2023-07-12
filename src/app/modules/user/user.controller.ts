import express, { Request, Response, NextFunction, Application } from "express";
import {
  createUserToDB,
  getUsersByIdFromDB,
  getUsersFromDB,
} from "./user.service";

// post user
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get data from body //
  const data = req.body;
  // insert data to db //
  const user = await createUserToDB(data);

  // process response
  res.status(200).json({
    status: "success",
    data: user,
  });
};

// get all users
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: "success",
    data: users,
  });
};

// get specific user by id

export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // id will be taken as param //
  const { id } = req.params;

  const user = await getUsersByIdFromDB(id);
  res.status(200).json({
    status: "success",
    data: user,
  });
};
