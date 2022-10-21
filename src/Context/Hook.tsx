import { ListData } from "./Interfaces";
import { useState, useEffect } from "react";

export const useLocalStorage = (
  listData: string,
  initialValue: ListData[]
): [ListData[], (newListData: ListData[]) => void, boolean, boolean] => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(listData);
        let parsedItem: ListData[];

        if (!localStorageItem) {
          localStorage.setItem("defaultTask", JSON.stringify(initialValue));
          const list = JSON.parse(localStorage.getItem("defaultTask") || "");
          parsedItem = list;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(!!loading);
      } catch (error) {
        setError(!!error);
      }
    }, 1500);
  });
  const saveItem = (newListData: ListData[]) => {
    try {
      const setNewList = JSON.stringify(newListData);
      localStorage.setItem("listData", setNewList);
      setItem(newListData);
    } catch (error) {
      setError(!!error);
    }
  };
  return [items, saveItem, error, loading];
};
