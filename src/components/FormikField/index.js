import { TextField } from "@material-ui/core";
import React from "react";
import { Field, ErrorMessage } from "formik";

import "./FormikField.css";
interface FormikFieldProps {
  label: String;
  name: String;
  type?: String;
}
const FormikField: React.FC<FormikFieldProps> = ({
  label,
  name,
  type = "text",
}) => {
  return (
        <div className="FormikField">
          <Field
            required
            as={TextField}
            label={label}
            name={name}
            autoComplete="off"
            type={type}
            fullWidth
            // helperText="Error 1"
            helperText={<ErrorMessage name={name} />}
          />
        </div>
     
  );
};

export default FormikField;
