import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    fname:Yup.string().min(2).max(20).required("Please Enter Your First Name."),
    lname:Yup.string().min(2).max(20).required("Please Enter Your Last Name."),
    username:Yup.string().min(2).max(20).required("Please set a Username."),
    password:Yup.string().min(10).max(20).required("Please set your Password."),
});