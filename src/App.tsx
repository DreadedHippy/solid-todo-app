import { createSignal, type Component, For } from 'solid-js';

import logo from './logo.svg';
// import styles from './App.module.css';
import Todo from './components/Todo';
import Dates from './components/Dates';
import { useTodoContext } from './context/TodoContext';
import { useThemeContext } from './context/ThemeContext';

const App: Component = () => {
  const theme = useThemeContext();
  const darkTheme = theme[0];
  const {toggleTheme} = theme[1];


  const {todos, setTodos} = useTodoContext();
  const [value, setValue] = createSignal("");

  const addTodo = () => {
    let todo = value();
    if (todo.length !== 0) {
      setTodos([{text: todo, done: false}, ...todos]);
      setValue("");
    }
  }

  return (
    <div class="container m-auto p-8 w-[100vw]" classList={{"dark": darkTheme()}}>

      <header
        class='my-4 p-2 text-xl flex items-center justify-between gap-4'
      >
        <h1 class="font-bold">SolidJS Todo-App</h1>
        
        <span
          class='material-symbols-outlined cursor-pointer'
          onclick={toggleTheme}
        >
          {darkTheme() ? "light_mode" : "dark_mode" }
        </span>
      </header>

      <span id="todo-input" class='grid grid-cols-12 mb-10 gap-10 inline-block'>
        <input
          type="text" id='subscription-email-text-field' value={value()} onchange={(e) => setValue(e.target.value)}
          class="align-top inline-block h-12 m-0 col-span-11 py-2 px-2 shadow-md outline-none border-b-2 border-black rounded-md"
          classList={{"bg-blue-950": darkTheme()}}
        />
        <button
          id='subscribe-button' class="inline-block border-1 col-span-1 m-0 shadow-md"
          onClick={addTodo}
          classList={{"btn": !darkTheme(), "btn-dark": darkTheme()}}
        >
          <span
            class='material-symbols-outlined cursor-pointer size-s align-middle text-2xl font-bold'
          >            add
          </span>
        </button>
      </span>
      <Dates />
      
      <h2 class="text-l font-bold">Todos</h2>
      <hr />
      <For each={todos}>
        {(todo, idx) => (
          <Todo done={todo.done} text={todo.text} position={idx()}/>
        )}
      </For>
      {/* <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1> */}
    </div>
  )
};

export default App;
