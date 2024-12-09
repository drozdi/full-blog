import { dbEndpoint } from '../../config';
import { BaseRepository } from '../../utils/repository';

export const repPost = new BaseRepository(`${dbEndpoint}/posts`);

repPost.find = async function (searchPhrase, page, limit) {
	return await this.query({
		nestedEndpoint: `?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	});
};
