import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const response = await axios.post("http://localhost:8000/");
console.log(response);


const initialState = {
    data: [],
}

const allDataProcess = createSlice({
    name: "allDataProcess",
    initialState,
    reducers: {
       
    },
});

// export const {} = allDataProcess.actions;
export default allDataProcess.reducer;