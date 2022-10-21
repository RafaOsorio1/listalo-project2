import { useContext, useState } from "react";
import { AppContext } from "../../Context/AppContext";
import "../../Styles/Styles.css"

export const Form = () => {
  const {task, setOpenModal, saveTask } = useContext(AppContext);
  const [text, setText] = useState("");

  const buttonT = (text: string) => {
    const newList = [...task];
    newList.push(
      {
        key: Math.random().toString(36).substring(2, 18),
        text: text,
        completed: false
      }
    );
    saveTask(newList)
  }

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
    console.log(event.target.value);
  };
  const addNewTask = () =>{
    buttonT(text);
    setOpenModal(false)
  };

  const cancel = () => {
    setOpenModal(false)
  }
  return (
    <form>
      <label htmlFor="textArea">Escribe la nueva tarea</label>

      <textarea id="textArea" value={text} onChange={handleChange}></textarea>

      <button type="button" onClick={addNewTask}>Agregar tarea</button>
      <button type="button" onClick={cancel}>Cancelar</button>
    </form>
  );
};
