import { XSpinner } from '../ui';
export function Loader() {
	return (
		<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-36 h-36">
			<XSpinner size="10em" thickness={3} color="primary" />
		</div>
	);
}
