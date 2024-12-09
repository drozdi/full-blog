import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment } from '../../actions';
import { repComment } from '../../api/rep';
import { XBtn } from '../../components/ui';
import { ROLE } from '../../constants';
import { selectUserId, selectUserRole } from '../../selectors';
import { Comment } from './comment';

export function Comments({ comments, postId }) {
	const [newComment, setNewComment] = useState('');
	const author_id = useSelector(selectUserId);
	const userRole = useSelector(selectUserRole);
	const dispatch = useDispatch();
	const isGuest = userRole === ROLE.GUEST;
	useEffect(() => {}, []);
	const onNewCommentAdd = (content) => {
		dispatch(
			addComment(repComment, { author_id, post_id: parseInt(postId, 10), content }),
		);
		setNewComment('');
	};
	return (
		<div className="max-w-lg m-auto flex flex-col">
			{!isGuest && (
				<div className="flex w-full mt-5">
					<textarea
						className="flex-1 border border-gray-500 rounded h-32 p-5 resize-none text-xl"
						name="comment"
						value={newComment}
						placeholder="Комментарий..."
						onChange={({ target }) => setNewComment(target.value)}
					></textarea>
					<XBtn
						icon="mdi-note-plus"
						disabled={!newComment}
						onClick={() => onNewCommentAdd(newComment)}
					/>
				</div>
			)}
			{comments.map((comment) => (
				<Comment key={comment.id} {...comment} />
			))}
		</div>
	);
}
