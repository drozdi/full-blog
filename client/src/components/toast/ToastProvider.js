import { useRef } from 'react';
import { XToast } from '../ui';
import { ToastContext } from './ToastContext';

export function ToastProvider({ children }) {
	const toast = useRef(null);
	return (
		<>
			<XToast
				underlined={true}
				closable={true}
				square={true}
				life={6000}
				position="right-top"
				ref={toast}
			/>
			<ToastContext.Provider value={toast}>{children}</ToastContext.Provider>
		</>
	);
}
