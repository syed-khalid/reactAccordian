import "./App.css";

import Accordian from "./components/Accordian";

import { data } from "./assets/data";
import { useState } from "react";

function App() {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}

		setSelected(i);
	};

	return (
		<div className='App'>
			<div className='accordian'>
				{data.map((item, i) => (
					<Accordian
						key={i}
						item={item}
						i={i}
						toggle={toggle}
						selected={selected}
					/>
				))}
			</div>
		</div>
	);
}

export default App;

