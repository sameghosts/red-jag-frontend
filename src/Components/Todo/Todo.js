import React from 'react'

import {
    Card,
    Container,
    Button
} from 'react-bootstrap';

export default  function Todo({ title, todoArray, setTodoArray, todo, setDisplayTodo, completedArray, setCompletedArray, displayTodo }) {

    const deleteHandler = () => {
        setTodoArray(todoArray.filter(el => el.id !== todo.id))

        if(todo.id === displayTodo.id) {
            setDisplayTodo({});
        }
    };

    const editHandler = (e) => {
        console.log('click')
        setDisplayTodo(todo);
    };

    const addToComplete = todo => {
        if (todo.completed === true) {
            completedArray.push(todo)
            console.log(completedArray)
        } 
    }

    const convertBooleanToString = todo => {
        console.log(todo.completed)
    }


 
    return (
        <Container className="todoCard">
            <Card className={todo.completed ? "todoCard complete" : "todoCard"}>
                <Card.Body>
                    <Card.Title className="todoLabel">{title}</Card.Title>
                </Card.Body>
                <Card.Text className="todoListText">Is complete: {todo.completed === true ? 'True' : 'False' }</Card.Text>
                <Card.Text className="todoListText">{todo.dueDate? `Must be complete by ${todo.dueDate}` : 'No Due Date Selected'}</Card.Text>
                <Button onClick={editHandler} className="todoButtons">Edit</Button>
                <Button onClick={deleteHandler} className="todoButtons">Delete</Button>
            </Card>
        </Container>
    )
}