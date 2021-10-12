<script>
  import Home from "$lib/Home.svelte"
  import CubismeSection from "$lib/CubismeSection.svelte"
  import { onMount } from "svelte"
  import { scrollY } from "../functions"

  let viaduc
  let figure
  let guernica

  onMount(() => {
    document.addEventListener("scroll", () => {
      scrollY(viaduc.querySelector("h2"), 0.1)
      scrollY(figure.querySelector("h2"), 0.1)
      if (
        viaduc.offsetTop - screen.height / 2 < window.pageYOffset &&
        window.pageYOffset < viaduc.offsetTop + viaduc.offsetHeight / 2
      ) {
        document.body.style.background = "var(--color-artwork-1)"

        document.querySelector("#burger").style.color =
          "var(--text-color-artwork-1)"
        viaduc.style.color = "var(--text-color-artwork-1)"
        viaduc.querySelector(".artist").style.webkitTextStrokeColor =
          "var(--text-color-artwork-1)"
        viaduc.querySelectorAll("p").forEach((el) => {
          el.style.color = "var(--text-color-artwork-1)"
        })

        figure.style.color = "var(--text-color-artwork-1)"
        figure.querySelector(".artist").style.webkitTextStrokeColor =
          "var(--text-color-artwork-1)"
        figure.querySelectorAll("p").forEach((el) => {
          el.style.color = "var(--text-color-artwork-1)"
        })
      } else if (
        figure.offsetTop - screen.height / 2 < window.pageYOffset &&
        window.pageYOffset < figure.offsetTop + figure.offsetHeight / 2
      ) {
        document.body.style.background = "var(--color-artwork-2)"

        document.querySelector("#burger").style.color =
          "var(--text-color-artwork-2)"
        figure.style.color = "var(--text-color-artwork-2)"
        figure.querySelector(".artist").style.webkitTextStrokeColor =
          "var(--text-color-artwork-2)"
        figure.querySelectorAll("p").forEach((el) => {
          el.style.color = "var(--text-color-artwork-2)"
        })

        guernica.style.color = "var(--text-color-artwork-2)"
        guernica.querySelector(".artist").style.webkitTextStrokeColor =
          "var(--text-color-artwork-2)"
        guernica.querySelectorAll("p").forEach((el) => {
          el.style.color = "var(--text-color-artwork-2)"
        })
      } else if (
        guernica.offsetTop - screen.height / 2 < window.pageYOffset &&
        window.pageYOffset < guernica.offsetTop + guernica.offsetHeight / 2
      ) {
        document.body.style.background = "var(--color-artwork-3)"

        document.querySelector("#burger").style.color =
          "var(--text-color-artwork-3)"
        guernica.style.color = "var(--text-color-artwork-3)"
        guernica.querySelector(".artist").style.webkitTextStrokeColor =
          "var(--text-color-artwork-3)"
        guernica.querySelectorAll("p").forEach((el) => {
          el.style.color = "var(--text-color-artwork-3)"
        })
      } else {
        document.body.style.background = null
        document.querySelector("#burger").style.color = null
        viaduc.style.color = "var(--black)"
        viaduc.querySelector(".artist").style.webkitTextStrokeColor = null
        viaduc.querySelectorAll("p").forEach((el) => {
          el.style.color = null
        })
      }
    })
  })
</script>

<Home />
<CubismeSection />
<section id="viaduc" class="viaduc" bind:this={viaduc}>
  <h2>Le viaduc de l'Estaque</h2>
  <div class="content">
    <span class="artist">Georges Braque</span>
    <img src="le_viaduc_de_l_estaque.jpg" alt="" />
    <div class="paragraph">
      <p>
        <span>Un lieu chargé d'histoires</span> Petit port de pêche près de Marseille,
        L’Estaque accueille à la fin du 19e siècle et au début du 20e de nombreux
        artistes. Cézanne vient s’y réfugier pendant la guerre de 1870. C’est pour
        marcher sur ses traces que Braque s’y rend pour la première fois en 1906,
        puis en 1908.
      </p>
      <p>
        <span>Un décor inspirant</span> Parmi les toiles peintes durant son deuxième
        séjour, pendant l’été 1908, Le Viaduc à L’Estaque témoigne de cet hommage
        à Cézanne à partir duquel Braque développe sa propre peinture. Dans cette
        toile, le souci de construire un espace propre à la toile conduit le peintre
        à éliminer les détails, à simplifier les formes des maisons pour les réduire
        à des cubes.
      </p>
      <p>
        <span>L'avènement du cubisme ?</span>
        Exposé parmi d’autres de la même série dès l’automne 1908 à Paris, ce tableau
        fait dire au critique d’art Louis Vauxcelles, qu’il est composé de « petits
        cubes » et inaugure un style nouveau, le « Cubisme », selon un néologisme
        du critique.
      </p>
    </div>
  </div>
  <span class="meta">1908 | Huile sur toile, 72,5 x 59 cm</span>
</section>
<section id="figure" class="figure" bind:this={figure}>
  <h2>Figure triste</h2>
  <div class="content">
    <div class="paragraph">
      <p>
        <span>Une approche nouvelle</span>Début 1911, Francis Picabia crée des
        peintures colorées et expressives d'une manière fauviste, mais à la fin
        de l'année, il développe une approche fragmentée et plane en réponse au
        cubisme, mouvement en pleine effervescence à l'époque.
      </p>
      <p>
        <span>Une mélancolie abstraite</span>Picabia a choisi une palette sombre
        : du noir, du gris et du blanc associés à un bleu froid, une teinte
        traditionnellement associée aux sentiments de malheur. Au sein de la
        composition abstraite, on peut apercevoir un petit personnage assis de
        profil, le bras droit tendu et la tête penchée sur le côté soutenue par
        un bras gauche fléchi.
      </p>
      <p>
        <span>Une représentation familière ?</span>Un tel langage corporel
        exprime le découragement et rappelle les représentations antérieures de
        la mélancolie dans l'art. Cette petite figure semble, à son tour, être
        entourée par l'étreinte d'une autre figure plus grande. Picabia, dont la
        propre mère est décédée alors qu'il n'avait que sept ans, représente
        peut-être une scène de confort ou de chagrin maternel.
      </p>
    </div>
    <img src="figure_triste.jpg" alt="" />
    <span class="artist">Francis Picabia</span>
  </div>
  <span class="meta">1912 | Huile sur toile, 124.46 x 124.46 cm</span>
</section>
<section id="guernica" class="guernica" bind:this={guernica}>
  <h2>Guernica</h2>
  <div class="content">
    <img class="guernicapic" src="guernica.webp" alt="" />
    <div class="paragraph">
      <p>
        <span>Une période sombre de l'histoire</span>En 1937, la République
        espagnole demande à Picasso de réaliser une grande composition pour
        l’exposition Universelle de Paris. Juste après, cette commande Guernica
        subit plusieurs vagues de bombardements de la part de L’Allemagne nazie.
        Guernica, ravagée, compte des centaines de morts et de blessés, tous
        civils.
      </p>
      <p>
        <span>Mettre des formes sur des mots</span>Picasso, exilé à Paris, prend
        connaissance du drame dans les journaux. Troublé par les récits qu’il
        lit et les photographies qu’il voit, il crée Guernica comme pour pousser
        un énorme cri de colère face à la folie de l’humanité. Le procédé de
        représentation «cubiste» met pour sa part le massacre en image : il
        déconstruit les formes, les mélange, les associe et dissocie comme le
        feraient les bombes et leurs éclats.
      </p>
    </div>

    <span class="artist">Pablo Picasso</span>
  </div>
  <span class="meta">1937 | Huile sur toile, 752 x 351 cm</span>
</section>

<style lang="scss">
  section {
    transition: all 0.25s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100vh;
    img {
      width: 32rem;
    }
    h2 {
      font-weight: 700;
      margin-top: -8rem;
    }
    .artist {
      position: absolute;
      font-size: 4rem;
      writing-mode: vertical-rl;
      color: transparent;
      transform: rotate(180deg);
      font-weight: 700;
      white-space: nowrap;
    }
    .content {
      position: relative;
      display: flex;
      justify-content: space-around;
    }
    .paragraph {
      transition: 0.25s ease-in-out;
      font-size: 1.5rem;
      opacity: 0.9;
      display: flex;
      flex-direction: column;
      gap: 8rem;
      width: 32rem;
      font-weight: 500;
      overflow-y: scroll;
      height: 70vh;

      span {
        font-size: 2rem;
        opacity: 1;
        color: inherit;
        display: block;
        margin-bottom: 2rem;
      }
    }
    .meta {
      text-align: end;
    }
  }
  .viaduc {
    color: var(--text-color-artwork-1);
    .artist {
      -webkit-text-stroke: 1px var(--black);
      left: -1rem;
    }
    h2 {
      color: inherit;
    }
    .paragraph {
      color: inherit;
    }
    .meta {
      color: inherit;
    }
  }
  .figure {
    .artist {
      -webkit-text-stroke: 1px var(--text-color-artwork-2);
      right: -1rem;
    }
    h2 {
      color: inherit;
    }
    p {
      color: inherit;
    }
    .meta {
      color: inherit;
    }
  }
  .guernica {
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      gap: 2rem;
    }
    .artist {
      -webkit-text-stroke: 1px var(--text-color-artwork-3);
      left: 3rem;
    }
    h2 {
      color: inherit;

    }
    .paragraph {
      color: inherit;
      width: 80%;
      height: 40vh;
    }
    .meta {
      color: inherit;
      width: 100%;
    }
    .guernicapic {
      width: 80%;
    }
  }
</style>
