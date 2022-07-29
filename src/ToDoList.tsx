import React, {ChangeEvent, useState, KeyboardEvent} from "react";
import {FilterType} from "./App";

type ToDoListPropsType = {
    title: string,
    tasks: Array<TasksType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterType) => void
    addNewTask: (title: string) => void
}
type  TasksType = {
    id: string,
    title: string,
    isDone: boolean
}

export function ToDoList(props: ToDoListPropsType) {

    const [newTask, setNewTask] = useState();

    const newTaskValue = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.currentTarget.value)
    }
    const addNewTasks = () => {
        props.addNewTask(newTask)
        setNewTask("")
    }
    const addNewTasksHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if(e.key==="Enter" && e.ctrlKey === true){addNewTasks()}
    }
    const setAllFilterHandler = () => {props.changeFilter('all')}
    const setActiveFilterHandler = () => {props.changeFilter('active')}
    const setCompletedFilterHandler = () => {props.changeFilter('completed')}

    const taskListItem = props.tasks.length ?  props.tasks.map(task => {
            const taskRemove = () => {props.removeTask(task.id)}
            return (
                <li key={task.id}>
                    <input type={"checkbox"} checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={taskRemove}>X</button>
                </li>
            )
        } ) : <span> Your task list is empty</span>

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTask} onChange={newTaskValue} onKeyDown={addNewTasksHandler}/>
                <button onClick={()=>{addNewTasks()}}>+</button>
            </div>
            <ul>
                {taskListItem}
            </ul>
            <div>
                <button onClick={setAllFilterHandler}>All</button>
                <button onClick={setActiveFilterHandler}>Active</button>
                <button onClick={setCompletedFilterHandler}>Completed</button>
            </div>
        </div>
    )
}