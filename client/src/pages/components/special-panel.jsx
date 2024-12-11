import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { closeModal, openModal, removePost } from '../../actions';
import { XBtn, XIcon } from '../../components/ui';
import { ROLE } from '../../constants';
import { selectUserRole } from '../../selectors';
export function SpecialPanel({ className, publishedAt, id, prepend }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const roleId = useSelector(selectUserRole);
	const isAdmin = roleId === ROLE.ADMIN;
	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePost(id)).then(() => {
						navigate('/');
					});
					dispatch(closeModal());
				},
				onCancel: () => dispatch(closeModal()),
			}),
		);
	};
	return (
		<div className={classNames('flex justify-between items-center', className)}>
			<div>
				{publishedAt && <XIcon className="mr-2">mdi-calendar-text-outline</XIcon>}
				{publishedAt}
			</div>
			{isAdmin && (
				<XBtn.Group round>
					{prepend}
					{publishedAt && (
						<XBtn
							icon="mdi-delete"
							title="Удалить"
							onClick={() => onPostRemove(id)}
						/>
					)}
				</XBtn.Group>
			)}
		</div>
	);
}
