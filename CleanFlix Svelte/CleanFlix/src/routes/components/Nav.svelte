<nav class="navbar navbar-inverse">
	<div class="container-fluid">
		<div class="navbar-header">
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
				<span class="icon-bar" />
				<span class="icon-bar" />
				<span class="icon-bar" />
			</button>
			<a class="navbar-brand" href="/">CleanFlix</a>
		</div>
		<div class="collapse navbar-collapse" id="myNavbar">
			<ul class="nav navbar-nav">
				<li class="link"><a href="/">Home</a></li>

				<li class="link"><a href="/movies">Movies</a></li>
				<li class="link"><a href="/contact">Contact</a></li>
			</ul>
		</div>
	</div>
</nav>

<style>
	.navbar {
		background-color: #333;
		border-radius: 0;
		height: fit-content;
		color: white;
	}

	.navbar-inverse .navbar-nav > li > a:hover {
		color: red;
		background-color: white;
	}

	.navbar-inverse .navbar-nav > li > a {
		transition: 0.4s;
	}

	.navbar-brand {
		color: red;
	}
</style>
