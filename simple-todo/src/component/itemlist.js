import React,{useEffect,useState}from "react";

const ItemList = (props) => {

    return (
        <div>
            <ul>
                {props.masterList.map(eachItem=>{
                    return eachItem.status==="DONE"?(
                        <li className="item_done">
                            {eachItem.item}
                        </li>
                    ):(
                        <li className="item_pending">
                            {eachItem.item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default ItemList;