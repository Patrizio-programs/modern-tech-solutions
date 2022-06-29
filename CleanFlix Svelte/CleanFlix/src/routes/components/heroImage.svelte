<div class="hero">
	<div class="hero-text">
		<h1>Welcome to the CleanFlix</h1>
		<p>
			All clean movies for you and your family. <br />
			Guaranteed to be family and kid friendly. <br />
			You can click on a movie to see more details,
			<br />and even watch the trailer!
		</p>
	</div>
</div>

<style>
	.hero {
		background: url('https://www.wallpaperflare.com/static/158/577/266/the-lion-king-disney-lion-king-wallpaper.jpg');
		background-size: cover;
		object-fit: contain;
		background-position: center center;
		height: 80vh;
		width: auto;
		background-repeat: no-repeat;
		border-bottom: 10px solid red;
	}

	.hero-text {
		position: absolute;
		bottom: 30%;
		height: fit-content;
		color: white;
		font-weight: bold;

		display: inline-block;
		background-color: rgba(0, 0, 0, 0.6);
		padding: 10px;
	}

	@media (max-width: 600px) {
		.hero-text {
			font-size: 1.5rem;
			bottom: 35%;
		}
	}
</style>
