import { createSlice } from '@reduxjs/toolkit';

interface UiInitialState {
  isVisible: boolean; notification: any;
}

const initialState: UiInitialState = { isVisible: false, notification: null };

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action) {
      const { status, title, message } = action.payload;
      state.notification = { status, title, message };
    }
  }
});

const uiReducer = uiSlice.reducer;
const uiActions = uiSlice.actions;

export {
  uiActions, uiReducer
};
