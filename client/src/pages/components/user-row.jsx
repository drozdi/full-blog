import { useState } from 'react';
import { repUser } from '../../api/rep';
import { XBtn, XItem, XItemSection } from '../../components/ui';
export function UserRow({
	login,
	registered_at,
	role_id,
	id,
	roles,
	onRemove = () => {},
}) {
	const [initialRoleId, setInitialRoleId] = useState(role_id);
	const [selectedRoleId, setSelectedRoleId] = useState(role_id);
	const onRoleChange = ({ target }) => {
		setSelectedRoleId(Number(target.value));
	};
	const onRoleSave = (id, role_id) => {
		repUser.patch(id, { role_id }).then(() => setInitialRoleId(role_id));
	};
	const isSaveButtonDisabled = selectedRoleId === initialRoleId;
	return (
		<XItem>
			<XItemSection>{login}</XItemSection>
			<XItemSection>{registered_at}</XItemSection>
			<XItemSection>
				<select className="p-2" value={selectedRoleId} onChange={onRoleChange}>
					{roles.map(({ id: roleId, name: roleName }) => (
						<option key={roleId} value={roleId}>
							{roleName}
						</option>
					))}
				</select>
			</XItemSection>
			<XItemSection side>
				<XBtn.Group round flat>
					<XBtn
						icon="mdi-content-save-all"
						title="Сохранить"
						disabled={isSaveButtonDisabled}
						onClick={() => onRoleSave(id, selectedRoleId)}
					/>
					<XBtn icon="mdi-delete" onClick={onRemove} title="Удалить" />
				</XBtn.Group>
			</XItemSection>
		</XItem>
	);
}
