import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../Styles/Styles.css"

export const Counter = () => {
  const { task } = useContext(AppContext);
  const totalTask = task.length;
  const completedTask = task.filter((Task) => !!Task.completed).length;
  return (
    <>
      <span className="background-html"></span>
      <span className="background-html2"></span>
      <section>
        <div className="counter-container">
          <p className="p-counter-container">Haz completado </p>
          <p className="p-counter-container">
            {completedTask} de {totalTask}
          </p>
          <p className="p-counter-container">Tareas</p>
        </div>
      </section>
      {/* <hr/> */}
    </>
  );
};
