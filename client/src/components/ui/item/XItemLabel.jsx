import classNames from 'classnames';
import './style.css';
export function XItemLabel({
	tag = 'div',
	children,
	overline = false,
	caption = false,
	header = false,
	lines = false,
}) {
	const Tag = tag;
	return (
		<Tag
			className={classNames('x-item__label', {
				'x-item__label--overline': overline,
				'x-item__label--caption': caption,
				'x-item__label--header': header,
				'x-item__label--lines': lines,
			})}
		>
			{children}
		</Tag>
	);
}
