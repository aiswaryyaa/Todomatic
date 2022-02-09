import './App.css';
import List from "./component/List";

import { useState } from "react";

function App() {

const [currentItem,setItem] = useState(null);

const [list, updateList] = useState([]);

const onChangeHandler=(e) =>{
 setItem(e.target.value);
};

const addList= () =>
{
   updateList([...list,{item:currentItem, key:Date.now()}]);
    setItem("");
  };



  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
         <span className="subject">Add TO-DO ✌</span>
          <div className="Input-wrapper">
            <input
            placeholder="Add-item" value={currentItem} onChange={onChangeHandler} />
            <button onClick={addList}>+</button>
          </div>
          <List list={list} updateList={updateList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
