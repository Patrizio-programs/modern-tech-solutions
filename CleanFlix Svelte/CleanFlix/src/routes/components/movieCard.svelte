<script>
	import createImageUrlBuilder from '@sanity/image-url';
	import sanityClient from '@sanity/client';

	export let movie;

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

<a href={'/movie/' + movie.movieName}>
	<div class="main-movie">
		<img loading="lazy" src={urlFor(movie.poster)} alt="movie poster" width="100%" height="100%" />
		<div class="descriptions">
			<h2>{movie.movieName}</h2>
		</div>
	</div>
</a>

<style>
	.main-movie img {
		width: 100%;
		max-width: 320px;
		height: 50vh;
		object-fit: cover;
	}

	.main-movie img:hover {
		transform: scale(1.1);
	}

	.main-movie {
		box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.5);
		cursor: pointer;
		margin-bottom: 70px;
	}
</style>
