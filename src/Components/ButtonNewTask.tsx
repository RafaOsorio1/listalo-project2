import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../Styles/Styles.css"

export const ButtonNewTask = () => {
  
  const {addNewTask} = useContext(AppContext)
  return <button onClick={addNewTask}>Nueva Tarea</button>;
};
