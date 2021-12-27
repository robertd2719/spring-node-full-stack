import './App.css';
import TaskInput from "./controllers/taskInput/TaskInput";

const App = () => {
    return (
        <div>
            <h1 align="center">Bau Haus</h1>
            <h4 align="center">Task Manager</h4>
            <div className="container">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, id, sint. Aliquam animi atque, cum
                    doloribus eligendi enim excepturi facere harum ipsam laborum laudantium modi molestiae officiis,
                    possimus quia quibusdam ratione rerum saepe similique voluptatibus. Doloribus nam provident quaerat
                    rerum? Labore quas quidem quis voluptas! Adipisci cumque deserunt dignissimos rerum!</p>
                <TaskInput/>
            </div>
        </div>
    )
}

export default App;