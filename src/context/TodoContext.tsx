import { createContext, useContext } from "solid-js";
import { createStore } from 'solid-js/store'
import { Todo } from "../interfaces/todo.interface";

export const TodoContext = createContext<{todos: Todo[], setTodos: any}>();

export function TodoContextProvider(props: any) {
	const [todos, setTodos] = createStore([]);

	return (
		<TodoContext.Provider value={{todos, setTodos}}>
			{props.children}
		</TodoContext.Provider>
	)

}

export function useTodoContext() {
	return useContext(TodoContext)!;
}