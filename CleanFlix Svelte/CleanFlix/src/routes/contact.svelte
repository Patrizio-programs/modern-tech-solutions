<script>
	import Footer from './components/footer.svelte';
	import HeroImage from './components/heroImage.svelte';
	import Nav from './components/Nav.svelte';
</script>

<Nav />
<HeroImage />
<div class="contact">
	<div class="contact-form">
		<h2>Contact us at CleanFlix</h2>

		<p>
			You can always contact us via email with any movie suggestions, <br />
			or suggstions for the site by emailing cleancutreviews1@gmail.com <br />
			You can also submit a movie suggestion righte here on our website using the form below.
		</p>

		<h1>Enter a Movie Suggestion</h1>

		<form>
			<label for="name">Name:</label>
			<input type="text" name="name" placeholder="Your name" />

			<label for="email">Email(optional):</label>
			<input type="text" name="email" placeholder="Your Email" />

			<label for="movietitle">Movie Title:</label>
			<input type="text" name="movietitle" placeholder="Enter Movie Title" required />

			<label for="yearreleased">Year Released:</label>
			<input type="text" name="yearreleased" placeholder="Enter Year Released" required />

			<label for="moviedescription">Movie Description:</label>
			<textarea
				type="textarea"
				name="moviedescription"
				placeholder="Enter Movie Description"
				cols="30"
				rows="5"
			/>

			<div class="button">
				<input type="submit" value="Submit" class="contact-submit" />
			</div>
		</form>
	</div>
</div>
<Footer />

<style>
	.contact {
		border-bottom: 10px solid red;
	}

	.contact-form {
		padding: 20px;
		background: url('https://live.staticflickr.com/7095/7177068411_d70eccbde2_b.jpg');
		background-position: center;
		background-size: cover;
		height: fit-content;
		color: white;
	}

	form {
		display: flex;
		flex-direction: column;
		justify-content: left;
		align-items: left;

		width: 30%;

		padding: 20px;
	}

	@media (max-width: 1000px) {
		form {
			width: 50%;
		}
	}

	@media (max-width: 600px) {
		form {
			width: 90%;
		}
	}

	.button {
		margin-top: 10px;
	}

	.contact-submit {
		background-color: red;
		color: white;
		border: none;
		padding: 10px;
		font-size: 0.8rem;
		font-weight: bold;
		cursor: pointer;
		transition: all 0.5s cubic-bezier(0.8, 0.5, 0.2, 1.4);
	}

	.contact-submit:hover {
		background-color: white;
		color: red;
	}
</style>
