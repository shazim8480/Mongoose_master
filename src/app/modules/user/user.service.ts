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

// get a specific user by id //
export const getUsersByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  // const user = await User.findOne({ id: payload }); // id itself is the payload

  // *** field filtering //
  const user = await User.findOne(
    { id: payload },
    { role: 1, name: 1, email: 1, contactNo: 1 }
  );
  return user;
};

// get all users who are admin

export const getAdminUsersFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
