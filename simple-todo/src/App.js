import React,{useState}from "react";
import './App.css';
import DateTime from './component/datetime';
import ItemList from './component/itemlist';
import TextBox from './component/textbox';

function App() {

  let [todoList, addToList] =useState([]);

  const addItemToList = (data) =>{
    addToList([...todoList,data])
  }

  return (
    <div className="App">
      <DateTime/>
     
      <TextBox addItem={addItemToList} />

      <ItemList masterList = {todoList} />
    </div>
  );
}

export default App;
