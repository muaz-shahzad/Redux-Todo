import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import List from './List';
import EditIcon from '@mui/icons-material/Edit';
import Todo from './Todo';
import AddIcon from '@mui/icons-material/Add';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import { additem, deleteitem, removeall, updtaeItem } from "./Store/Slices/TodoSlice"
import { useDispatch, useSelector } from 'react-redux';



let a
function App() {
  const dispatch = useDispatch();

  const [curr, upd] = useState("");
  const [edititem, updedit] = useState(null)
  const [toogle, updtoggle] = useState(true)

  const todo = useSelector((state) => {
    return state.todoList
  })
  const inputevent = (e) => {
    upd(e.target.value)
  }
  // Redux add
  const Add = () => {
    if (!curr) {
      alert("Please Add a item...!!")
    }
    else if (curr && !toogle) {
      todo.map((val, index) => {
        if (index === edititem) { // index item array ka r jo edit k function say id a rhi dono ko compare kar rhy
          let arr = [edititem, curr]
          dispatch(updtaeItem(arr))
          upd("")
          updtoggle(true)


        }
        return val; // jo b update kia hy uski value idhr a rhi hay
      })

    } else {
      dispatch(additem(curr))
      upd("")
    }


  }

  // Redux Delete
  const deleteItem = (id) => {
    dispatch(deleteitem(id))
  }

  const EditItem = (id) => {
    console.log("Edit horaha")
    let neweditItem = todo.find((val, index) => {
      return index == id
    });
    upd(neweditItem) // curr m value ja rhi jis pay click kia hay r input fiel m show horhi jis b id pay click kia
    a = neweditItem;
    console.log(a)
    updedit(id) //hook m ids ja rhi jis id pay click kia hay eidt k liye
    updtoggle(false)

  }
  // Redux Remove All
  const RemoveAll = () => {
    dispatch(removeall(" "))
  }
  return (
    <>

      <div className="container-fluid">
        <div className="main_div">
          <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" placeholder="✍️ Add a item" value={curr} onChange={inputevent} />
            {
              toogle ? <AddIcon className="addbtn" onClick={Add} /> :
                <EditIcon className="addbtn" onClick={Add} />
            }
            <div className="mt-4">
              <ol>
                {todo.map((val, key) => {
                  return <List
                    key={key}
                    id={key}
                    data={val}
                    Selected_todo={deleteItem}
                    onedit={EditItem}
                  />
                })}
              </ol>
            </div>
          </div>

        </div>
        <div className='text-center'>
          <PlaylistRemoveIcon className='rmv' onClick={RemoveAll} />
        </div>
      </div>
    </>
  );
}

export default App;