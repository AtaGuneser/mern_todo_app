import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  addModal: false
}

const modal = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openAddModal: state => {
      state.addModal = true
    },
    closeAddModal: state => {
      state.addModal = false
    },
    closeEditModal: state => {
      state.editModal = false
    }
  }
})

export const { openAddModal, closeAddModal, closeEditModal } = modal.actions
export default modal.reducer
