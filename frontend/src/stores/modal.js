import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    addModal: false,
};

const modal = createSlice({
    name: 'modal',
    initialState,
    reducers: {
       openAddModal: (state) => {
           state.addModal = true;
       },
       closeAddModal: (state) => {
           state.addModal = false;
       },
    },
});

export const {openAddModal, closeAddModal} = modal.actions;
export default modal.reducer;