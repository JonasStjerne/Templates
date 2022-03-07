import App from './App.svelte';

var app = new App({
	target: document.getElementById("app"),
  	hydrate: true
});

export default app;