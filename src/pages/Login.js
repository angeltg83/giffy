import React, { useEffect } from "react";
import { Formik, Form } from "formik";
import "../App.css";
import useUser from "../hooks/useUser";
import { useLocation } from "wouter";
import * as Yup from "yup";
import FormikField from "../components/FormikField";
import { Button } from "@material-ui/core";
 
const SignupSchema = Yup.object().shape({
  username: Yup.string().min(2, "Too Short!").required("Required!"),
  password: Yup.string().min(2, "Too Short!").required("Required!"),
  // email: Yup.string().email("Your mail is not valid"),
});

const Login = () => {
  const { login, isLogged, errlogin } = useUser();
  const [, navigate] = useLocation();
  useEffect(() => {
    if (isLogged) navigate("/");
  }, [isLogged, navigate]);

  const handleSubmit = (values, actions) => {
    // console.log("SUBMIT");
    console.log(values);
    login({ ...values });
  };

  return (
    <>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        // validation={validation}
        validationSchema={SignupSchema}
      >
        {({ dirty, isValid }) => (
          <Form>
            <FormikField name="username" label="Username" />
            <FormikField name="password" label="Password" type="password" />
            {errlogin ? (
              <strong>
                <br />
                <small>Error en credenciales.</small>
              </strong>
            ) : null}
            <br />
            <Button
              disabled={!dirty || !isValid}
              type="submit"
              variant="contained"
              color="primary"
            >
              Sign in
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Login;
