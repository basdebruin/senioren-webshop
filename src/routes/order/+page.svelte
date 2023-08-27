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

</main>

<div class="spacer"></div>

<style lang="scss">

    .order-navigation {
        display: flex;
        gap: 1rem;
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
        background: white;
        border: solid 1.5px var(--primary-color);
    }
    .step .step-item.active a::before {
        background: var(--primary-color);
        color: white;
    }

</style>