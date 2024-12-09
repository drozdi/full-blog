import { dbEndpoint } from '../../config';
import { BaseRepository } from '../../utils/repository';

export const repRole = new BaseRepository(`${dbEndpoint}/roles`);
