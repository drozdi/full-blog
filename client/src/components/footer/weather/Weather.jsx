import { useEffect, useState } from 'react';
export function Weather() {
	const [city, setCity] = useState('');
	const [temperature, setTemperature] = useState('');
	const [weather, setWeather] = useState('');

	useEffect(() => {
		fetch(
			'https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=49fba70acaf790e98fbf154d462344da',
		)
			.then((res) => res.json())
			.then(({ name, main, weather }) => {
				setCity(name);
				setTemperature(Math.round(main.temp));
				setWeather(weather[0].description);
			});
	}, []);

	return (
		<div>
			<div>
				{city},{' '}
				{new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}
			</div>
			<div>
				{temperature} градусов, {weather}
			</div>
		</div>
	);
}
