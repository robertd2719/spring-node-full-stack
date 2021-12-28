import './App.css';
import {useState, useEffect} from "react";
import TaskInput from "./components/taskInput/TaskInput";
import TaskList from "./components/taskList/TaskList";
import TaskRoute from "./api/TaskRoute";

const App = () => {
    const [taskList, updateTaskList] = useState([]);

    useEffect(() => {
            const updateTaskView = async () => {
                try {
                    const results = await TaskRoute.get("/tasks");
                    console.log(results.data);
                    // remember we are offloading the information as data!!!
                    updateTaskList(results.data);
                } catch(err){
                    if (err.response){
                        console.log(err.response.data);
                        console.log(err.response.status);
                        console.log(err.response.headers);
                    } else {
                        console.log(`Error: ${err.message}`);
                    }
                }
            }
            updateTaskView();
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
                    {taskList.map(task => <li key={task.id}>{task.title}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default App;