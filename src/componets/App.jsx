import { useState, useEffect } from "react"
import TaskList from "./list/TaskList"
import { motion, AnimatePresence } from "framer-motion"
import Setting from "./settings/Setting";

/**
 * Funcion Anonima para crear un Componente Prinipal
 * @returns {React.Component} Componente Principal  de nuestra App
 */
const App = () => {
  const [dark, setDark] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  /**
   * Documentacion del UseEffect
   * se crea una variable de estado donde se almacena el valor de la configuracion en el localStorage
   */
  useEffect(() => {
    setDark(false);
  },[])

  /**
   * Funcion para intercambiar el valor del estado de dark <--> light
   */
  const toggleDark = () =>  setDark(!dark);
    
  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <div className={`h-screen p-4 flex flex-col bg-gray-200 dark:bg-slate-800 transition dark:text-gray-100`}>
        <TaskList 
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
        <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {showSettings && (
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: "0" }}
              exit={{ y: "100vh" }}
            >
              <Setting toggleDark={toggleDark} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App