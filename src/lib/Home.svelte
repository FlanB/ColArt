<script>
  import { onMount } from "svelte"
  import { scrollY, scrollX } from "../functions"

  let cubisme
  let peinture
  let mouvement
  let siecle
  let formes
  let deconstruction
  let geometrie

  onMount(() => {
    window.addEventListener("scroll", () => {
      scrollY(cubisme, 0.25)
      scrollX(peinture, 2)
      scrollX(mouvement, 1)
      scrollX(siecle, -1)
      scrollX(formes, 3)
      scrollX(deconstruction, -1)
      scrollX(geometrie, 2)
    })
  })
</script>

<section class="home">
  <div class="title" bind:this={cubisme}>Le cubisme</div>
  <span class="paint" bind:this={peinture}>Peintures</span>
  <span class="paint stroke" bind:this={mouvement}>Mouvement</span>
  <span class="paint" bind:this={siecle}>XXe siècle</span>
  <span class="paint stroke" bind:this={formes}>Formes</span>
  <span class="paint" bind:this={deconstruction}>Déconstruction</span>
  <span class="paint stroke" bind:this={geometrie}>Géométrie</span>
</section>

<style>
  .title {
    font-size: 13rem;
    font-weight: 700;
    text-align: center;
    margin: 40vh 0;
    transition: transform 0.5s ease-out;
  }
  .home {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    margin-bottom: 16rem;
  }
  span {
    font-size: 15rem;
    font-family: var(--title-font);
    font-weight: 700;
    transition: transform 1s ease-out;
  }
  .stroke {
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--black);
    color: transparent;
  }
</style>
