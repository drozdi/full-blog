import classNames from 'classnames';
import { memo, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const clickableTag = ['a', 'label'];
const disRoleTag = ['label'];
const disDisabledTag = ['div', 'span', 'a', 'label'];

export const XItem = memo(function XItem({
	tag = 'div',
	className,
	children,
	tabIndex = 0,
	dense,
	active,
	activeClass,
	disabled,
	role,
	onClick,
	LinkComponent = Link,
	to,
	href,
	target = '_self',
}) {
	const TagProp = useMemo(
		() => (to || href ? LinkComponent : tag),
		[to, href, tag, LinkComponent],
	);
	const isActionable = useMemo(
		() =>
			clickableTag.includes(TagProp) ||
			TagProp === LinkComponent ||
			typeof onClick === 'function',
		[TagProp, LinkComponent, onClick],
	);
	const isClickable = useMemo(
		() => !disabled && isActionable,
		[disabled, isActionable],
	);
	const attrs = useMemo(() => {
		const attrs = {
			className: classNames(
				'x-item',
				className,
				{
					'x-item--dense': dense,
					'x-item--active': active,
					'x-item--disabled': disabled,
					'x-item--clickable': isClickable,
				},
				active && !disabled ? activeClass : '',
			),
			role: disRoleTag.includes(TagProp) ? undefined : (role ?? 'listitem'),
			disabled: disabled,
		};
		if (isActionable) {
			attrs['aria-disabled'] = disabled;
		}
		if (isClickable) {
			attrs.tabIndex = disabled ? -1 : (tabIndex ?? -1);
		}
		if (disDisabledTag.includes(TagProp)) {
			delete attrs.disabled;
		}
		if (TagProp === LinkComponent) {
			if (!disabled) {
				attrs.to = to;
				attrs.href = href || to;
				attrs.target = target;
			}
		}
		return attrs;
	}, [
		disabled,
		to,
		href,
		target,
		tabIndex,
		role,
		dense,
		active,
		className,
		activeClass,
		isClickable,
		isActionable,
		TagProp,
		LinkComponent,
	]);
	return (
		<TagProp {...attrs}>
			<span className="x-item__backdor" />
			{children}
		</TagProp>
	);
});
