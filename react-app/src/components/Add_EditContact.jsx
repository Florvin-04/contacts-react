import { useEffect, useRef } from "react";
import "./AddContact.css";

import { useFormik } from "formik";
import * as Yup from "yup";

import { useSelector, useDispatch } from "react-redux";
import { addContact, editContact } from "../store/contactListSlice";

const inputs = [
  { type: "text", id: "firstName", name: "firstName", label: "First Name" },
  { type: "text", id: "middleName", name: "middleName", label: "Middle Name" },
  { type: "text", id: "lastName", name: "lastName", label: "Last Name" },
  { type: "email", id: "emailAddress", name: "emailAddress", label: "Email Address" },
  { type: "text", id: "mobileNumber", name: "mobileNumber", label: "Mobile Number" },
];

function Add_EditContact({ state, isOpen, title, setIsOpen, editValue }) {
  const dispacth = useDispatch();
  const modalRef = useRef();

  // form handler 'formik'
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      firstName: editValue?.firstName || "",
      middleName: editValue?.middleName || "",
      lastName: editValue?.lastName || "",
      emailAddress: editValue?.emailAddress || "",
      mobileNumber: editValue?.mobileNumber || "",
    },
    onSubmit: (values, actions) => {
      //   event.preventDefault();
      //   console.log(values);

      if (state === "add") {
        dispacth(addContact(values));
      }

      if (state === "edit") {
        dispacth(editContact({ ...values, id: editValue?.id }));
      }

      actions.resetForm();
      console.log(isOpen);
      setIsOpen(false);
    },
  });

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
        <button type="submit">Submit</button>
      </form>
    </dialog>
  );
}

export default Add_EditContact;
