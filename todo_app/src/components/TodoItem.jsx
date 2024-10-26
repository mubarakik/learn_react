import { useState } from "react";
import { Button } from "./Button";

export function TodoItem(props = {todo,index,isDone,handler,onEdit,onDelete}) {
    const {todo, index, isDone, handler,onEdit,onDelete} = props;

    const checkBoxChangeHandler = (event)=>{
        if(typeof handler==='function') return handler(event,props);
    }

    

    return (
    <>
        {/* <li className={isDone ? `done`:''} key={index} onClick={clickHandler}> */}
        <li key={index}>
            <input type="checkbox" onChange={checkBoxChangeHandler} />
            <span className={isDone ? `done`:''}>{todo}</span>
            <div className="list_buttons">
                <Button 
                    type="secondary" 
                    icon="ri-edit-line"
                    action="edit"
                    handler={onEdit}
                    parent_props={props}/>
                <Button 
                    type="secondary" 
                    icon="ri-delete-bin-line" 
                    action="delete"
                    handler={onDelete}
                    parent_props={props}/>
            </div>            
        </li>
    </>
    )
}