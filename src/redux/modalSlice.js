import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { isVisible: false },
  reducers: {
    showModal: (state) => {
      state.isVisible = true;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const selectModalVisibility = (state) => state.modal.isVisible;

export default modalSlice.reducer;
