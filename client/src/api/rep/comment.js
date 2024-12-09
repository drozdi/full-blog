import { dbEndpoint } from '../../config';
import { BaseRepository } from '../../utils/repository';

export const repComment = new BaseRepository(`${dbEndpoint}/comments`);

repComment.find = async function (post_id) {
	return await this.query({
		nestedEndpoint: `?post_id=${post_id}`,
	});
};
