import { createSlice } from '@reduxjs/toolkit';

// Initialize data from local storage
const initialData = JSON.parse(localStorage.getItem('some')) || []; 

const signForm = createSlice({
  name: 'signData',
  initialState: {
    some: initialData,  
  },
  reducers: {
    userLog: (state, action) => {
      state.some.push(action.payload);  
      localStorage.setItem('some', JSON.stringify(state.some)); 
    },
    clearData: (state) => {
      state.some = [];  
      localStorage.removeItem('some');  
    },
  },
});

export const { userLog, clearData } = signForm.actions;
export default signForm.reducer;
