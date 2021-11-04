import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FormState {
  name: string,
  email: string,
  password: string
}

const initialState: FormState = {
  name: "",
  email: "",
  password: ""
}

export const formSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    chooseName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    chooseEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    choosePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
})

export const reducer =  formSlice.reducer
export const { chooseName, chooseEmail, choosePassword } = formSlice.actions