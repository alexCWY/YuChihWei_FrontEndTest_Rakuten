import React from "react";
import PropTypes from "prop-types";
import "./row.css";

import Cell from "../cell";

import logo from "../../logo.svg";

import {
	isEmail,
} from "../../lib/validations";

const propTypes = {
	user: PropTypes.shape({
		no: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
		email: isEmail,
	}),
	onClickEdit: PropTypes.func,
	onClickDelete: PropTypes.func,
};
const defaultProps = {
	onClickEdit: () => { },
	onClickDelete: () => { },
};

const UserRow = ({
	user,
	onClickEdit,
	onClickDelete,
}) => {
	const {
		no,
		name,
		phone,
		email,
		isEditable,
	} = user;

	return (
		<div className={"Row-container"}>
			<Cell text={no} isEditable={isEditable} />
			<Cell text={name} isEditable={isEditable} />
			<Cell text={phone} isEditable={isEditable} />
			<Cell text={email} isEditable={isEditable} />
			<Cell image={logo} onImgClick={onClickEdit.bind(this, no)} />
			<Cell image={logo} onImgClick={onClickDelete.bind(this, no)}/>
		</div>
	);
};

UserRow.propTypes = propTypes;
UserRow.defaultProps = defaultProps;

export default UserRow;
