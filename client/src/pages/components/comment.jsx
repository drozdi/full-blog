import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal, removeComment } from '../../actions';
import { XBtn, XIcon } from '../../components/ui';
import { ROLE } from '../../constants';
import { selectUserRole } from '../../selectors';

export function Comment({ post_id, id, author, content, published_at }) {
	const dispatch = useDispatch();
	const userRole = useSelector(selectUserRole);
	const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);
	const onCommentRemove = () => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeComment(post_id, id));
					dispatch(closeModal());
				},
				onCancel: () => dispatch(closeModal()),
			}),
		);
	};

	return (
		<div className="flex jusstify-between mt-2">
			<div className="flex-1 border border-black p-2">
				<div className="flex justify-between">
					<div className="flex">
						<XIcon className="mr-2">mdi-account</XIcon>
						{author}
					</div>
					<div className="flex">
						<XIcon className="mr-2">mdi-calendar-text-outline</XIcon>
						{published_at}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			{isAdminOrModerator && (
				<XBtn icon="mdi-delete" onClick={onCommentRemove} title="Удалить" />
			)}
		</div>
	);
}
