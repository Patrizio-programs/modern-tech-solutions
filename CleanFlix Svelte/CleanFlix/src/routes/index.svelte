<script>
	export let recents;
	import Footer from './components/footer.svelte';
	import RecentMovies from './components/RecentMovies.svelte';
	import Nav from './components/Nav.svelte';
	import HeroImage from './components/heroImage.svelte';
</script>

<div class="index">
	<Nav />
	<HeroImage />
	<RecentMovies {recents} />
	<Footer />
</div>

<style>
	.index {
		display: flex;
		flex-direction: column;
	}
</style>
