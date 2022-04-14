import React from "react";
import { useFormik } from "formik";
import Mainsignin from "./Mainsignin";
import * as Yup from "yup";
import axios from "axios";
import "./Signin.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Snackbar from 'node-snackbar';
// import { useNavigate } from "react-router-dom";
// .email('email is required')
const validate = Yup.object({
  email: Yup.string().required("email is required"),
  password: Yup.string()
    .min(6, "min 6 characters or more")
    .required("required"),
});

const initialState = {
  email: "",
  password: "",
};

function Signin() {
  // let navigate = useNavigate();
  const handleSubmit = async (values, helper) => {
    helper.setSubmitting(true);

    await axios
      .post(`https://reqres.in/api/login`, {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        toast.success(response.data.token);
        // Snackbar.show({ text: response.data.token, pos: 'top-center' });
        // navigate('/home');
      })
      .catch(function (error) {
        toast.error(error.response.data.error);
        localStorage.removeItem("token");
        // Snackbar.show({ text: 'user mot found', pos: 'top-center' });
      });
    helper.setSubmitting(false);
  };
  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validate,
    onSubmit: handleSubmit,
  });

  return (
    <div className="inline-block  mt-11">
      <ToastContainer />
      <div className="flex flex-col text-left bg-gradient-to-r from-blue-500 border p-11  mx-11 ">
        <form className="flex flex-col" onSubmit={formik.handleSubmit}>
          <h1 className="text-3xl mb-5">Signin Form</h1>
          <Mainsignin
            label="Email"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors}
            touched={formik.touched}
            onBlur={formik.handleBlur}
          />
          <Mainsignin
            label="Password"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors}
            touched={formik.touched}
            onBlur={formik.handleBlur}
          />
          <button
            className="flex justify-around my-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
            type="submit"
          >
            {formik.isSubmitting ? "Loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
