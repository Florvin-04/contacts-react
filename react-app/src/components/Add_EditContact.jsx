import { useEffect, useRef } from "react";
import "./AddContact.css";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { addContact, editContact } from "../store/contactListSlice";

const inputs = [
  { type: "text", id: "firstName", name: "firstName", label: "First Name" },
  { type: "text", id: "middleName", name: "middleName", label: "Middle Name" },
  { type: "text", id: "lastName", name: "lastName", label: "Last Name" },
  { type: "email", id: "emailAddress", name: "emailAddress", label: "Email Address" },
  { type: "text", id: "mobileNumber", name: "mobileNumber", label: "Mobile Number" },
];

function Add_EditContact({ state, isOpen, title, setIsOpen, editValue }) {
  console.log("asd", editValue?.firstName);
  const dispacth = useDispatch();
  const modalRef = useRef();

  // form handler 'formik'
  const { values, handleSubmit, handleChange, setValues } = useFormik({
    // if edit value is true meaning edit button is cliked then the field are automatically field
    initialValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      emailAddress: "",
      mobileNumber: "",
    },
    onSubmit: (values, actions) => {
      // if add contact button is clicked add new value

      if (state === "add") {
        // I use date.now for the Id so that it could be unique because it involves milliseconds
        dispacth(addContact({ ...values, id: Date.now() }));
      }

      // if edit button is clicked edit the specified contact
      if (state === "edit") {
        dispacth(editContact({ ...values, id: editValue?.id }));
      }

      // reset the form fields
      actions.resetForm();

      //close the form modal
      setIsOpen(false);
    },
  });


// set the value of field if edit button in 
  useEffect(() => {
    if (editValue) {
      setValues({
        firstName: editValue.firstName || "",
        middleName: editValue.middleName || "",
        lastName: editValue.lastName || "",
        emailAddress: editValue.emailAddress || "",
        mobileNumber: editValue.mobileNumber || "",
      });
    }
  }, [editValue]);

  useEffect(() => {
    if (isOpen) {
      modalRef.current.showModal();
    } else {
      modalRef.current.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={modalRef}
      className="addContact-form"
    >
      <h2>{title}</h2>

      <form onSubmit={handleSubmit}>
        {inputs.map((input, idx) => {
          return (
            <div
              key={idx}
              className="input-wrapper"
            >
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
        <div className="form-footer">
          <button
            className="cancel-form"
            type="button"
            onClick={() => setIsOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="submit-form"
          >
            Submit
          </button>
        </div>
      </form>
    </dialog>
  );
}

export default Add_EditContact;
