import React from "react";
import "./SingleContact.css";

function SingleContact({ firstName, lastName, emailAddress, middleName, mobileNumber }) {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{middleName}</td>
      <td>{lastName}</td>
      <td>{mobileNumber}</td>
      <td>{emailAddress}</td>
      <td className="buttons">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </td>
    </tr>
  );
}

export default SingleContact;
