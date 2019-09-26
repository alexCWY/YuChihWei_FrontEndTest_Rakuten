import React from "react";
import PropTypes from "prop-types";

import "./cell.css";

const propTypes = {
	title: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	image: PropTypes.string,
	backgroundColor: PropTypes.string,
	isEditable: PropTypes.bool,
	onImgClick: PropTypes.func,
};
const defaultProps = {
	isEditable: false,
	onImgClick: () => { },
};

const Cell = ({
	title,
	text,
	image,
	backgroundColor,
	isEditable,
	onImgClick,
}) => {
	const _renderTitle = () => {
		if (title) {
			return (
				<h3 className={"Cell-header"}>{title}</h3>
			);
		}
	}

	const _renderText = () => {
		if (text) {
			return (
				<div
					className={"Cell-p"}
					contentEditable={`${isEditable}`}
					suppressContentEditableWarning="true"
				>
					{text}
				</div>
			);
		}
	}

	const _renderImage = () => {
		if (image) {
			return (
				<div style={{ "textAlign": "center" }}>
					<button className={"Cell-btn"}>
						<img
							className="Cell-img"
							src={image}
							alt="logo"
							onClick={onImgClick}
						/>
					</button>
				</div>
			);
		}
	}

	return (
		<div className={"Cell-container"} style={{ backgroundColor }}>
			{_renderTitle()}
			{_renderText()}
			{_renderImage()}
		</div>
	);
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default Cell;
