import { Navigate } from 'react-router-dom';
import { AuthLayout } from '../components/layout/auth-layout';
import { RootLayout } from '../components/layout/root-layout';
import { SignIn } from '../pages/auth/sign-in';
import { SignUp } from '../pages/auth/sign-ingn-up';

export const routes = () => [
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: '',
				element: <div>main</div>,
			},
			{
				path: '/auth',
				element: <AuthLayout />,
				children: [
					{
						path: '',
						element: <Navigate to="/auth/signIn" />,
					},
					{
						path: 'signIn',
						element: <SignIn />,
					},
					{
						path: 'signUp',
						element: <SignUp />,
					},
					{
						path: '*',
						element: <Navigate to="/auth/signIn" />,
					},
				],
			},
			{
				path: '/post',
				children: [
					{
						path: '',
						element: <div>post</div>,
					},
					{
						path: ':id',
						element: <div>post</div>,
					},
					{
						path: ':id/edit',
						element: <div>post edit</div>,
					},
				],
			},
		],
	},
	{
		path: '*',
		element: <div>Not Found</div>,
	},
];

/*return (
		<div className="w-full h-full grid grid-cols-1 grid-rows-layout">
			<Header className="row-start-1 row-end-2" />
			<main className="row-start-2 row-end-3">
				<Routes>
					<Route path="/login" element={<div>login</div>} />
					<Route path="/register" element={<div>register</div>} />
					<Route path="/post" element={<div>post</div>} />
					<Route path="/post/:id" element={<div>post</div>} />
					<Route path="/post/:id/edit" element={<div>post edit</div>} />
					<Route path="*" element={<div>Not Found</div>} />
				</Routes>
			</main>
			<Footer className="row-start-3 row-end-4" />
		</div>
	);*/
