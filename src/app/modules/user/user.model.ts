import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
    id : {type: String, required: true, unique: true},
    role : {type: String, required: true},
    email : {type: String, required: true,},
    password : {type: String, required: true},
    name: {
        firstName : {type: String, required: true},
        middleName : {type: String},
        lastName : {type: String, required: true}
    },
    dateOfBirth : {type: String},
    contactNo : {type: String, required: true},
    emergencyContactNo : {type: String, required: true},
    gender: {
        type: String, 
        enum: ["male", "female" , "other"]   
    },
    presentAddress : {type: String},
    permanentAddress : {type: String},
});

// 3. create a model according to the interface & schema  //

const User = model<IUser>('User', userSchema);

export default User;