import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import "../Styles/Styles.css"

export const SearchTask = () => {

  const {searchValue, setSearchValue} = useContext(AppContext)

  const onSearchValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };
  return (
    <input
    className="input-search"
      placeholder="Busqueda"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
};
