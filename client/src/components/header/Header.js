import classNames from 'classnames';
import { ControlPanel } from './components/control-panel/ControlPanel';
import { Logo } from './components/logo/Logo';
export function Header({ className }) {
	return (
		<header
			className={classNames(
				'flex justify-between items-center py-4 px-10 bg-white shadow-header',
				className,
			)}
		>
			<Logo />
			<div className="italic">
				Веб-технологии
				<br />
				Написание кода
				<br />
				Разбор ошибок
			</div>
			<ControlPanel />
		</header>
	);
}
