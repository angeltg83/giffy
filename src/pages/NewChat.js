import React from "react";
import "../App.css";
import { Link } from "wouter";
// import { Formik, Form } from "formik";
// import useUser from "../hooks/useUser";
// import * as Yup from "yup";
// import FormikField from "../components/FormikField";
// import { Button } from "@material-ui/core";


const NewChat = () => {
  const [roomName, setRoomName] = React.useState("abc");

  const handleRoomNameChange = (event) => {
      console.log("event.target.value ",event.target.value)
      setRoomName(event.target.value);

    };
    
    //   const { login, isLogged, errlogin } = useUser();
  //   const handleSubmit = (values, actions) => {
  //     // console.log("SUBMIT");
  //     console.log(values);
  //     login({ ...values });
  //   };

  return (
    <>
        <input
        type="text"
        placeholder="Room"
        value={roomName}
        onChange={handleRoomNameChange}
        // className="text-input-field"
      />
      <Link to={`/chat/${roomName}`}>
        Join room!!
      </Link>

    </>
  );
};

export default NewChat;
