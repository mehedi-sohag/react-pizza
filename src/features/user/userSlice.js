import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const uesrSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userName = action.payload;
    },
  },
});

export default uesrSlice.reducer;
export const { updateName } = uesrSlice.actions;
