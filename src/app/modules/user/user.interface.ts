// create an interface //
export interface IUser {
    id : string;
    role: "student";
    email: string;
    password: string;
    name:{
        firstName : string;
        middleName? : string;    
        lastName : string;
    },
    dateOfBirth? : string;
    contactNo: string;
    emergencyContactNo : string;
    gender: "male" | "female" | "other";
    presentAddress : string;
    permanentAddress: string;

}