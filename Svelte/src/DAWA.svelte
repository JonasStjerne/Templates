<script>
import * as dawaAutocomplete2 from 'dawa-autocomplete2';
import { onMount } from 'svelte';

	let loading = false;
	let autocompleteData = [];
	let search;
	function handleSearch() {
		if (loading) return
		loading = true;
		fetch(`https://api.dataforsyningen.dk/autocomplete?q=${search}`)
		.then(response => response.json().then(data => {
			autocompleteData = data;
			loading = false;  
		}) 
		
		)
	}

	function emptyFun(){}

	onMount(() => {
		var inputElm = document.getElementById('dawa-autocomplete-input');
		var component = dawaAutocomplete2.dawaAutocomplete(inputElm, {
			select: function(selected) {
				console.log('Valgt adresse: ' + selected.tekst);
  			}
		});
	})
</script>

<h1>Dawa address autocomplete</h1>
<!-- Dawa autocomplete using their api directly -->
<h3>SelfImplement</h3>
<form  autocomplete="off" on:submit|preventDefault={emptyFun}>
	<input bind:value={search} on:input={!loading && handleSearch} type="text">
</form>
{#each autocompleteData as address  }
	<div>
	<p>{address.forslagstekst}</p>
	</div>
{/each}

<!-- DAWA autocomplete using package -->
<h3>Using dawa package</h3>
<div class="autocomplete-container">
	<input type="search" id="dawa-autocomplete-input">
	<!-- Suggestions will appear here -->
</div>


<style>
	.autocomplete-container {
    /* relative position for at de absolut positionerede forslag får korrekt placering.*/
    position: relative;
    width: 100%;
    max-width: 30em;
}
 
.autocomplete-container input {
    /* Både input og forslag får samme bredde som omkringliggende DIV */
    width: 100%;
    box-sizing: border-box;
}
 
.dawa-autocomplete-suggestions {
    margin: 0.3em 0 0 0;
    padding: 0;
    text-align: left;
    border-radius: 0.3125em;
    background: #fcfcfc;
    box-shadow: 0 0.0625em 0.15625em rgba(0,0,0,.15);
    position: absolute;
    left: 0;
    right: 0;
    z-index: 9999;
    overflow-y: auto;
    box-sizing: border-box;
}
 
.dawa-autocomplete-suggestions .dawa-autocomplete-suggestion {
    margin: 0;
    list-style: none;
    cursor: pointer;
    padding: 0.4em 0.6em;
    color: #333;
    border: 0.0625em solid #ddd;
    border-bottom-width: 0;
}
 
.dawa-autocomplete-suggestions .dawa-autocomplete-suggestion:first-child {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
}
 
.dawa-autocomplete-suggestions .dawa-autocomplete-suggestion:last-child {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    border-bottom-width: 0.0625em;
}
 
.dawa-autocomplete-suggestions .dawa-autocomplete-suggestion.dawa-selected,
.dawa-autocomplete-suggestions .dawa-autocomplete-suggestion:hover {
    background: #f0f0f0;
}
</style>
