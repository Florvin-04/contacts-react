import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [
    {
      id: 1,
      firstName: "John",
      middleName: "Doe",
      lastName: "Smith",
      mobileNumber: "23145617890",
      emailAddress: "john@example.com",
    },
    {
      id: 2,
      firstName: "Jane",
      middleName: "Mary",
      lastName: "Johnson",
      mobileNumber: "87165413210",
      emailAddress: "jane@example.com",
    },
    {
      id: 3,
      firstName: "Michael",
      middleName: "Robert",
      lastName: "Williams",
      mobileNumber: "55112314567",
      emailAddress: "michael@example.com",
    },
    {
      id: 4,
      firstName: "Emily",
      middleName: "Anne",
      lastName: "Davis",
      mobileNumber: "89145611230",
      emailAddress: "emily@example.com",
    },
    {
      id: 5,
      firstName: "William",
      middleName: "Henry",
      lastName: "Miller",
      mobileNumber: "11122213333",
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

      return {
        contactList: [...state.contactList, newContact],
      };
    },

    editContact: (state, action) => {
      const id = action.payload.id;
      const updatedContact = action.payload;
      return {
        contactList: state.contactList.map((contact) =>
          contact.id === id ? { ...contact, ...updatedContact } : contact
        ),
      };
    },

    deleteContact: (state, action) => {
      const id = action.payload.id;

      return {
        contactList: state.contactList.filter((contact) => contact.id !== id),
      };
    },
  },
});

export const { addContact, editContact, deleteContact } = contactListSlice.actions;

export default contactListSlice.reducer;
