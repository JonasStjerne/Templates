<script>
	import { Router, Link, Route } from "svelte-routing";
	import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
	
	import Stripe from './Stripe/Products.svelte';
	import Dawa from './DAWA.svelte'
	

	export let url = "";
</script>
<Router url="{url}">
	<nav class="d-flex flex-row-reverse text-primary" style="gap: 2rem;">
	  <Link to="dawa">Address Autocomplete</Link>
	  <Link to="stripe">Stripe integration</Link>
	</nav>
	<div>
		<Route path="dawa" component="{Dawa}" />
	  <Route path="stripe" component="{Stripe}" />
	</div>
</Router>
