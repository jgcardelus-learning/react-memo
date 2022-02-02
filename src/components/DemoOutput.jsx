import React from "react";

const DemoOutput = (props) => {
	return <p>{props.show ? "Hello" : ""}</p>;
};

export default React.memo(DemoOutput);
