import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../../../actions';
import { ROLE } from '../../../../constants';
import { selectUserLogin, selectUserRole } from '../../../../selectors';
import { XBtn, XIcon } from '../../../ui';
export function ControlPanel() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const onLogout = () => {
		dispatch(logout());
		sessionStorage.removeItem('userData');
	};
	const isAdmin = [ROLE.ADMIN].includes(roleId);
	return (
		<div className="flex flex-col gap-2">
			{roleId === ROLE.GUEST ? (
				<XBtn size="sm" outline tonal block flat to="/login">
					Войти
				</XBtn>
			) : (
				<div className="flex justify-center items-center">
					<div className="flex-1 text-center">{login}</div>
					<XBtn flat icon="mdi-logout" onClick={onLogout} />
				</div>
			)}

			<div className="flex gap-4 text-2xl px-2">
				<XIcon className="cursor-pointer" onClick={() => navigate(-1)}>
					mdi-skip-backward
				</XIcon>
				{isAdmin && (
					<>
						<Link to="/post">
							<XIcon>mdi-file-document-outline</XIcon>
						</Link>
						<Link to="/users">
							<XIcon>mdi-account-group</XIcon>
						</Link>
					</>
				)}
			</div>
		</div>
	);
}
