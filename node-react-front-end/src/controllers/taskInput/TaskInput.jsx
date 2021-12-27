import {useState, useEffect} from "react";
import taskRoute from "../../api/TaskRoute";

const TaskInput = () => {

    const [title, updateTitle] = useState("");
    const [description, updateDescription] = useState("");

    const HandleInputTitleChange = (event) => {
        updateTitle(event.target.value);
    }
    const HandleInputDescriptionChange = (event) => {
        updateDescription(event.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        try{
            const newTask = {title, description};
            const response = await taskRoute.post('/tasks',newTask);
        } catch (err){
            console.log(`Error: ${err.message}`)
        }
    }


    return (
        <div>
            <h3>New Task</h3>
            <input type="text" name="title" id="" value={title} onChange={HandleInputTitleChange}/>
            <h3>Description</h3>
            <textarea name="description" id="" cols="30" rows="3" value={description}
                      onChange={HandleInputDescriptionChange}/>
            <button onClick={handleSubmit}>Submit</button>

        </div>
    )
}

export default TaskInput;