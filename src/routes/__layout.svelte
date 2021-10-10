<script>
  import "../global.css"
  import Header from "$lib/Layout/Header.svelte"
  import Footer from "$lib/Layout/Footer.svelte"

  // import LocomotiveScroll from "locomotive-scroll"
  // import { onMount } from "svelte"
  // onMount(() => {
  //   window.addEventListener("load", () => {
  //     const LocomotiveScroll = import("locomotive-scroll")
  //     const scroll = new LocomotiveScroll({
  //       el: document.querySelector("[data-scroll-container"),
  //       smooth: true,
  //     })
  //   })
  // })
</script>

<svelte:head>
  <title>Cub'Art</title>
</svelte:head>

<Header />

<main class="container" data-scroll-container>
  <slot />
</main>

<Footer />

<style></style>
