import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface TicketProps {
  type: string;
  quantity: number;
  price: number;
}

const initialState = {
  name: "",
  email: "",
  fullprice: 0,
  tickets: [
    {
      type: "",
      quantity: 0,
      price: 0,
    },
  ],
};

export const orderSlice = createSlice({
  name: "orderDetails",
  initialState,
  reducers: {
    updateName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updateTickets: (state, action: PayloadAction<TicketProps[]>) => {
      state.tickets = action.payload;
    },
    resetState: (state) => {
      state = initialState;
    },
  },
});

export const { updateName, updateEmail, updateTickets, resetState } =
  orderSlice.actions;

export default orderSlice.reducer;
