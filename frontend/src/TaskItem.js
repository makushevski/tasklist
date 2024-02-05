import React from 'react';

function TaskItem({task}) {
    return <li id={task.id}>{task.name}</li>;
}


export default TaskItem;