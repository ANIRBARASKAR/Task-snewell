import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
export default function Login() {
  const [passwordLength, setpasswordLength] = useState();
  const [valid, setvalid] = useState("form-control");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Enter Your Email"),
      password: yup
        .string()

        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        )
        .required("Enter Your Password"),
    }),

    onSubmit: async (values, resetForm) => {
      console.log("i'm from Login.jsx form's values", values);

      console.log(values.password.length);
      setpasswordLength(values.password.length);

      setvalid("form-control is-valid");
      resetForm();
    },
  });
  return (
    <>
      <div className="parente_div">
        <div className="chaild_div">
          <div className="container">
            <div className="row">
              <div className="d-flex">
                <div className="col-sm-4">
                  <div className="card border-0">
                    <div className="card-body">
                      <div className="mt-5">
                        <img className="mt" src="./Screenshot (24).png" alt="" />
                        <div className="d-flex gap-4">
                          <h1 className="text-primary">NSOC</h1>
                          <h1 className="text-primary">DASHBOARD</h1>
                        </div>
                        <p className="text-center offset-sm-2">
                          Murquri laybags syber world className
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4 offset-sm-4">
                  <div className="border-0 my-5">
                    <form onSubmit={formik.handleSubmit}>
                    <div className="card-header text-light text-center">
                      <strong>Login</strong>
                    </div>
                    <div className="card-body border-0">
                      <div>
                        <label for="email" className="form-label text-light">
                          <strong>Your Email</strong>
                        </label>
                        <input
                          type="text"
                          placeholder="Enter email"
                          className={
                            formik.errors.email && formik.touched.email
                              ? "form-control mt-4 is-invalid"
                              : "form-control "
                          }
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />

                        <div className="invalid-feedback">
                          {formik.errors.email}
                        </div>
                        <div className="valid-feedback">Looks good!</div>
                      </div>

                      <div className="mt-2">
                        <label for="password" className="form-label text-light">
                          <strong>Password</strong>
                        </label>
                        <input
                          type="text"
                          className={
                            formik.errors.password && formik.touched.password
                              ? "form-control is-invalid "
                              : valid
                          }
                          onChange={formik.handleChange}
                          value={formik.values.password}
                          onBlur={formik.handleBlur}
                          name="password"
                          id="password"
                          placeholder="Enter Your Password"
                        />

                        <div className="valid-feedback">valid Password</div>
                        <div className="invalid-feedback">
                          {formik.errors.password}
                        </div>
                      </div>

                      <div className="form-check mt-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="id"
                        />
                        <label
                          className="form-check-label d-flex justify-content-between text-white"
                          for="id"
                        >
                          Remember me{" "}
                          <span className="text-primary">Recover Password</span>
                        </label>
                      </div>
                      <button type="submit" className="btn btn-primary w-100 mt-3">
                        SIGN IN
                      </button>
                      <p className="text-center mt-3">
                        Dont Have Account?{" "}
                        <a className="text-light" href="#">
                          Create Account
                        </a>
                      </p>
                    </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// <div className="mt-2">
{
  /* <label htmlFor="password" className="form-label">
Password
</label>
<input
type="text"


className={
  formik.errors.password  && formik.touched.password
    ? "form-control is-invalid "
    : valid
}
onChange={formik.handleChange}
value={formik.values.password}

onBlur={formik.handleBlur}
name="password"
id="password"
placeholder="Enter Your Password"
/>
<div className="valid-feedback">valid Password</div>
<div className="invalid-feedback">
{formik.errors.password}
</div>
</div> */
}
