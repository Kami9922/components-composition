import React from "react";
import PropTypes from "prop-types";
import Information from "../Information/Information";
import Field from "../Field/Field";

const GameLayout = (props) => {
	return (
		<>
			<Information />
			<Field />
		</>
	);
};

GameLayout.propTypes = {};

export default GameLayout;
