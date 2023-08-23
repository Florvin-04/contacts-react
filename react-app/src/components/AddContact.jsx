import { useState } from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../store/contactListSlice";

const inputs = [
  { type: "text", id: "firstName", name: "firstName", label: "First Name" },
  { type: "text", id: "middleName", name: "middleName", label: "Middle Name" },
  { type: "text", id: "lastName", name: "lastName", label: "Last Name" },
  { type: "email", id: "emailAddress", name: "emailAddress", label: "Email Address" },
  { type: "text", id: "mobileNumber", name: "mobileNumber", label: "Mobile Number" },
];

const initialValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  emailAddress: "",
  mobileNumber: "",
};

function AddContact() {
  const dispacth = useDispatch();

  // form handler 'formik'
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      //   event.preventDefault();
      //   console.log(values);
      dispacth(addContact(values));
      actions.resetForm();
    },
  });
  return (
    <dialog open>
      <h1>asd</h1>

      <form onSubmit={handleSubmit}>
        {inputs.map((input, idx) => {
          return (
            <div key={idx}>
              <label htmlFor={input.id}>{input.label}</label>
              <input
                type={input.type}
                name={input.name}
                id={input.id}
                value={values[input.id]}
                onChange={handleChange}
              />
            </div>
          );
        })}
        <button type="submit">Submit</button>
      </form>
    </dialog>
  );
}

export default AddContact;
