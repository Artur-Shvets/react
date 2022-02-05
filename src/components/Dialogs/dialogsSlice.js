import { createSlice } from '@reduxjs/toolkit';

const initialDialogs = [
  {
    id: 1,
    name: 'Elon',
    messages: ['Good morning chef', 'how many tasks i have?'],
  },
  {
    id: 2,
    name: 'Artur',
    messages: ['hey bro!', 'heeeeeeey', 'Go to the gym', 'oooook'],
  },
  {
    id: 3,
    name: 'Dimych',
    messages: ['Whats Up', 'Im fine', 'End you?'],
  },
  {
    id: 4,
    name: 'Indra',
    messages: ['Hi', 'What do you want', 'Ok'],
  },
  {
    id: 5,
    name: 'Saitama ONEPUNCHMAN',
    messages: ['Hello', 'Im Here'],
  },
];

export const dialogsSlice = createSlice({
  name: 'dialogs',
  initialState: {
    dialogs: initialDialogs,
    input: '',
  },
  reducers: {
    changeInput: (state, value) => {
      state.input = value.payload;
    },
    sendMessage: (state, index) => {
      if (state.input) {
        state.dialogs[index.payload].messages.push(state.input);
        state.input = '';
      }
    },
    resetInput: state => {
      state.input = '';
    },
  },
});

export const { changeInput, sendMessage, resetInput } = dialogsSlice.actions;
export default dialogsSlice.reducer;
