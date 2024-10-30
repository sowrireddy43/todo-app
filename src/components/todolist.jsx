import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [inputDate, setInputDate] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleDateChange(e) {
    setInputDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputValue && inputDate) {
      setTodos([...todos, { text: inputValue, date: inputDate }]);
      setInputValue('');
      setInputDate('');
    }
  }

  const handleDelete = (index) => {
    const newTodos = [...todos];
    //take current index array elements
    newTodos.splice(index, 1); // delete that array elements , index represenrs starting of and 1 reprsents only one word deleted.
    setTodos(newTodos);
  };

  return (
    <center>
      <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter todo item"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={inputDate}
                    onChange={handleDateChange}
                  />
                </td>
                <td>
                  <button type="submit">Add Todo</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

   
        {todos.length > 0 && (
          <table border="1" style={{ marginTop: '20px', textAlign: 'center' }}>
            <thead>
              <tr>
                <th>Todo Item</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td>{todo.text}</td>
                  <td><em>{todo.date}</em></td>
                  <td>
                    <button className="btn btn-warning" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </center>
  );
}

export default TodoList;
