import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isVisible: false },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    }
  }
});

const uiReducer = uiSlice.reducer;
const uiActions = uiSlice.actions;

export {
  uiActions, uiReducer
};
