import { PayloadAction,createSlice } from '@reduxjs/toolkit'

const initialState = {
    counter: 0
}

export const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        setCounter: (state, action: PayloadAction<{ counter: number}>) => {
            state.counter = action.payload.counter
        }
    }
})

export const { setCounter } = counterSlice.actions
export default counterSlice.reducer