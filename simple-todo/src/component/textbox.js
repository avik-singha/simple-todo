import React, {useState} from "react";

const TextBox = (props) => {

    let [itemVal, setItemVal] = useState("");

    const handleChange = (e) => {
        setItemVal(e.target.value)        
    }

    const handleClick = () =>{
        props.addItem({"item":itemVal, "status":"PENDING"})
    }

    return(
        <div>
            <input type="text" value={itemVal} onChange={handleChange} />
            <button className="addBtn" onClick={handleClick}>Save</button>
        </div>
    )
}

export default TextBox;