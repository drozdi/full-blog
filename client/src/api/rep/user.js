import { dbEndpoint } from '../../config';
import { BaseRepository } from '../../utils/repository';

export const repUser = new BaseRepository(`${dbEndpoint}/users`);

repUser.login = async function (login) {
	return await this.query({
		nestedEndpoint: `?login=${login}`,
	});
};
