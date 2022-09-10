import {useFormik} from "formik";
import validation from "./UsingYupValidation";

export default function UsingFormik(){

    const formik = useFormik({
        
        initialValues : {
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            repassword : "" },

        onSubmit : values => {
            console.log(values);
        },
        validationSchema : validation,
    });
    return(
        <div>

        <div className="col">
            <h1>Using Formik</h1>
            <hr />
         </div>

         <div className="row mb-3">
            <div className="col-4 offset-4">

                <form onSubmit = {formik.handleSubmit}>

                <div className="mb-2">
                <label htmlFor="firstName" className="form-label" > First Name : </label>
                    <input type="text" id="firstName" name="firstName" placeholder="Ahmet" className="form-control" value={ formik.values.firstName } onChange={formik.handleChange}/>
                    <span className=" text-danger small "> {formik.errors.firstName}</span>
                </div>

                <div className="mb-2">
                <label htmlFor="lastName" className="form-label" > Last Name : </label>
                    <input type="text" id="lastName" name="lastName" placeholder="AKAN" className="form-control" value={ formik.values.lastName } onChange={formik.handleChange}/>
                    <div className=" text-danger small "> {formik.errors.lastName}</div>
                </div>

                <div className="mb-2">
                <label htmlFor="email" className="form-label" > E-mail : </label>
                    <input type="email" id="email" name="email" placeholder="ahmet@akan.com.tr" className="form-control" value={ formik.values.email } onChange={formik.handleChange}/>
                    <div className=" text-danger small "> {formik.errors.email}</div>
                </div>

                <div className="mb-2">
                <label htmlFor="password" className="form-label" > Password : </label>
                    <input type="password" id="password" name="password" placeholder="*******" className="form-control" value={ formik.values.password } onChange={formik.handleChange}/>
                    <div className="badge text-danger small "> {formik.errors.password}</div>
                </div>

                <div className="mb-2">
                <label htmlFor="repassword" className="form-label" > Re-Password : </label>
                    <input type="password" id="repassword" name="repassword" placeholder="*******" className="form-control" value={ formik.values.repassword } onChange={formik.handleChange}/>
                    <div className=" text-danger small "> {formik.errors.repassword}</div>
                </div>

                <div className="mb-2 text-center">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>

                </form>
            </div>
         </div>

        </div>
    )
}