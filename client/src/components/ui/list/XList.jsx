import classNames from 'classnames';
import { createElement as h, useMemo } from 'react';
import './style.css';

const roleAttrExceptions = ['ul', 'ol'];
export function XList({
	tag = 'div',
	children,
	className,
	role = null,
	dense = false,
	separator = false,
	bordered = false,
}) {
	const aRole = useMemo(
		() => (roleAttrExceptions.includes(tag) ? null : (role ?? 'list')),
		[tag, role],
	);
	return h(
		tag,
		{
			className: classNames('x-list', className, {
				'x-list--dense': dense,
				'x-list--separator': separator,
				'x-list--bordered': bordered,
			}),
			role: aRole,
		},
		children,
	);
}
