<script>
  import Home from "$lib/Home.svelte"
  import CubismeSection from "$lib/CubismeSection.svelte"
</script>

<Home />
<CubismeSection />
<section class="viaduc">
  <h2>Le viaduc de l'Estaque</h2>
  <div class="content">
    <span class="artist">Georges Braque</span>
    <img src="le_viaduc_de_l_estaque.jpg" alt="" />
    <p>
      <span>Un lieu chargé d'histoires</span> Petit port de pêche près de Marseille,
      L’Estaque accueille à la fin du 19e siècle et au début du 20e de nombreux artistes.
      Cézanne vient s’y réfugier pendant la guerre de 1870. C’est pour marcher sur
      ses traces que Braque s’y rend pour la première fois en 1906, puis en 1908.
    </p>
  </div>
  <span class="meta">1908 | Huile sur toile, 72,5 x 59 cm</span>
</section>
<section class="figure">
  <h2>Figure triste</h2>
  <div class="content">
    <p>
      <span>Une approche nouvelle</span>Début 1911, Francis Picabia crée des
      peintures colorées et expressives d'une manière fauviste, mais à la fin de
      l'année, il développe une approche fragmentée et plane en réponse au
      cubisme, mouvement en pleine effervescence à l'époque.
    </p>
    <img src="figure_triste.jpg" alt="" />
    <span class="artist">Francis Picabia</span>
  </div>
  <span class="meta">1912 | Huile sur toile, 124.46 x 124.46</span>
</section>
<section class="guernica">
  <h2>Guernica</h2>
  <div class="content">
    <p>
      <span>Une approche nouvelle</span>Début 1911, Francis Picabia crée des
      peintures colorées et expressives d'une manière fauviste, mais à la fin de
      l'année, il développe une approche fragmentée et plane en réponse au
      cubisme, mouvement en pleine effervescence à l'époque.
    </p>
    <img src="figure_triste.jpg" alt="" />
    <span class="artist">Francis Picabia</span>
  </div>
  <span class="meta">1912 | Huile sur toile, 124.46 x 124.46</span>
</section>

<style lang="scss">
  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100vh;
    img {
      width: 32rem;
    }
    h2 {
      font-weight: 700;
    }
    .artist {
      position: absolute;
      font-size: 4rem;
      writing-mode: vertical-rl;
      color: transparent;
      transform: rotate(180deg);
      font-weight: 700;
    }
    .content {
      position: relative;
      display: flex;
      justify-content: space-around;
    }
    p {
      font-size: 1.5rem;

      opacity: 0.9;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 32rem;
      font-weight: 500;
      span {
        font-size: 2rem;
        opacity: 1;
        color: inherit;
      }
    }
    .meta {
      text-align: end;
    }
  }
  .viaduc {
    .artist {
      -webkit-text-stroke: 1px var(--text-color-artwork-1);
      left: -1rem;
    }
    h2 {
      color: var(--text-color-artwork-1);
    }
    .meta {
      color: var(--text-color-artwork-1);
    }
    p {
      color: var(--text-color-artwork-1);
    }
  }
  .figure {
    .artist {
      -webkit-text-stroke: 1px var(--text-color-artwork-2);
      right: -1rem;
    }
    h2 {
      color: var(--text-color-artwork-2);
    }
    .meta {
      color: var(--text-color-artwork-2);
    }
    p {
      color: var(--text-color-artwork-2);
    }
  }
  .guernica {
    .artist {
      -webkit-text-stroke: 1px var(--text-color-artwork-3);
      left: -3rem;
    }
    h2 {
      color: var(--text-color-artwork-3);
    }
    .meta {
      color: var(--text-color-artwork-3);
    }
    p {
      color: var(--text-color-artwork-3);
    }
  }
</style>
