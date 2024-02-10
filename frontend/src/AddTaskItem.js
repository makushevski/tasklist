import React, {useState} from 'react';

function AddTaskItem(props){
    const[taskName, setTaskName] = useState('');
    
    const handleInputChange = (event) =>{
        setTaskName(event.target.value);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(!taskName.trim()) return;
        props.onAddTask(taskName);
        setTaskName('');
    }

    return (<form onSubmit={handleSubmit}>
        <label>Название задачи</label>
        <input type='text' value={taskName} onChange={handleInputChange} />
        <input type='submit' value='Добавить' />
    </form>)
}

export default AddTaskItem;