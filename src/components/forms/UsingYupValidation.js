import * as yup from "yup";

const validation = yup.object({

    firstName : yup.string().required(), // .oneOf(["Ahmet","Burak"])
    lastName : yup.string().required(),
    email : yup.string().email().required(),
    password : yup.string().min(6).max(12).required(),
    repassword : yup.string().min(6).max(12).required().oneOf([yup.ref("password")],"Passwords must match !")
    
});

export default validation;