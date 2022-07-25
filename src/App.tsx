import React, {useState} from 'react';
import './App.css';
import {ToDoList} from "./ToDoList";

export type FilterType = 'all' | 'active' | 'completed'

function App() {


    let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "HTML&CSS", isDone: true},
        {id: 5, title: "JS", isDone: true},
        {id: 6, title: "ReactJS", isDone: false}
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

    function RemoveTask(id: number) {
        let filteredTask = tasks.filter(tasks => tasks.id !== id)
        setTasks(filteredTask)
    }

    return (

        <div className='App'>
            <ToDoList title="What to learn?" tasks={tasksForToDoList} removeTask={RemoveTask}
                      changeFilter={changeFilter}/>

        </div>

    )
}

export default App;
