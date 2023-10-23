import { useState, useEffect } from "react"
import { motion } from "framer-motion";

/**
 * componente que gestiona la lista de tareas
 * @returns {React.Component} componente de la lista de tareas
 */
const TaskList = ({ showSettings, setShowSettings }) => {
const [newTask, setNewTask] = useState("");
const [taskList, setTaskList] = useState([]);

// useEffect(() =>{

// })

/**
 * Añade una nueva tarea a la lista 
 */
const addNewTask = () => {
  if (newTask === "") return;
  //Vamos a añadir una nueva tarea a la base de datos 
  const task = {task: newTask, completed: false};
  addNewTask(task)
    .then(() =>{
      //Cuando se añade la tarea -> actualiza todo dentro del estado de Tasklist
      return setTaskList([...taskList, task])
    })
    .catch((e) => console.error(e))
    .finally(() => setNewTask(""));
};

/**
 * Función para comprobar si la lista de tareas esta vacía
 * @returns true si la lista de tareas esta vacía
 */
const isTasksEmpty = () => taskList.length === 0;

const editNewItem = (e) => setNewTask(e.target.value);

/**
 * Función para eliminar una tarea en concreto
 * @param {*} index - Indice de la tarea a eliminar
 */
const removeItem = (index) => {
  const newTaskList= taskList.filter((t, i) => i !== index);
  setTaskList(newTaskList);
}

/**
 * cambia el item por completado <-> pendiente
 * @param {*} index 
 */
// const toggleCompletedItem = (index) => {
//   let task = taskList.find((t) => t.id === index);
//   // Actualiza la base de datos de la tarea
//   toggleCompleted(task)
//     .then(async () => {
//       //Cuando se haya añadido -> actualiza todo dentro del estado de Tasklist
//       const newTaskList = await getTasks();
//       return setTaskList([...newTaskList]);
//     })
//     .catch((e) => console.error(e))
//}

const insertNewItemOnEnterKey = (e) => e.key === "Enter" && addNewTask();

  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-3xl font-semibold text-lemon-600 dark:text-lime-200">
          Task List v1 
        </h1>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="btn"
          // onClick={() => setShowSettings(!showSettings)}
        > 
          {/* {!showSettings ? "Show Settings" : "Hide Settings"} */}
        </motion.button>
      </header>
      <div className="my-4">
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          className="shadow py-1 px-2 rounded-lg outline-none transition-all duration-300 focus:ring-2 mr-2 dark:bg-slate-500"
          onChange={editNewItem}
          onKeyDown={insertNewItemOnEnterKey}
        />
        <button
          className="btn btn-add-task" 
          onClick={addNewTask}
        >
          crear tareas
        </button>
      </div>
      {isTasksEmpty() ? (
        <p>Task List is empty</p>
      ): (
        <ul className="todo-list">
          {taskList.map((item, index) => (
            <motion.li initial={{ x:" 100vw"}} animate={{ x:"0"}} key={index}>
              <label className="cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={item.completed} 
                  onChange={() => {}}
                />
                <span 
                  className={`ml-2 text-gray-700 dark:text-gray-200 text-sm italic ${item.completed && "line-through"  }`}
                >
                  {item.task}
                </span>
              </label>
            </motion.li>
          ))}
        </ul>
      )}
    </>
  )
}

export default TaskList