import { useState } from 'react';

import './App.css';
import TodoList from './components/TodoList';


function App() {
  const [ taskList, useTaskList ] = useState(['sleep', 'eat'])
  return (
    <div className="App">
      <TodoList tasks={taskList}  />
    </div>
  );
}

export default App;
