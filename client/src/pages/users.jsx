import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { usersApi } from '../api';
import { Loader, PrivateContent } from '../components';
import { XItem, XItemLabel, XItemSection, XList } from '../components/ui';
import { ROLE } from '../constants';
import { selectUserRole } from '../selectors';
import { UserRow } from './components/user-row';

export const UsersPage = () => {
	const roleId = useSelector(selectUserRole);
	const [users, setUsers] = useState([]);
	const [roles, setRoles] = useState([]);
	const [reload, setReload] = useState([]);
	const [isLoading, setLoading] = useState(false);
	useEffect(() => {
		async function fetchData() {
			if (![ROLE.ADMIN].includes(roleId)) {
				return;
			}
			setLoading(true);

			const users = await usersApi.getUsers();
			const roles = await usersApi.getRoles();
			setUsers(users.data);
			setRoles(roles.data);
			setLoading(false);
		}
		fetchData();
	}, [reload, roleId]);

	const onUserRemove = (id) => {
		if (![ROLE.ADMIN].includes(roleId)) {
			return;
		}
		const result = window.confirm('Удалить пользователя?');
		if (result === true) {
			usersApi.delete(id).then(() => setReload(!reload));
		}
	};
	if (isLoading) {
		return <Loader />;
	}
	return (
		<div className="max-w-2xl m-auto">
			<PrivateContent access={[ROLE.ADMIN]}>
				<XItemLabel tag="h1" header>
					Пользователи
				</XItemLabel>
				<XList separator>
					<XItem>
						<XItemSection>
							<XItemLabel>Логин</XItemLabel>
						</XItemSection>
						<XItemSection>
							<XItemLabel>Дата регистрации</XItemLabel>
						</XItemSection>
						<XItemSection>
							<XItemLabel>Роль</XItemLabel>
						</XItemSection>
						<XItemSection side></XItemSection>
					</XItem>
					{users.map(({ id, login, registered_at, role_id }) => (
						<UserRow
							key={id}
							id={id}
							login={login}
							registered_at={registered_at}
							role_id={role_id}
							roles={roles.filter(({ id }) => id !== ROLE.GUEST)}
							onRemove={() => onUserRemove(id)}
						/>
					))}
				</XList>
			</PrivateContent>
		</div>
	);
};
