import {useState} from 'react'
import "./TodoApp.css"

const TodoApp = () => {
    // Lista de tarefas
    const [todos, setTodos] = useState([]);

    // Estado de texto da tarefas
    const [inputValue, setInputValue] = useState("");
    
    // Adicionar tarefa
    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === ""){
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: inputValue
        }
        setTodos((prevTodos) => [...prevTodos, newTodo]);

        setInputValue('');
    }
  return (
    <div className='container'>
        <h1 className='title'>Lista de tarefas</h1>

        {/* Form para adicionar tarefas */}
        <form onSubmit={handleSubmit} className="form-container">
            <input type='text'
            className='input-field'
            placeholder="Adicione uma tarefa"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} />
            <button type='submit' className='add-btn'>Adicionar</button>
        </form>

        {/* Lista de Tarefas */}
        {todos.length === 0 && <p className='empty'>Não há tarefas</p>}

        <ul className='todo-list'>
            {todos.map((todos) => (
                <li key={todos.id} className='todo-item'>
                    {todos.text}
                    <button className='delete-btn'>Excluir</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoApp