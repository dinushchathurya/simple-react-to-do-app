import React , { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';

const Todo = () => {
    const { id } = useParams();
    const [todoDetails, setTodoDetails] = useState();
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
            const responseTodo = res.data;
            setTodoDetails(responseTodo);
        })
    }, []);
    
    const { id: todoID, title, completed } = todoDetails || {};
    return (
        <div>
            {todoDetails ?
                (
                    <div>
                        <h2> {` ID: ${todoID} `} </h2>
                       <h2> {`Title: ${title} `} </h2>
                    </div>
                ) : <CircularProgress />}
        </div>
    );
}

export default Todo;