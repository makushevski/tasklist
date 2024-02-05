import './App.css';
import TaskList from './TaskList';

function App() {
  const tasks = [
    { id: 1, name: "Выучить React"  },
    { id: 2, name: "Выучить английский"  }
  ]

  return (
    <div>
      <h1>Список задач</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
