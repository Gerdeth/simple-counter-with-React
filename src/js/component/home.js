import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClock,
	faCloudShowersHeavy
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/index.scss";

//include images into your bundle

//create your first component
let colors = ["purple", "blue", "orange", "yellow", "red", "green", "orange"];

export function Home(props) {
	function ranColor() {
		let index = Math.floor(Math.random() * colors.length);
		let colOutput = colors[index];

		return colOutput;
	}
	return (
		<div className="text-center mt-5 d-flex clock-container }">
			<div style={{ background: ranColor() }}>
				<FontAwesomeIcon icon={faClock} />
			</div>
			<div style={{ background: ranColor() }}>{props.char1}</div>
			<div style={{ background: ranColor() }}>{props.char2}</div>
			<div style={{ background: ranColor() }}>{props.char3}</div>
			<div style={{ background: ranColor() }}>{props.char4}</div>
			<div style={{ background: ranColor() }}>{props.char5}</div>
			<div style={{ background: ranColor() }}>{props.char6}</div>
		</div>
	);
}
Home.propTypes = {
	char1: PropTypes.string,
	char2: PropTypes.string,
	char3: PropTypes.string,
	char4: PropTypes.string,
	char5: PropTypes.string,
	char6: PropTypes.string
};
