import { useState, KeyboardEvent } from 'react'
import './App.css'

interface Task {
  id: string
  text: string
  completed: boolean
}

function TaskItem({
  task,
  onToggle,
  onDelete,
}: {
  task: Task
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}) {
  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`${task.text}を${task.completed ? '未完了' : '完了'}にする`}
      />
      <span className="task-text">{task.text}</span>
      <button
        className="delete-btn"
        onClick={() => onDelete(task.id)}
        aria-label={`${task.text}を削除`}
      >
        削除
      </button>
    </li>
  )
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [input, setInput] = useState('')

  const addTask = () => {
    const text = input.trim()
    if (!text) return
    setTasks(prev => [
      ...prev,
      { id: crypto.randomUUID(), text, completed: false },
    ])
    setInput('')
  }

  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)),
    )
  }

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') addTask()
  }

  const remaining = tasks.filter(t => !t.completed).length

  return (
    <div className="container">
      <h1 className="title">タスクボード</h1>

      <div className="input-row">
        <input
          type="text"
          className="task-input"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="タスクを入力して Enter または追加をクリック"
        />
        <button className="add-btn" onClick={addTask}>
          追加
        </button>
      </div>

      {tasks.length > 0 && (
        <p className="summary">
          {remaining > 0 ? `残り ${remaining} 件` : 'すべて完了！'}
        </p>
      )}

      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty-message">タスクをまだ追加していません</p>
      )}
    </div>
  )
}
