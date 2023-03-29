import { createSlice } from "@reduxjs/toolkit";

export interface PageProps {
  page: "Jegyek kiválasztása" | "Kosár" | "Fizetési adatok" | "Jegyek küldése";
}

const initialState: PageProps = {
  page: "Jegyek kiválasztása",
};

export const wizardPageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    // TODO add payloadAction to updateWizard
    updateWizard: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { updateWizard } = wizardPageSlice.actions;

export default wizardPageSlice.reducer;
