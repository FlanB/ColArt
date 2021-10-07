<script>
  //   import { onMount } from "svelte"
  //   onMount(async () => {
  //     const LocomotiveScroll = import("locomotive-scroll")
  //     const scroll = new LocomotiveScroll({
  //       el: document.querySelector("body"),
  //       smooth: true,
  //     })
  //   })
</script>

<section class="home">
  <span class="paint">Peintures</span>
  <span class="paint stroke">Mouvement</span>
  <span class="paint">XXe siècle</span>
  <span class="paint stroke">Formes</span>
  <span class="paint">Déconstruction</span>
  <span class="paint stroke">Géométrie</span>
</section>

<style>
  .home {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 16rem;
  }
  span {
    font-size: 15rem;
    font-family: var(--title-font);
    font-weight: 700;
  }
  .stroke {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--black);
    color: transparent;
  }
</style>
