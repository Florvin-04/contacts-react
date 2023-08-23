import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contactList: [
    {
      firstName: "John",
      middleName: "Doe",
      lastName: "Smith",
      mobileNumber: "123-456-7890",
      emailAddress: "john@example.com",
    },
    {
      firstName: "Jane",
      middleName: "Mary",
      lastName: "Johnson",
      mobileNumber: "987-654-3210",
      emailAddress: "jane@example.com",
    },
    {
      firstName: "Michael",
      middleName: "Robert",
      lastName: "Williams",
      mobileNumber: "555-123-4567",
      emailAddress: "michael@example.com",
    },
    {
      firstName: "Emily",
      middleName: "Anne",
      lastName: "Davis",
      mobileNumber: "789-456-1230",
      emailAddress: "emily@example.com",
    },
    {
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
  },
});

export const { addContact } = contactListSlice.actions;

export default contactListSlice.reducer;
