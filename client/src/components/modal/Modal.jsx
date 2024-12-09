import { useSelector } from 'react-redux';
import {
	selectModalIsOpen,
	selectModalOnCancel,
	selectModalOnConfirm,
	selectModalText,
} from '../../selectors';
import { XBtn } from '../ui';
export function Modal() {
	const isOpen = useSelector(selectModalIsOpen);
	const text = useSelector(selectModalText);
	const onConfirm = useSelector(selectModalOnConfirm);
	const onCancel = useSelector(selectModalOnCancel);

	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed top-0 left-0 right-0 bottom-0 z-50">
			<div className="absolute w-full h-full bg-overlay -z-10"></div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white border-2 border-black p-4 text-center">
				<h3 className="text-3xl">{text}</h3>
				<div className="flex justify-center gap-4 mt-8">
					<XBtn width="120px" color="positive" onClick={onConfirm}>
						Да
					</XBtn>
					<XBtn width="120px" color="secondary" onClick={onCancel}>
						Отмена
					</XBtn>
				</div>
			</div>
		</div>
	);
}
