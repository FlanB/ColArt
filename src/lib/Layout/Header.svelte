<script>
  import { onMount } from "svelte"

  let active = false
  let over = false
  let artwork = null
  let imgElement
  const imgs = [
    "le_viaduc_de_l_estaque.jpg",
    "figure_triste.jpg",
    "guernica.webp",
  ]
  onMount(() => {
    if (active) {
      document.querySelector("body").style.overflow = "hidden"
    } else {
      document.querySelector("body").style.overflow = null
    }
  })
</script>

<svg
  width="48"
  height="48"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  stroke="currentColor"
  stroke-width="4"
  class:active
  class:over
  id="burger"
  on:mouseenter={() => {
    if (!active) {
      over = true
    }
  }}
  on:mouseleave={() => {
    if (!active) {
      over = false
    }
  }}
  on:click={() => {
    active = !active
    over = false
  }}
>
  <line id="line1" x1="0" y1="32" x2="64" y2="32" />
  <line id="line2" x1="32" y1="48" x2="64" y2="48" />
</svg>
<div
  class="menu menu-{artwork}"
  class:active
  style="transform: translateX(100%) "
>
  <ul>
    <li
      on:mouseenter={() => (artwork = 1)}
      on:click={() => (active = false)}
      class="underline"
    >
      <a href="#viaduc">Le viaduc de l'Estaque</a>
    </li>
    <li
      on:mouseenter={() => (artwork = 2)}
      on:click={() => (active = false)}
      class="underline"
    >
      <a href="#figure">Figure triste</a>
    </li>
    <li
      on:mouseenter={() => (artwork = 3)}
      on:click={() => (active = false)}
      class="underline"
    >
      <a href="#guernica">Guernica</a>
    </li>
  </ul>
  <img src={imgs[artwork - 1]} alt="" bind:this={imgElement} />
</div>

<style lang="scss">
  .img-scroll {
    animation: imgScroll 2s ease-in-out;
  }
  .menu {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: #f8f8f8;
    transition: transform 1s ease-in-out;
    display: flex;
    justify-content: space-around;
    transition: 0.5s ease-in-out;
    z-index: 998;
    img {
      width: 33%;
      object-fit: contain;
    }

    ul {
      font-size: 4rem;
      font-weight: 700;
      display: flex;
      flex-direction: column;
      gap: 4rem;
      height: 100%;
      justify-content: center;
    }
    li {
      transition: 0.5s ease-in-out;
    }
  }
  .menu-1 {
    background-color: var(--color-artwork-1);
    li {
      color: var(--text-color-artwork-1);
      &::after {
        background-color: var(--text-color-artwork-1);
      }
    }
  }
  .menu-2 {
    background: var(--color-artwork-2);
    li {
      color: var(--text-color-artwork-2);
      &::after {
        background-color: var(--text-color-artwork-2);
      }
    }
  }
  .menu-3 {
    background: var(--color-artwork-3);
    li {
      color: var(--text-color-artwork-3);
      &::after {
        background-color: var(--text-color-artwork-3);
      }
    }
  }
  .active {
    transform: translateX(0) !important;
  }
  svg {
    position: fixed;
    top: 2rem;
    right: 4rem;
    cursor: pointer;
    z-index: 999;
    transition: 0.5s ease-in-out;
    color: var(--black);
  }
  line {
    transition: transform 0.5s ease-in-out;
    transform-origin: center;
  }
  .over {
    #line1 {
      animation: burgerOver1 0.75s ease-in-out;
    }
    #line2 {
      animation: burgerOver2 0.75s ease-in-out;
    }
  }
  .active {
    #line1 {
      transform: rotate(45deg);
    }
    #line2 {
      transform: rotate(-45deg) translate(-32px, -16px) scaleX(2);
    }
  }
  @keyframes burgerOver1 {
    0% {
      transform: translateX(0);
    }
    50% {
      visibility: hidden;
      transform: translateX(65px);
    }
    51% {
      visibility: visible;
      transform: translateX(-65px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes burgerOver2 {
    0% {
      transform: translateX(0);
    }
    50% {
      visibility: hidden;
      transform: translateX(-65px);
    }
    51% {
      visibility: visible;
      transform: translateX(65px);
    }
    100% {
      transform: translateX(0);
    }
  }
  @keyframes imgScroll {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(100%);
    }
    51% {
      visibility: hidden;
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>
