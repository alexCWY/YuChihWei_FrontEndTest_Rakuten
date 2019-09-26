import React, { useState } from 'react';

import './App.css';

import TitleRow from "./components/title-row";
import UserRow from "./components/user-row";

const DATA = [
	{
		no: 1,
		name: "test",
		phone: "132456",
		email: "test@email.com"
	},
	{
		no: 2,
		name: "test",
		phone: "132456",
		email: "test@email.com"
	},
	{
		no: 3,
		name: "test",
		phone: "132456",
		email: "test@email.com"
	},
	{
		no: 4,
		name: "test",
		phone: "132456",
		email: "test@email.com"
	},
	{
		no: 5,
		name: "test",
		phone: "132456",
		email: "test@email.com"
	}
];

function App() {
	const _data = DATA.map(user => {
		return {
			...user,
			isEditable: false
		}
	});

	const [users, setUsers] = useState(_data);

	const _handleClickEdit = (no) => {
		const _users = users.map(user => {
			if (user.no === no) {
				user.isEditable = !user.isEditable;
			}

			return user;
		});

		setUsers(_users);
	}

	const _handleClickDelete = (no) => {
		const _users = users.filter(user => user.no !== no);

		setUsers(_users);
	}

	return (
		<div className="App">
			<TitleRow />
			{
				users.map((user, index) => {
					return <UserRow
						key={user.name + index}
						user={user}
						onClickEdit={_handleClickEdit}
						onClickDelete={_handleClickDelete}
					/>
				})
			}
		</div>
	);
}

export default App;
