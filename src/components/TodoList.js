import React from 'react';

const TodoList = (props) => {
    console.log(props);
    const list = props.tasks.map(task => {
        return <li key={task}>{task}</li>
    })

    return (
        <div>
            <ul>{list}</ul>
        </div>
    );
};

export default TodoList;