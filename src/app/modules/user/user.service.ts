import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  const user = await new User(payload);
  await user.save();
  return user;
};

// get all users from DB using Query.Prototype.find() => mongoose docs
export const getUsersFromDB = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};
