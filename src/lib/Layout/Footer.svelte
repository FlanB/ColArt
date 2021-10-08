<script>
</script>

<div class="globalfooter">
    <span class="top">Créé par</span>
    <div class="names">
        <a class="bottom" href="https://www.linkedin.com/in/clement-renou/"
            >Clément Renou</a
        >
        <a
            class="bottom"
            href="https://www.linkedin.com/in/naja-dalmagne-580b281b8/"
            >Naja Dalmagne</a
        >
        <a class="bottom" href="https://www.linkedin.com/in/alexandredupin/"
            >Alexandre Dupin</a
        >
    </div>
    <svg
        viewBox="0 0 24 24"
        width="48"
        height="48"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        on:click={() => window.scrollTo(0, 0)}
    >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" /></svg
    >
</div>

<style lang="scss">
    .globalfooter {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 10rem;
        span {
            color: var(--text-color-artwork-3);
            font-weight: 300;
        }
        a {
            color: var(--text-color-artwork-3);
            &::after {
                background-color: var(--color-artwork-3);
            }
        }
    }

    a.bottom {
        position: relative;
    }

    a.bottom:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        margin-bottom: -0.3rem;
        background-color: #fff;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.3s ease-in-out;
    }

    a.bottom:hover:before {
        visibility: visible;
        transform: scaleX(1);
    }

    .top {
        margin-top: 5rem;
        margin-bottom: 1rem;
    }

    .bottom {
        justify-content: space-between;
        margin-bottom: 1rem;
        width: 100%;
    }

    .names {
        display: flex;
        white-space: nowrap;
        gap: 4rem;
    }

    svg {
        position: absolute;
        bottom: 1.5rem;
        right: 4rem;
        color: var(--text-color-artwork-3);
        transition: 0.3s ease-in-out;
        line {
            transition: 0.3s ease-in-out;
            transform-origin: top;
        }
        &:hover {
            transform: translateY(-0.8rem);
            & > line {
                transform: scaleY(1);
            }
        }
    }
</style>
