import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		proposition1: 'Il n\'est pas possible de manger des végétaux sans exploiter ou tuer un animal.',
		proposition2: 'Le véganisme est impossible',
	}
});

export default app;