<script>
  import { onMount } from "svelte"

  import { scrollY } from "../functions"

  let title
  let quote1
  let quote2

  onMount(() => {
    window.addEventListener("scroll", () => {
      scrollY(title, -0.5)
      scrollY(quote1, -0.4)
      scrollY(quote2, -0.3)
    })
  })
</script>

<section class="cubisme">
  <h1 bind:this={title}>Le cubisme</h1>
  <div class="quotes">
    <p bind:this={quote1}>
      « Le cubisme est l’art de <b>peindre des ensembles nouveaux</b> avec des
      éléments empruntés non à la réalité de vision, mais à la
      <b>réalité de conception</b>. »
      <span>- Guillaume Apollinaire</span>
    </p>
    <p bind:this={quote2}>
      « Quand nous avons fait du cubisme, nous n’avions aucune intention de
      faire du cubisme, mais seulement <b>d’exprimer ce qui était en nous</b> »
      <span>- Picasso</span>
    </p>
  </div>
</section>

<style lang="scss">
  .cubisme {
    height: 100vh;
  }
  h1 {
    text-align: center;
    margin-bottom: 6rem;
    transition: transform 0.5s ease-in-out;
  }
  .quotes {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  p {
    transition: transform 0.5s ease-out;
    font-size: 2rem;
    text-align: center;
    span {
      display: block;
      font-size: 1.5rem;
    }
  }
  b {
    font-weight: 600;
  }
</style>
