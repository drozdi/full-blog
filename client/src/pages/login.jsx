import { LoginForm } from './components/login-form';

export function Login() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 min-h-full max-w-2xl m-auto">
			<h1 className="text-2xl">Авторизация</h1>
			<div className="border border-gray-300 p-5 w-full max-w-sm">
				<LoginForm />
			</div>
		</div>
	);
}
