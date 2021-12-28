const TaskItem = ({task,taskList,deleteTask})=>{
    return(
        <li key={task.id} className="list-item">
            {task.title}
            <button key ={task.id} onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
        )

}
export default TaskItem;