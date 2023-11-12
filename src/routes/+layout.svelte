<script>
	import "../app.css";

	import Header from "./Header.svelte";
</script>

<svelte:head>
	<title>Nausea</title>
</svelte:head>

<div class="h-full grid grid-rows-[2rem,_1fr]">
	<Header />
	<slot />
</div>
