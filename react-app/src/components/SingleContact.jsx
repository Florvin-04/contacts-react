import { useState } from "react";
import "./SingleContact.css";
import Add_EditContact from "./Add_EditContact";

import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../store/contactListSlice";

function SingleContact({ id, firstName, lastName, emailAddress, middleName, mobileNumber }) {
  const dispacth = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const editValue = {
    id,
    firstName,
    lastName,
    middleName,
    mobileNumber,
    emailAddress,
  };

  const openModalEditForm = () => {
    setIsOpen(true);
  };

  const handleDeleteContact = () => {
    dispacth(deleteContact({ id }));
  };

  return (
    <>
      <Add_EditContact
        state="edit"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        editValue={editValue}
        title="Edit Contact"
      />

      <tr>
        <td>{firstName}</td>
        <td>{middleName}</td>
        <td>{lastName}</td>
        <td>{mobileNumber}</td>
        <td>{emailAddress}</td>
        <td className="buttons">
          <button
            className="edit-btn"
            onClick={openModalEditForm}
          >
            Edit
          </button>
          <button
            className="delete-btn"
            onClick={handleDeleteContact}
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default SingleContact;
