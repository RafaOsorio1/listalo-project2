import { useContext } from "react";
import { Title } from "../Components/Title";
import { Counter } from "../Components/Counter";
import { SearchTask } from "../Components/SearchTask";
import { List } from "../Components/List";
import { ButtonNewTask } from "../Components/ButtonNewTask";
import { AppContext } from "../Context/AppContext";
import { Modal } from "../Components/Modal/Modal";
import { Form } from "../Components/Modal/Form";

export const AppUI = () => {
  const {openModal} = useContext(AppContext);
  return (
    <>
      <Title></Title>
      <Counter/>
      <SearchTask/>
      <List/>
      {!!openModal && (
        <Modal>
          <Form></Form>
        </Modal>
      )}
      <ButtonNewTask></ButtonNewTask>
    </>
  );
};
