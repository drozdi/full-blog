import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { XIcon } from '../../../ui';

export function Logo({ className }) {
	return (
		<Link className={classNames('flex', className)} to="/">
			<XIcon className="text-7xl/[1]">mdi-xml</XIcon>
			<div>
				<div className="text-5xl/[1] font-semibold">Блог</div>
				<div className="text-lg/[1] font-bold">веб-разработчика</div>
			</div>
		</Link>
	);
}
