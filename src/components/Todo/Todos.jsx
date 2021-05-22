import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {CircularProgress} from '@material-ui/core';
import TodoCard from './TodoCard';

const Todos = () => {

    const  [ todos, setTodos ] =useState();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res)=>{
            const responseData = res.data;
            setTodos(responseData);
        })
    }, []);
    return (
        <React.Fragment>
           { todos ? 
           (
                    <div style={{ display: "flex", flexWrap: "wrap" }} >
                { todos.slice(0, 10).map(todo => <TodoCard key= {todo.id} todo={todo} /> )}
              </div>
           ): <CircularProgress /> }
        </React.Fragment>
    );
}

export default Todos;