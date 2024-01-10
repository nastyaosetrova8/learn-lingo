import { createSlice } from '@reduxjs/toolkit';

const initialStateModal = {
  isShowModal: false,
  modalName: '',
  teacherId: null,
};


export const modalSlice = createSlice({
  name: 'modal',
  initialState: initialStateModal,
  reducers: {
    toggleShowModal: (state, { payload }) => {
      state.isShowModal = !state.isShowModal;
      state.modalName = payload;
    },
    chosenTeacherId: (state, { payload }) => {
      state.teacherId = payload;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const {
  toggleShowModal,
  chosenTeacherId,
} = modalSlice.actions;