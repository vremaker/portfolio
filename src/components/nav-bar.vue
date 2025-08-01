<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light ftco_navbar ftco-navbar-light site-navbar-target" id="ftco-navbar">
		<div class="container">
			<a class="navbar-brand" href="index.html">Valerie Helen Grace<span>.</span></a>
			<button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse"
				data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span> Menu
			</button>

			<div class="collapse navbar-collapse" id="ftco-nav">
				<ul class="navbar-nav nav ml-auto">
					<!-- link to new pages (except for project?)-->
					<li class="nav-item"><a href="#projects" class="nav-link"><span>projects</span></a></li>
					<li class="nav-item"><a href="resume.html" class="nav-link"><span>resume</span></a></li>
					<li class="nav-item"><a href="me.html" class="nav-link"><span>me</span></a></li>

				</ul>
			</div>
		</div>
	</nav>
    <div>
 
</div>
  </div>
</template>
<script>
export default {
  methods: {
    push() {
      this.$router.push("/");
      window.scrollTo(0, 600);
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>

</style>