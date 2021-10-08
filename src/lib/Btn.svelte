<script>
</script>

<div class="blue">
    <span class="filters"><slot /></span>
    <label class="checkbox1">
        <input type="checkbox" id="feature1" />
        <div>
            <span />
        </div>
    </label>
</div>

<style lang="scss">
    .blue {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #2e4f84;
        height: 86px;
        max-width: 448px;
        position: relative;
        // &:active {
        //     transform: translate(0.5rem, 0.5rem);
        //     &::before {
        //         top: 0;
        //         bottom: 0;
        //         left: 0;
        //         right: 0;
        //     }
        // }
        &::before {
            z-index: -1;
            content: "";
            position: absolute;
            top: 0.5rem;
            left: 0.5rem;
            bottom: -0.5rem;
            right: -0.5rem;
            border: solid #2e4f84 2px;
        }
    }

    .filters {
        color: #ecf6fd;
        font-size: 1.3rem;
        font-family: var(--body-font);
    }

    label {
        width: 3em;
        height: 3em;
        margin: 5px;
        border: 1px solid #ecf6fd;
        box-sizing: border-box;
        &::before {
            height: 3em;
            width: 3em;
            margin: 2px;
            z-index: 0;
            content: "";
            position: absolute;
            border: solid #ecf6fd 1px;
        }
    }

    label div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        line-height: 25px;
        transition: 0.5s ease;
    }

    label input {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 140px;
        height: 100px;
        opacity: 0;
        cursor: pointer;
    }

    input[type="checkbox"]:hover ~ div {
        background-color: #ecf6fd;
    }

    input[type="checkbox"]:checked ~ div {
        background-color: #ecf6fd;
    }
</style>
