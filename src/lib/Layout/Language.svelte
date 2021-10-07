<script>
  let lang = "fr"
</script>
<div class="lang">
  <span class={lang === "fr" ? "active" : ""} on:click={() => (lang = "fr")}>
    FR
  </span>

  <span class={lang === "en" ? "active" : ""} on:click={() => (lang = "en")}>
    EN
  </span>
</div>

<style lang="scss">
  .lang {
    position: absolute;
    top: 3rem;
    right: 10rem;
    font-family: var(--title-font);
    font-size: 1.25rem;
    > * {
      cursor: pointer;
    }
  }
  .active {
    font-weight: 700;
    text-decoration: underline;
  }
</style>
