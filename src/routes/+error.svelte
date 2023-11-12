<script>
	import { page } from "$app/stores";
</script>

{#if $page.status === 404}
	<div class="container mx-auto grid place-items-center">
		<h1>Not found</h1>
	</div>
{/if}
