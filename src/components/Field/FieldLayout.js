import React from "react";
import PropTypes from "prop-types";
import styles from "./../../css/field.module.css";

const FieldLayout = (props) => {
	return (
		<div>
			<div className={styles["game-sector"]}></div>
			<div className={styles["game-sector"]}></div>
			<div className={styles["game-sector"]}></div>
			<div className={styles["game-sector"]}></div>
			<div className={styles["game-sector"]}></div>
			<div className={styles["game-sector"]}></div>
			<div className={styles["game-sector"]}></div>
			<div className={styles["game-sector"]}></div>
			<div className={styles["game-sector"]}></div>
		</div>
	);
};

FieldLayout.propTypes = {};

export default FieldLayout;
