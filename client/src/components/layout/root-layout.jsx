import { Outlet } from 'react-router-dom';
import { Footer } from '../footer';
import { Header } from '../header';

export const RootLayout = () => {
	return (
		<div className="container min-h-full flex flex-col justify-between m-auto relative bg-white">
			<Header className="fixed top-0 container z-40" />
			<main className="pt-32 pb-5">
				<Outlet />
			</main>
			<Footer className="" />
		</div>
	);
};
