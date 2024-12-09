import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { setUser } from './actions';
import { Modal } from './components';
import { ToastProvider } from './components/toast';
import { routes } from './config/router';

function App() {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		const currentUserDataJSON = sessionStorage.getItem('userData');
		if (!currentUserDataJSON) {
			return;
		}
		const currentUserData = JSON.parse(currentUserDataJSON);
		dispatch(setUser(currentUserData));
	}, [dispatch]);

	const routesElement = useRoutes(routes());
	return (
		<ToastProvider>
			<Modal />
			{routesElement}
		</ToastProvider>
	);
}

export default App;
