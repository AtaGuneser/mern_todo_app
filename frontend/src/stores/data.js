import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const response = await axios.post('http://localhost:4000/')
console.log(response.data)
const responseData = response.data.message

const initialState = {
  data: responseData
}

const allDataProcess = createSlice({
  name: 'allDataProcess',
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.data = [...state.data, payload]
    },
    deleteData: (state, { payload }) => {
      state.data = state.data.filter(item => item._id !== payload.id)
    },
    editData: (state, { payload }) => {
      state.data = state.data.map(item => {
        if (item._id === payload.id) {
          return { ...item, text: payload.text }
        }
        return item
      })
    }
  }
})

export const { addData, deleteData, editData } = allDataProcess.actions
export default allDataProcess.reducer
