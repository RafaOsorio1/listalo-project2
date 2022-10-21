import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../Styles/Styles.css"
export const List = () => {
    const { searchedTask, loading, error, completeTask, deleteTask } = useContext(AppContext);
    return (
        <section >
            <ul className="list-container">
                {loading && <p>Estamos cargando, no desesperes</p>}
                {error && <p>Desespérate, algo fallo</p>}
                {!loading && !searchedTask.length && <p>!Crea tu primera tarea¡</p>}
                {searchedTask.map((data) => (
                    <li className="items" key={data.key}>
                        <p className={`TodoItem-p ${data.completed && "TodoItem-p--complete"}`}>
                            {data.text}
                        </p>
                        <div className="container-buttons">
                            <button className="buttonOk" onClick={() => completeTask(data.key)}><span className="img-button-check"></span></button>
                            <button className="buttonNot" onClick={() => deleteTask(data.key)}><span className="img-button-delete"></span></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
// let value = [
// {key: Math.random().toString(36).substring(2, 18), text: 'Completar la estructura base', completed: false},
// {key: Math.random().toString(36).substring(2, 18), text: 'Completar los estilos Css', completed: false},
// {key: Math.random().toString(36).substring(2, 18), text: 'terminar proyecto con typeScript', completed: false},
// {key: Math.random().toString(36).substring(2, 18), text: 'terminar proyecto con typeScript', completed: true},
// {key: Math.random().toString(36).substring(2, 18), text: 'terminar proyecto con typeScript', completed: true},]
