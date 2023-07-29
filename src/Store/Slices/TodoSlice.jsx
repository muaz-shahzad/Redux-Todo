import { createSlice } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        additem(state, action) {
            state.push(action.payload)
        },
        deleteitem(state, action) {
            state.splice(action.payload, 1)
        },
        updtaeItem(state, action) {
            console.log("Update ",action.payload[0])
            console.log("Update ",action.payload[1])

            state.splice(action.payload[0],1,action.payload[1])
        },
        removeall(state, action) {
            state.splice(0, state.length)

        }


    }
})
export const { additem, deleteitem, updtaeItem, removeall } = TodoSlice.actions

export { TodoSlice }