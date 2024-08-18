import React from "react";
import PropTypes from "prop-types";
import FieldLayout from "./FieldLayout";

const Field = ({
	field,
	currentPlayer,
	setCurrentPlayer,
	setField,
	WIN_PATTERNS,
	setIsGameEnded,
	isGameEnded,
	setIsDraw,
}) => {
	return (
		<FieldLayout
			field={field}
			setField={setField}
			currentPlayer={currentPlayer}
			setCurrentPlayer={setCurrentPlayer}
			WIN_PATTERNS={WIN_PATTERNS}
			setIsGameEnded={setIsGameEnded}
			isGameEnded={isGameEnded}
			setIsDraw={setIsDraw}
		/>
	);
};

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.array,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.string,
	WIN_PATTERNS: PropTypes.array,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.bool,
	setIsDraw: PropTypes.bool,
};

export default Field;
