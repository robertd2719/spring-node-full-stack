import  {useState, useEffect} from "react";
import taskRoute from "../../api/TaskRoute";

const TaskInput = () =>{

    const [title, updateTitle] = useState("");
    const HandleInputTitleChange = (event) =>{
        updateTitle(event.target.value);
    }

    return (
        <div>
            <h5>New Task </h5>
            <input type="text" name="title" id="" value={title} onChange={HandleInputTitleChange}/>
            <button>Submit</button>
        </div>
    )
}

export default TaskInput;