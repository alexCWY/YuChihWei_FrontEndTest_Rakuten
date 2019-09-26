function isEmail(props, propName, componentName) {
	const regex = /^\w{1,63}@[a-zA-Z0-9]{2,63}\.[a-zA-Z]{2,63}(\.[a-zA-Z]{2,63})?$/;

	if (!regex.test(props[propName])) {
		return new Error(`Invalid prop ${propName} passed to ${componentName}. Expected a valid email address.`);
	}
}

export {
	isEmail,
}
