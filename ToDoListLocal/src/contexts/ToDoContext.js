import {createContext, useContext} from "react";

export const ToDoContext = createContext({
    todos: [
        {
            id: 1,
            todo : "Learn React",
            completed : false
        }
    ],
    addtodo: (todo) => {},
    updatetodo: (id, todo) => {},
    deletetodo: (id) => {},
    togglecomplete: (id) => {},
});

export const useTodo = () => {
   return useContext(ToDoContext);
}

export const ToDoProvide = ToDoContext.Provider;
