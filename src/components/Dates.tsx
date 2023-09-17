import { For } from "solid-js";
import { useThemeContext } from "../context/ThemeContext";

export default function Dates() {
	let theme = useThemeContext();
	let darkTheme = theme[0]
	let dayBefore = new Date().getTime() - (1 * 1000 * 60 * 60 * 24);
	let dates: Date[] = [];
	
	for (let i = 0; i < 7; i ++) {
		dates.push(new Date(dayBefore));
		dayBefore += (1 * 1000 * 60 * 60 * 24);
	}
	// const dates = new Date().getDay();
	// console.log(dates)
	return(
		<div class="grid grid-cols-12 gap-6 mb-8">
			<For each={dates}>
				{(date, idx) => (
					<div class="rounded-md tex-black text-center col-span-1 aspect-square p-2 shadow-md border-[#808080] border-1"
						classList={{"scale-125": idx() === 1, "bg-white": !darkTheme(), "bg-slate-900": darkTheme(), "shadow-slate-600/50": darkTheme()}}
					>
						<p class="text-ellipsis overflow-hidden">{date.toLocaleDateString('en-us', {weekday:'long'})}</p>
						<br />
						<h2 class="font-bold">{date.getDate()}</h2>
					</div>
				)}
			</For>
			{/* <p>HAHAHA DATE</p> */}
		</div>
	);
}