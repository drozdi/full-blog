import { useSelector } from 'react-redux';
import { ERROR } from '../../constants';
import { selectUserRole } from '../../selectors';

export const PrivateContent = ({ children, access = [] }) => {
	const role = useSelector(selectUserRole);
	const error = access.includes(role) ? null : ERROR.ACCESS_DENIED;
	return error ? (
		<div className="flex flex-col items-center text-xl">
			<h2 className="text-2xl">Ошибка</h2>
			<div>{error}</div>
		</div>
	) : (
		children
	);
};
