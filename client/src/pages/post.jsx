import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMatch, useNavigate, useParams } from 'react-router-dom';
import { loadPost, resetPost, setPost } from '../actions';
import { repComment, repPost, repUser } from '../api/rep';
import { Loader, PrivateContent, useToast } from '../components';
import { ROLE } from '../constants';
import { selectPost } from '../selectors';
import { Comments } from './components/comments';
import { PostContent } from './components/post-content';
import { PostForm } from './components/post-form';
export function PostPage() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const isCreating = !!useMatch('/post');
	const isEditing = !!useMatch('/post/:id/edit');
	const { id } = useParams();
	const post = useSelector(selectPost);
	const toast = useToast();
	const navigate = useNavigate();
	useLayoutEffect(() => {
		dispatch(resetPost());
	}, [dispatch, isCreating]);

	useEffect(() => {
		if (isCreating) {
			setIsLoading(false);
			return;
		}
		dispatch(loadPost(repPost, id)).then(async (post) => {
			if (!post.id) {
				toast.show?.({
					children: 'Статья не найдена',
					color: 'negative',
				});
				navigate(`/404`);
			}
			const comments = await repComment.find(post.id).then((res) => res.json());
			const users = await repUser.list().then((res) => res.json());
			post.comments = comments.map((comment) => {
				comment.author =
					users.find((u) => u.id === comment.author_id)?.login || 'Гость';
				return comment;
			});
			dispatch(setPost(post));
			setIsLoading(false);
		});
	}, [isCreating, dispatch, toast, id, navigate]);
	if (isLoading) {
		return <Loader />;
	}
	return (
		<div className="flex flex-col items-center justify-between min-h-full ">
			{isCreating || isEditing ? (
				<PrivateContent access={[ROLE.ADMIN]}>
					<PostForm post={post} />
				</PrivateContent>
			) : (
				<>
					<PostContent post={post} />
					<Comments comments={post.comments} postId={id} />
				</>
			)}
		</div>
	);
}
