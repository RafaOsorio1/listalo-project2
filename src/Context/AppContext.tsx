import {useState, createContext } from "react";
import { useLocalStorage } from "./Hook";
import { ListData, props, propsProvider } from "./Interfaces";


export const AppContext = createContext<propsProvider>(
  {} as propsProvider
);

export const AppProvider = ({ children }: props): JSX.Element => {
  const [task, saveTask, loading, error] = useLocalStorage("listData", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false)

  const addNewTask = () => {
    setOpenModal((prevState) => !prevState);
  }
    
  let searchedTask: ListData[] = task;

  if (searchValue.length > 0) {
    searchedTask = task.filter((Task) => {
      const textTask = Task.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return textTask.includes(searchText);
    });
  }
  const completeTask = (key: string) => {
    const index = task.findIndex((Task) => Task.key === key);
    const newTasks: ListData[] = [...task];
    if (newTasks[index].completed === true) {
      newTasks[index].completed = false;
      return saveTask(newTasks);
    } else {
      newTasks[index].completed = true;
      return saveTask(newTasks)
    }
  };

  const deleteTask = (key: string) => {
    const index = task.findIndex((Task) => Task.key === key);
    const newTask = [...task];
    if (newTask[index].completed === false) {
      return alert("No puedes Eliminar una tarea sin completar ");
    } else {
      const newTasks = newTask.filter((Task) => Task.key !== key);
      return saveTask(newTasks);
    }
  };
  const providerValue: propsProvider = {
    task,
    saveTask,
    searchValue,
    setSearchValue,
    searchedTask,
    completeTask,
    deleteTask,
    loading,
    error,
    openModal,
    setOpenModal,
    addNewTask,
  };

  return (
  <AppContext.Provider value={providerValue}>
    {children}
  </AppContext.Provider>)
};
