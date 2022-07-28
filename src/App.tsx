import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";
import {v1} from "uuid";

export type FilterType = 'all' | 'active' | 'completed'

function App() {


    let [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false},
        {id: v1(), title: "HTML&CSS", isDone: true},
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "ReactJS", isDone: false}
    ])

    let [filter, setFilter] = useState<FilterType>('all')

    let tasksForToDoList = tasks
    if (filter === 'active') {
        tasksForToDoList = tasks.filter(task => task.isDone === false)
    }
    if (filter === 'completed') {
        tasksForToDoList = tasks.filter(task => task.isDone === true)
    }

    function changeFilter(value: FilterType) {
        setFilter(value)
    }

    function RemoveTask(id: string) {
        let filteredTask = tasks.filter(tasks => tasks.id !== id)
        setTasks(filteredTask)
    }

    function addNewTask(title:string){
        let newTask = {id:v1(), title:title, isDone:false}
        let newTasks= [newTask, ...tasks]
        setTasks(newTasks)
    }

    return (

        <div className='App'>
            <ToDoList title="What to learn?" tasks={tasksForToDoList} removeTask={RemoveTask}
                      changeFilter={changeFilter} addNewTask={addNewTask}/>


        </div>

    )
}

export default App;
