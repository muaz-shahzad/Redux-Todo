import React from "react";
import List from "./List";
import AddIcon from '@mui/icons-material/Add';

const Todo = () => {
    return (
        <>
            <div className="container" style={{ border: "2px solid black" }}>
                <div className="col-sm-4 col-md-4 col-lg-4 col-4 mx-auto mt-5" style={{ border: "2px solid red" }}>
                    <div className="text-center">
                        <h1>Todo List</h1>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-4 mx-auto" style={{ border: "2px solid red" }}>
                    <div className="mt-4 mx-auto" style={{ border: "2px solid green", width: "fit-content",textAlign:"center" }}>
                        <input type="text" placeholder="✍️ Add a item" />
                        <AddIcon className="addbtn"/>
                    </div>
                </div>
                <div className="col-sm-4 col-md-4 col-lg-4 col-4 mx-auto mt-4" style={{ border: "2px solid red" }}>
                    <ol>
                        <List />
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo