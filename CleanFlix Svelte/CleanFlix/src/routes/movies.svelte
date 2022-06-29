<script>
	export let recents;

	import AllMovies from './components/allMovies.svelte';
	import HeroImage from './components/heroImage.svelte';
	import Nav from './components/Nav.svelte';
	import Footer from './components/footer.svelte';
</script>

<div>
	<Nav />
	<HeroImage />
	<AllMovies {recents} />
	<Footer />
</div>
