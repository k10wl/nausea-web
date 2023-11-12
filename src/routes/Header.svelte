<script>
	const routes = [
		{
			href: "/about",
			name: "About"
		},
		{
			href: "/gallery",
			name: "Gallery"
		},
		{
			href: "/contacts",
			name: "Contacts"
		}
	];
</script>

<header class="container mx-auto">
	<nav class="flex justify-between items-center">
		<a href="/">
			<img alt="Nausea" />
		</a>
		<ul class="flex items-center gap-5">
			{#each routes as { name, href }}
				<li><a class="px-4 py-2" {href}>{name}</a></li>
			{/each}
		</ul>
	</nav>
</header>
