<script>
  import "../global.css"
  import Header from "$lib/Layout/Header.svelte"
  import Footer from "$lib/Layout/Footer.svelte"
</script>

<svelte:head>
  <title>Cub'Art</title>
</svelte:head>

<Header />

<main class="container">
  <slot />
</main>

<Footer />

<style></style>
