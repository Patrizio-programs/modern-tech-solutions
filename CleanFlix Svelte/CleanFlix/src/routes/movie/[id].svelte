<script context="module">
	import sanityClient from '@sanity/client';
	import createImageUrlBuilder from '@sanity/image-url';

	export const client = sanityClient({
		projectId: 'dt5nrqzl',
		dataset: 'production',
		apiVersion: '2021-10-21',
		useCdn: false
	});

	function urlFor(source) {
		const builder = createImageUrlBuilder(client);
		return builder.image(source);
	}
	export async function load({ fetch, params }) {
		const x = params.id;

		const res = await client.fetch(`*[movieName match "${x}"]`);
		console.log(res);

		return {
			props: { res }
		};
	}
</script>

<script>
	export let res;
</script>

<div class="movie-detail">
	<div class="movie-img" />

	<div class="movie-title">
		<h1>{res.movieName}</h1>
	</div>
</div>
