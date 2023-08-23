import "./App.css";
import SingleContact from "./components/SingleContact";
import AddContact from "./components/AddContact";

import { useSelector } from "react-redux";

import { tableHead } from "./sampleData";

function App() {
  const { contactList } = useSelector((state) => state.contact);

  return (
    <div className="app">
      <AddContact />
      <button className="add-contact-btn">Add Contact</button>
      <table className="contact-List">
        <thead className="table-head">
          <tr>
            {tableHead.map((header, idx) => {
              return (
                <th
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
