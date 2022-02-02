import React, { useState, useCallback } from "react";

import DemoOutput from "./components/DemoOutput";

function App() {
	const [pShown, setPShown] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);

	console.log("App running");

	const clickHandler = useCallback(() => {
		if (allowToggle) {
			setPShown((lastState) => {
				return !lastState;
			});
		}
	}, [allowToggle]);

	const allowToggleHandler = () => {
		setAllowToggle(true);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<DemoOutput show={pShown} />
			<button onClick={clickHandler}>Click me!</button>
			<button onClick={allowToggleHandler}>Toggle paragraph!</button>
		</div>
	);
}

export default App;
