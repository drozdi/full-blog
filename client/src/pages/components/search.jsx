import { XIcon, XInput } from '../../components/ui';
export function Search({ className, search, onChange }) {
	return (
		<div className={className}>
			<XInput
				value={search}
				onChange={onChange}
				outline
				label="Найти"
				placeholder="Что ищим?"
				append={<XIcon className="text-3xl">mdi-magnify</XIcon>}
			/>
		</div>
	);
}
