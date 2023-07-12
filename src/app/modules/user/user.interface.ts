import { Model, HydratedDocument } from "mongoose";

// create an interface //
export interface IUser {
  id: string;
  role: "student";
  email: string;
  password: string;
  name: {
    firstName: string;
    middleName?: string;
    lastName: string;
  };
  dateOfBirth?: string;
  contactNo: string;
  emergencyContactNo: string;
  gender: "male" | "female" | "other";
  presentAddress: string;
  permanentAddress: string;
}

export interface IUserMethods {
  getAdminUsers(): IUser[];
}

// create an interface model that knows about "IUserMethods" //
export interface UserModel extends Model<IUser, {}, IUserMethods> {
  getAdminUsers(): Promise<HydratedDocument<IUser, IUserMethods>>;
}
