import { createSlice } from "@reduxjs/toolkit";

const msg = createSlice({
  name:"msgs",
  initialState:{value:""},
  reducer:{
    addMsg:(state,action) => {
      state.value.push(action.payload);
    },
  },
})