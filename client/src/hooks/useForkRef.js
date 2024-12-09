import { useMemo } from 'react';

export function setRef(ref, value = null) {
	if (typeof ref === 'function') {
		ref(value);
	} else if (ref) {
		ref.current = value;
	}
}
export function useForkRef(...refs) {
	return useMemo(() => {
		if (refs.every((ref) => ref == null)) {
			return null;
		}
		return (instance) => {
			refs.forEach((ref) => {
				setRef(ref, instance);
			});
		};
	}, [refs]);
}
