import express, { Request, Response, NextFunction, Application } from "express";
import {
  createUserToDB,
  getAdminUsersFromDB,
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
  const user = await createUserToDB(data); // called from service

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
  const users = await getUsersFromDB(); // called from service
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

  const user = await getUsersByIdFromDB(id); // called from service
  res.status(200).json({
    status: "success",
    data: user,
  });
};

// get admin users //

export const getAdminUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const admins = await getAdminUsersFromDB(); // called from service
  res.status(200).json({
    status: "success",
    data: admins,
  });
};
