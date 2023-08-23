import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [
    {
      id: 1,
      firstName: "John",
      middleName: "Doe",
      lastName: "Smith",
      mobileNumber: "123-456-7890",
      emailAddress: "john@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      middleName: "Mary",
      lastName: "Johnson",
      mobileNumber: "987-654-3210",
      emailAddress: "jane@example.com",
    },
    {
      id: 3,
      firstName: "Michael",
      middleName: "Robert",
      lastName: "Williams",
      mobileNumber: "555-123-4567",
      emailAddress: "michael@example.com",
    },
    {
      id: 4,
      firstName: "Emily",
      middleName: "Anne",
      lastName: "Davis",
      mobileNumber: "789-456-1230",
      emailAddress: "emily@example.com",
    },
    {
      id: 5,
      firstName: "William",
      middleName: "Henry",
      lastName: "Miller",
      mobileNumber: "111-222-3333",
      emailAddress: "william@example.com",
    },
  ],
};

export const contactListSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action) => {
      const newContact = action.payload;
      console.log(newContact);
      state.contactList = [...state.contactList, newContact];
    },

    editContact: (state, action) => {
      const id = action.payload.id;
      const updatedContact = action.payload;
      console.log(id);
      return {
        ...state,
        contactList: state.contactList.map((contact) =>
          contact.id === id ? { ...contact, ...updatedContact } : contact
        ),
      };
    },
  },
});

export const { addContact, editContact } = contactListSlice.actions;

export default contactListSlice.reducer;
