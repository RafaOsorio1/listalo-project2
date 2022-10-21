import { ReactNode } from "react"

export interface propsCounter{
    totalTask : number
    completedTask : number
}
export interface ListData {
    key: string
    text:string
    completed: boolean
}[]
export interface PropsSearchValue {
    searchValue: string
    setSearchValue: (e: string) => void
}
export interface Item {
    text: string;
    key: string;
    complete: boolean;
}
export type children = {
    children: React.ReactNode
}

export interface initialValueType {
    theKey: string
    text : string
    complete: boolean
}
  
export interface propsProvider {
    task : ListData[]
    searchValue: string
    setSearchValue: (e: string) => void
    searchedTask: ListData[]
    completeTask: (key: string) => void
    deleteTask: (key: string) => void
    loading: boolean
    error: boolean
    openModal: boolean
    setOpenModal: (e: boolean) => void
    addNewTask: () => void
    saveTask: (newListData: ListData[]) => void
}
export interface props {
    children: ReactNode | ReactNode[];
};  