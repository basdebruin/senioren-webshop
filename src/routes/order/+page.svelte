<script lang="ts">

    let stepIndex = 0;
    let steps = [
        "Verzekering",
        "Adresgegevens",
        "Verzendmethoden",
        "Betaalmethoden"
    ]

</script>

<div class="spacer" style="height: 100px"></div>

<main class="container grid-xl">
    <h1>Bestellen</h1>

    <!-- Navigation -->
    <div class="order-navigation">
        <!-- Steps -->
        <a href="/shopping-cart" class="btn btn-primary"><i class="ri-arrow-left-s-line"></i> Terug</a>
        <ul class="step">
            {#each steps as step, index}
                <li class="step-item" class:active={stepIndex >= index}>
                    <a data-index={index+1} href="#step-{index}" on:click={() => stepIndex = index}>{step}</a>
                </li>
            {/each}
        </ul>
    </div>

    <!-- Ordering pages -->

    <article class="order-page columns">

        <div class="column">
            <h2>Aansluiting en aanvullende verzekering</h2>
            <h4>Aansluiting</h4>
            <label class="checkbox">
                <input type="checkbox" checked>
                <p>
                    Drempellevering <br>
                    De wasmachine wordt tot de deur gebracht <a href="#uitleg">Uitleg</a>
                </p>
            </label>
            <label class="checkbox">
                <input type="checkbox">
                <p>
                    Plaatsen en aansluiten (meerkosten € 25,-) <br>
                    De wasmachine wordt geplaatst en geïnstalleerd waar gewenst. <a href="#uitleg">Uitleg</a>
                </p>
            </label>
            <h4>Aanvullende verzekering</h4>
            <p>
                Wil je een aanvullende verzekering van € 149,- eenmalig naast de 2 jaar garantie?
            </p>
            <label class="checkbox">
                <input type="checkbox" checked>
                <p>Nee</p>
            </label>
            <label class="checkbox">
                <input type="checkbox">
                <p>Ja</p>
            </label>
        </div>

    </article>


    <a href="#next" class="btn btn-primary">Ga door met bestellen</a>

</main>

<div class="spacer"></div>

<style lang="scss">

    .order-navigation {
        display: flex;
        gap: 1rem;
        margin: 2rem 0;
    }

    // lines
    .step .step-item:not(:first-child)::before {
        height: 6px;
        top: 0rem;
        background-color: white;
        border: 1.5px solid var(--primary-color);
    }
    .step .step-item.active:not(:first-child)::before {
        background-color: var(--primary-color);
    }
    // numbers
    .step .step-item.active a {
        color: var(--primary-color);
    }
    .step .step-item a::before {
        width: 1.5rem;
        height: 1.5rem;
        top: -.6rem;
        content: attr(data-index);
        background: white !important;
        border: solid 1.5px var(--primary-color);
    }
    .step .step-item.active a::before {
        background: var(--primary-color) !important;
        color: white;
    }

</style>