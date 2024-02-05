import React from 'react';
import TaskItem from './TaskItem';

function TaskList({tasks}) {
    return (<ul>
        {tasks.map(x=>(
            <TaskItem task={x} />
        ))}
    </ul>)
}

export default TaskList;