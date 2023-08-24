import { useState } from "react";
import "./App.css";
import SingleContact from "./components/SingleContact";
import Add_EditContact from "./components/Add_EditContact";

import { useSelector } from "react-redux";

import { tableHead } from "./sampleData";

function App() {
  const { contactList } = useSelector((state) => state.contact);

  // open the form using the add contact button
  const [isOpen, setIsOpen] = useState(false);

  const openModalAddContact = () => {
    setIsOpen(true);
  };

  // onChange validation on field form will only occur when the input field is already validated

  // if the user types for the first time, the field will not validate the input
  // if the user gets out if the field or submit the form thats the only time the validation is performed
  // and also after that onChange validation will also be triggered

  return (
    <div className="app">
      <Add_EditContact
        state="add"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Add Contact"
      />
      <button
        className="add-contact-btn"
        onClick={openModalAddContact}
      >
        Add Contact
      </button>
      <table className="contact-List">
        <thead className="table-head">
          <tr>
            {tableHead.map((header, idx) => {
              return (
                <th
                  // only the last field in the table header will span in 2
                  colSpan={idx === tableHead.length - 1 ? "2" : "1"}
                  key={idx}
                >
                  {header.name}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody className="table-body">
          {contactList.map((list, idx) => {
            return (
              <SingleContact
                key={idx}
                {...list}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
