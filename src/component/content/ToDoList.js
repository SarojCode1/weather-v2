import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [newItem, setNewItem] = useState("");


    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = () => {
        setTasks([
            ...tasks,
            { text: newTask, completed: false, items: [] },
        ]);
        setNewTask("");
    };


    const handleDeleteTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const handleTaskCompletion = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };
    const handleNewItemChange = (taskIndex, event) => {
        const newTasks = [...tasks];
        newTasks[taskIndex].newItem = event.target.value;
        setTasks(newTasks);
    };
    const handleAddItem = (taskIndex) => {
        const newTasks = [...tasks];
        const newItem = newTasks[taskIndex].newItem;
        if (newItem) {
            newTasks[taskIndex].items.push(newItem);
            newTasks[taskIndex].newItem = "";
            setTasks(newTasks);
        }
    };
    const handleDeleteItem = (taskIndex, itemIndex) => {
        const newTasks = [...tasks];
        newTasks[taskIndex].items.splice(itemIndex, 1);
        setTasks(newTasks);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex justify-center items-center">
            <div className="w-96 p-5 bg-white rounded-md shadow-md">
                <h1 className="text-2xl font-bold mb-5">To Do List</h1>
                <ol className="list-decimal pl-5">
                    {tasks.map((task, index) => (
                        <li
                            key={index}
                            className={`flex items-center justify-between ${task.completed ? "line-through text-gray-500" : ""
                                }`}
                        >
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => handleTaskCompletion(index)}
                                    className="mr-2"
                                />
                                <span
                                    className={`${task.completed ? "line-through text-gray-500" : ""
                                        }`}
                                >
                                    {task.text}
                                </span>
                            </div>
                            <button
                                onClick={() => handleDeleteTask(index)}
                                className="ml-2 text-red-500 hover:text-red-700"
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ol>
                <div className="mt-5">
                    {tasks.map((task, index) => (
                        <div key={index} className={`mb-3 ${task.completed ? "line-through text-gray-500" : ""}`}>
                            <h3 className="text-lg font-medium">{task.text}</h3>
                            <ul className="list-disc pl-5">
                                {task.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="ml-3">{item}
                                        <button
                                            onClick={() => handleDeleteItem(index, itemIndex)}
                                            className="ml-2 text-red-500 hover:text-red-700"
                                        >
                                            Delete
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-2 flex">
                                <input
                                    type="text"
                                    value={newItem}
                                    onChange={(e) => handleNewItemChange(e, index)}
                                    className="flex-1 py-2 px-3 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
                                    placeholder="Add a new item"
                                />
                                <button
                                    onClick={() => handleAddItem(index)}
                                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md focus:outline-none"
                                >
                                    Add Item
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-5 flex">
                    <input
                        type="text"
                        value={newTask}
                        onChange={handleNewTaskChange}
                        className="flex-1 py-2 px-3 rounded-l-md border border-gray-300 focus:outline-none focus:border-blue-500"
                        placeholder="Add a new task"
                    />
                    <button
                        onClick={handleAddTask}
                        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r" >
                        Add Task
                    </button>
                </div>
                <br />
                <Link
                    to="/Weather"
                    className="block text-center mt-5 underline text-blue-500 hover:text-blue-700"
                >
                    Check Weather
                </Link>
            </div>

        </div>
    );
};

export default ToDoList;
