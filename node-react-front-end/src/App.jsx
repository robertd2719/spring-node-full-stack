import './App.css';
import {useState, useEffect} from "react";
import TaskInput from "./components/taskInput/TaskInput";
import TaskList from "./components/taskList/TaskList";
import TaskRoute from "./api/TaskRoute";
import TaskItem from "./components/taskItem/TaskItem";

const App = () => {
    const [taskList, updateTaskList] = useState([]);

    const deleteTask = async (id) => {
        const filtered = taskList.filter(task => task.id !== id);
        updateTaskList(filtered);
        console.log(`you clicked on item : ${id}`);
        try {
            await TaskRoute.delete(`/tasks/${id}`);
            const result = await TaskRoute('/tasks');

        } catch (err) {
            console.log(err.message);
        }
    }
    const updateTaskView = async () => {
        try {
            const results = await TaskRoute.get("/tasks");
            // remember we are offloading the information as data!!!
            updateTaskList(results.data);
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
                console.log(err.response.status);
                console.log(err.response.headers);
            } else {
                console.log(`Error: ${err.message}`);
            }
        }
    }
    useEffect(() => {

        updateTaskView();
        console.log("use effect was called !!!");
        }
        , []
    )

    return (
        <div>
            <h1 align="center">Bau Haus</h1>
            <h4 align="center">Task Manager</h4>
            <div className="container">
                <p> A simple application to create, add, and delete user taskings</p>
                <TaskInput taskList={taskList} updateTaskList={updateTaskList}/>
                <div className="task-view">
                    <h3>Task List</h3>
                    <ul className="task-table">
                        {taskList.map(task => <TaskItem key={task.id} task={task} taskList={taskList} deleteTask={deleteTask}/>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App;