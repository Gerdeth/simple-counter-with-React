//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Home2 } from "./component/home2.js";

//render your react application
var counter = 0;
var seconds = "";

var myTimer = () => {
	counter += 1;
	seconds = "000000" + counter;
	seconds = seconds.slice(-6);

	ReactDOM.render(
		<Home2
			char1={seconds.charAt(0)}
			char2={seconds.charAt(1)}
			char3={seconds.charAt(2)}
			char4={seconds.charAt(3)}
			char5={seconds.charAt(4)}
			char6={seconds.charAt(5)}
		/>,
		document.querySelector("#app")
	);
};
setInterval(myTimer, 1000);
