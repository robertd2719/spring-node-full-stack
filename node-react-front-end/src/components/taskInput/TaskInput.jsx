import {useState, useEffect} from "react";
import taskRoute from "../../api/TaskRoute";

const TaskInput = ({taskList,updateTaskList}) => {

    const [title, updateTitle] = useState("");
    const [description, updateDescription] = useState("");
    // const [taskList, updateTaskList] = useState([]);

    const HandleInputTitleChange = (event) => {
        updateTitle(event.target.value);
    }
    const HandleInputDescriptionChange = (event) => {
        updateDescription(event.target.value);
    }

    // handle submission of the form
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const newTask = {title, description};
            const response = await taskRoute.post('/tasks',newTask);
            updateTaskList([...taskList,response.data]);
            updateTitle("");
            updateDescription("");
        } catch (err){
            console.log(`Error: ${err.message}`)
        }
    }

    return (
        <div>
            <h3 id="task-title">New Task</h3>
            <input type="text" name="title" id="" value={title} onChange={HandleInputTitleChange}/>
            <div id="spacer"></div>
            <h3 id="task-description">Description</h3>
            <textarea name="description" id="" cols="30" rows="3" value={description}
                      onChange={HandleInputDescriptionChange}/>
            <div id="spacer"></div>
            <div id="spacer"></div>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default TaskInput;