import { repUser } from '../api/rep';
import { ROLE } from '../constants';
export const server = {
	async autorize(authLogin, authPassword) {
		const users = await repUser.list().then((res) => res.json());
		const user = users.find((user) => user.login === authLogin);
		if (!user) {
			return {
				error: 'Пользователь ненайден',
				res: null,
			};
		}
		if (authPassword !== user.password) {
			return {
				error: 'Неверный пароль',
				res: null,
			};
		}
		return {
			error: null,
			res: user,
		};
	},
	async register(regLogin, regPassword) {
		const existedUser = await repUser.login(regLogin).then((res) => res.json());
		if (existedUser.length) {
			return {
				error: 'Такой логин уже занят',
				res: null,
			};
		}

		const user = await repUser
			.post({
				login: regLogin,
				password: regPassword,
				registered_at: new Date()
					.toISOString()
					.substring(0, 16)
					.replace('T', ' '),
				role_id: ROLE.READER,
			})
			.then((res) => res.json());

		return {
			error: null,
			res: {
				id: user.id,
				login: user.login,
				role_id: user.role_id,
			},
		};
	},
};
