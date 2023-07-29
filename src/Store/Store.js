import { configureStore } from "@reduxjs/toolkit";

import  {TodoSlice}  from "./Slices/TodoSlice";

const store = configureStore({
    reducer: {
        todoList: TodoSlice.reducer
    }
})


export default store