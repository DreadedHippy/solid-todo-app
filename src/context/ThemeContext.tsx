import { createContext, createSignal, useContext } from "solid-js";
import { createStore } from 'solid-js/store'

export const DarkThemeContext = createContext<any>();

export function DarkThemeContextProvider(props: any) {
	const root = document.getElementById('root');
	root?.classList.add("duration-150");
	root?.classList.add("h-[100vh]");
	const [darkTheme, setDarkTheme] = createSignal(false),
		theme = [
			darkTheme,
			{
				toggleTheme() {
					root?.classList.toggle("bg-black")
					setDarkTheme((d) => !d)
				}
			}
		]

	return (
		<DarkThemeContext.Provider value={theme}>
			{props.children}
		</DarkThemeContext.Provider>
	)

}

export function useThemeContext() {
	return useContext(DarkThemeContext)!;
}