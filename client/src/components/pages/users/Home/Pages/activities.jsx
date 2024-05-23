import React, { useState } from 'react';
import { Sidebar } from './Sidebar/sidebar'; 
import { FaRegCalendarCheck } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";

const Activities = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      description: 'As a translator, I want to integrate Crowdin webhook to notify translators about changed strings',
    },
  ]);

  const [inProgress, setInProgress] = useState([]);
  const [done, setDone] = useState([]);

  const addTodo = () => {
    const newTodoDescription = document.getElementById('to-do-description').value;
    if (newTodoDescription.trim()) {
      setTodos([...todos, { id: todos.length + 1, description: newTodoDescription }]);
      document.getElementById('to-do-description').value = '';
      document.getElementById('my_modal_5').close();
    }
  };

  const moveToInProgress = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setInProgress([...inProgress, todo]);
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const moveToDone = (id) => {
    const task = inProgress.find(task => task.id === id);
    setDone([...done, task]);
    setInProgress(inProgress.filter(task => task.id !== id));
  };

  const deleteTodo = (id, type) => {
    if (type === 'todo') {
      setTodos(todos.filter(todo => todo.id !== id));
    } else if (type === 'inProgress') {
      setInProgress(inProgress.filter(task => task.id !== id));
    } else if (type === 'done') {
      setDone(done.filter(task => task.id !== id));
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
    
      <div className='bg-white flex-grow p-7'>
        <header>
          <h1 className='text-4xl font-bold mb-3 '>🤖 Feeding Program</h1>
          <div className="flex items-center justify-start">
            <FaRegCalendarCheck className='text-lg' />
            <p className='text-gray-400 ml-2'>Date Started</p>
            <span className='bg-transparent border-black border p-2 ml-2 rounded-lg'>April 24 2024</span>
          </div>
          <p className='text-xl text-black my-4'>Description</p>
          <p className='text-justify text-gray-400 max-w-screen-2xl'>A feeding program is an organized initiative designed to provide nutritious meals to individuals in need, particularly targeting vulnerable populations such as children, 
            the elderly, and low-income families. These programs aim to address food insecurity and malnutrition by ensuring access to regular, healthy meals. Feeding programs can be implemented 
            in various settings, including schools, community centers, shelters, and through mobile units. They often involve partnerships with government agencies, non-profit organizations, 
            and volunteers. The overarching goals are to improve health outcomes, support educational attainment for children, reduce hunger, and foster a sense of community and well-being 
            among participants.
          </p>
          <button className="btn w-60 my-3 bg-black text-white" onClick={() => document.getElementById('my_modal_5').showModal()}> Add To Do <IoMdAddCircle /></button>
          <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box bg-white border border-black">
              <h3 className="font-bold text-xl">Add a To Do List ✍️:</h3>
              <hr className='my-4'/>
              <p className='text-sm my-2'>Description:</p>
              <textarea id="to-do-description" className='bg-white border rounded-md h-96 border-black w-full p-3 text-gray-400 '></textarea>
              <div className="modal-action">
                <button className="btn bg-black text-white mr-2" onClick={addTodo}>Add</button>
                <button className="btn bg-white border border-black text-black" onClick={() => document.getElementById('my_modal_5').close()}>Close</button>
              </div>
            </div>
          </dialog>
        </header>

        <section className='max-w-7xl mt-1'>
          <div className="w-full flex items-start justify-between">
            <div className="flex flex-col w-full mr-5">
              {todos.map(todo => (
                <div key={todo.id} className="h-32 mb-3 rounded-lg border border-black cursor-pointer hover:shadow-lg p-3">
                  <h1 className='text-xl font-bold'>To Do:</h1>
                  <p className='text-sm text-gray-600'>{todo.description}</p>
                  <div className="flex items-end justify-end">
                    <button className='text-green-500 mr-2' onClick={() => moveToInProgress(todo.id)}><FaCheckCircle/></button>
                    <button className='text-red-400' onClick={() => deleteTodo(todo.id, 'todo')}><FaTrash /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full mr-5">
              {inProgress.map(task => (
                <div key={task.id} className="h-32 mb-3 rounded-lg bg-yellow-200 border border-black cursor-pointer hover:shadow-lg p-3">
                  <h1 className='text-xl font-bold'>On Progress:</h1>
                  <p className='text-sm text-gray-600'>{task.description}</p>
                  <div className="flex items-end justify-end">
                    <button className='text-green-500 mr-2' onClick={() => moveToDone(task.id)}><FaCheckCircle/></button>
                    <button className='text-red-400' onClick={() => deleteTodo(task.id, 'inProgress')}><FaTrash /></button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col w-full ">
              {done.map(task => (
                <div key={task.id} className="h-32 mb-3 rounded-lg bg-green-200 border border-black cursor-pointer hover:shadow-lg p-3">
                  <h1 className='text-xl font-bold'>Done:</h1>
                  <p className='text-sm text-gray-600'>{task.description}</p>
                  <div className="flex items-end justify-end">
                    <button className='text-red-400' onClick={() => deleteTodo(task.id, 'done')}><FaTrash /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Activities;
