import React from "react";
import PropTypes from "prop-types";
import "./row.css";

import Cell from "../cell";

const propTypes = {
	titles: PropTypes.arrayOf(PropTypes.string),
	backgroundColor: PropTypes.string,
};
const defaultProps = {
	titles: ["No.", "Name", "Phone", "Email", "edit", "delete"],
	backgroundColor: "#f2f2f2",
};

const TitleRow = ({ titles, backgroundColor }) => {
	return (
		<div className={"Row-container"}>
			{titles.map((title, index) => {
				return <Cell
					key={title + index}
					title={title}
					backgroundColor={backgroundColor}
				/>
			})}
		</div>
	);
};

TitleRow.propTypes = propTypes;
TitleRow.defaultProps = defaultProps;

export default TitleRow;
