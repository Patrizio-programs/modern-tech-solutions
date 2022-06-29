<script>
	export let recents;
	import createImageUrlBuilder from '@sanity/image-url';
	import sanityClient from '@sanity/client';
	import AllMovieCard from './allMovieCard.svelte';

	const client = sanityClient({
		projectId: 'dt5nrqzl',
		dataset: 'production',
		apiVersion: '2021-10-21',
		useCdn: false
	});

	function urlFor(source) {
		const builder = createImageUrlBuilder(client);
		return builder.image(source);
	}
</script>

<div class="main">
	<h2>Recent Additions</h2>

	<div class="main-movies">
		{#each recents as amovie}
			<AllMovieCard {amovie} />
		{/each}
	</div>
</div>

<style>
	.main {
		border-bottom: 10px solid red;
		background-color: black;
		color: white;
		height: fit-content;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.main-movies {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 20px;
	}

	@media (max-width: 1200px) {
		.main-movies {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 900px) {
		.main-movies {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 600px) {
		.main-movies {
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>
