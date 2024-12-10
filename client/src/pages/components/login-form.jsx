import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import * as yup from 'yup';
import { setUser } from '../../actions';
import { authApi } from '../../api';
import { useToast } from '../../components/toast';
import { XBtn, XInput } from '../../components/ui';
import { ROLE } from '../../constants';
import { useResetForm } from '../../hooks';
import { selectUserRole } from '../../selectors';

const loginFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(/^\w+$/, 'Неверно заполнен логин. Допускаются только буквы и цифры')
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup.string().required('Заполните пароль'),
});

export const LoginForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			login: '',
			password: '',
		},
		resolver: yupResolver(loginFormSchema),
	});
	const toast = useToast();
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();
	useResetForm(reset);
	const roleId = useSelector(selectUserRole);

	if (roleId !== ROLE.GUEST) {
		return <Navigate to="/" />;
	}

	const onSubmit = async ({ login, password }) => {
		setIsLoading(true);
		authApi.login({ login, password }).then(({ error, user }) => {
			setIsLoading(false);
			if (error) {
				toast.show({
					children: error,
					color: 'negative',
				});
				return;
			}
			sessionStorage.setItem('userData', JSON.stringify(user));
			dispatch(setUser(user));
		});
	};

	const formError = errors?.login?.message || errors?.password?.message;

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6 ">
			<div className="mt-2">
				<XInput
					type="text"
					outline={true}
					label="Login"
					placeholder="Login"
					{...register('login', { required: true })}
				/>
				{errors.login && (
					<div className="text-negative max-w-64">{errors.login?.message}</div>
				)}
			</div>
			<div className="mt-2">
				<XInput
					type="password"
					outline={true}
					label="Password"
					placeholder="Password"
					{...register('password', { required: true })}
				/>
				{errors.password && (
					<div className="text-negative max-w-64">
						{errors.password?.message}
					</div>
				)}
			</div>
			<XBtn color="primary" type="submit" disabled={!!(isLoading || formError)}>
				{isLoading ? 'Loading...' : 'Sign In'}
			</XBtn>
			<XBtn text={true} flat={true} to="/registration">
				Регистрация
			</XBtn>
		</form>
	);
};
