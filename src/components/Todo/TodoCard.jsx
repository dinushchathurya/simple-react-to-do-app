import React from 'react';
import { useHistory } from 'react-router-dom';

const TodoCard = (props) =>{
    const { todo } = props;
    const { id, title, completed } = todo;
    let history = useHistory();
    
    return (
        <div style={{
            backgroundColor: "gray",
            margin: "10px",
            padding: "15px",
            width: "150px;"
        }}
        onClick = {() => history.push(`/todo/${id}`)}
        >
            <h4> {title} </h4>
            <h5> {` Completed: ${completed}`} </h5>
        </div>
    )
};

export default TodoCard;