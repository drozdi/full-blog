import { RegistrationForm } from './components/registration-form';

export function Registration() {
	return (
		<div className="flex flex-col justify-center items-center gap-4 min-h-full max-w-2xl m-auto">
			<h1 className="text-2xl">Регистрация</h1>
			<div className="border border-gray-300 p-5 w-full max-w-sm">
				<RegistrationForm />
			</div>
		</div>
	);
}
