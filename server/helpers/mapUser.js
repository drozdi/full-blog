module.exports = function (user) {
	return {
		id: user.id,
		login: user.login,
		role_id: user.role,
		registeredAt: user.createdAt,
	};
};
