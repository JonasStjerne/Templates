<script>
import { empty, prevent_default } from "svelte/internal";

	let loading = false;
	let autocompleteData = [];
	let search;
	function handleSearch() {
		if (loading) return
		loading = true;
		fetch(`https://api.dataforsyningen.dk/adresser?q=${search}`)
		.then(response => response.json().then(data => {
			autocompleteData = data;
			loading = false;
		}) 
		
		)
	}

	function emptyFun(){}
</script>

<form  autocomplete="off" on:submit|preventDefault={emptyFun}>
	<input bind:value={search} on:input={!loading && handleSearch} type="text">
</form>
{#each autocompleteData as address  }
	<div>
	<p>{address.adressebetegnelse}</p>
	</div>
{/each}