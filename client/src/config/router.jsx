import { RootLayout } from '../components/layout/root-layout';
import { ERROR } from '../constants';
import { Login } from '../pages/login';
import { MainPage } from '../pages/main';
import { PostPage } from '../pages/post';
import { Registration } from '../pages/registration';
import { UsersPage } from '../pages/users';

export const routes = () => [
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <MainPage />,
			},
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'registration',
				element: <Registration />,
			},
			{
				path: 'users',
				element: <UsersPage />,
			},
			{
				path: '/post',
				children: [
					{
						path: '',
						element: <PostPage />,
					},
					{
						path: ':id',
						element: <PostPage />,
					},
					{
						path: ':id/edit',
						element: <PostPage />,
					},
				],
			},
			{
				path: '404',
				element: (
					<div className="flex flex-col items-center text-xl">
						<h2 className="text-2xl">Ошибка</h2>
						<div>{ERROR.PAGE_NOT_EXIST}</div>
					</div>
				),
			},
		],
	},
	{
		path: '*',
		element: (
			<div className="flex flex-col items-center text-xl">
				<h2 className="text-2xl">Ошибка</h2>
				<div>{ERROR.PAGE_NOT_EXIST}</div>
			</div>
		),
	},
];
