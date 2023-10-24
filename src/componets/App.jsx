import { useState, useEffect } from "react"
import TaskList from "./list/TaskList"
import Settings from "./settings/Settings";
import { motion, AnimatePresence } from "framer-motion"

/**
 * Función Anónima para crear un Componente Principal
 * @returns {React.Component} Componente Principal  de nuestra App
 */
const App = () => {
  const [dark, setDark] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  /**
   * Documentación del UseEffect
   * se crea una variable de estado donde se almacena el valor de la configuración en el localStorage
   */

  useEffect(() => {
    setDark(false);
  }, [])

  /**
   * Función para intercambiar el valor del estado de dark <--> light
   */
  const toggleDark = () =>  setDark(!dark);
    
  return (
    <div className={`App ${dark ? "dark" : ""}`}>
      <div className={`h-screen p-4 flex flex-col bg-gray-100 dark:bg-slate-800 transition dark:text-gray-100`}>
        <TaskList 
          showSettings={showSettings}
          setShowSettings={setShowSettings}
        />
        <AnimatePresence
          initial={false}
          // exitBeforeEnter={true}
          onExitComplete={() => null}
        >
          {showSettings && (
            <motion.div
              initial={{ y: "100vh" }}
              animate={{ y: "0" }}
              exit={{ y: "100vh" }}
            >
              <Settings toggleDark={toggleDark} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App