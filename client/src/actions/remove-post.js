import { postsApi } from '../api';
export const removePost = (id) => (dispatch, getState) => postsApi.removePost(id);
