import { h } from 'preact';
import style from './style.css';
import { useEffect, useState } from 'preact/hooks';

const Home = () => {
	const [time, setTime] = useState(Date.now());
	const [count, setCount] = useState(0);

	useEffect(() => {
		let timer = setInterval(() => setTime(Date.now()), 1000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div class={style.home}>
			<a href="https://preactjs.com">
				<img src="../../assets/preact-logo.svg" alt="Preact Logo" height="160" width="160" />
			</a>
			<p>
				<button onClick={() => setCount(count => count + 1)}>Click Me</button>{' '}
				Clicked {count} times.
			</p>
		</div>
	);
};

const Resource = props => {
	return (
		<a href={props.link} class={style.resource}>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</a>
	);
};

export default Home;
