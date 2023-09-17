import { useThemeContext } from "../context/ThemeContext";
import { useTodoContext } from "../context/TodoContext";
import { Todo as TodoInterface} from "../interfaces/todo.interface";
import styles from "./Todos.css";

export default function Todo(props: TodoInterface) {
	let theme = useThemeContext();
	let darkTheme = theme[0]
	const {todos, setTodos} = useTodoContext();
	
	const deleteTodo = (position: number) => {
		const td = [...todos];
		td.splice(position, 1)
		setTodos(td);
	}
	
	return (
		<div class="flex rounded-md p-4 gap-10 shadow-md my-4 slide-in items-center" classList={{ "bg-white": !darkTheme(), "bg-slate-900": darkTheme(), "shadow-slate-600/50": darkTheme()}}>
			<input type="checkbox"class='cursor-pointer text-left text-xl w-6 h-6 accent-aux' checked={props.done}/>
			<p class="flex-1 text-l">{props.text}</p>
			
			<span
				class='material-symbols-outlined cursor-pointer rounded-md bg-[#fc3503aa] p-2 shadow-md'
				classList={{ "bg-[#fc3503aa]": !darkTheme(), "bg-blue-900": darkTheme(), "shadow-blue-600/50": darkTheme()}}
				onclick={() => deleteTodo(props.position!)}
			>
				delete
			</span>
		</div>
	)
}