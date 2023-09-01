<script lang="ts">
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";


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

    <article class="columns order-page">

        
        <!-- Aansluiting aanvullende verzekering -->
        {#if stepIndex == 0}
            <div class="column" aria-hidden={stepIndex!==0}>
                <h2 class="h4">Aansluiting en aanvullende verzekering</h2>
                <h3 class="h5">Aansluiting</h3>
                <label class="checkbox">
                    <input type="radio" name="aansluiting" checked>
                    <p>
                        Drempellevering <br>
                        De wasmachine wordt tot de deur gebracht <a href="#uitleg">Uitleg</a>
                    </p>
                </label>
                <label class="checkbox">
                    <input type="radio" name="aansluiting">
                    <p>
                        Plaatsen en aansluiten (meerkosten € 25,-) <br>
                        De wasmachine wordt geplaatst en geïnstalleerd waar gewenst. <a href="#uitleg">Uitleg</a>
                    </p>
                </label>
                <div class="spacer" style="height: 1rem"></div>
                <h3 class="h5">Aanvullende verzekering</h3>
                <p>
                    Wil je een aanvullende verzekering van € 149,- eenmalig naast de 2 jaar garantie?
                </p>
                <label class="checkbox">
                    <input type="radio" name="verzekering" checked>
                    <p>Nee</p>
                </label>
                <label class="checkbox">
                    <input type="radio" name="verzekering">
                    <p>Ja</p>
                </label>
            </div>
        {/if}

        {#if stepIndex==1}
            <div class="column" aria-hidden={stepIndex!==1}>
                <Tooltip>
                    <b>Geen account.</b> Een veelgehoorde klacht was dat er een account moest worden aangemaakt. Weer een wachtwoord aanmaken en na het aanmaken zal de gebruiker nu vast ongewenste mail gaan ontvangen. Biedt de optie om ook als eenmalige gast te kopen aan, en geef deze optie duidelijk weer. 
                </Tooltip>
                <h2 class="h4">Adresgegevens</h2>
                <label for="aanhef">Aanhef</label>
                <div class="flex-row">
                    <label class="checkbox">
                        <input type="radio" name="aanhef" checked> mevrouw
                    </label>
                    <label class="checkbox">
                        <input type="radio" name="aanhef"> heer
                    </label>
                    <label class="checkbox">
                        <input type="radio" name="aanhef"> anders
                    </label>
                </div>

                <div class="flex-stretch">
                    <label>
                        Voornaam
                        <input type="text" class="form-input">
                    </label>
                    <label style="width: 6rem">
                        Tussenv.
                        <input type="text" class="form-input">
                    </label>
                    <label>
                        Achternaam
                        <input type="text" class="form-input">
                    </label>
                </div>

                <Tooltip offsetLeft={-20} offsetTop={55}>
                    <b>Alleen benodigde info.</b> Het invullen van een formulier vraagt best wat energie van oudere online bezoekers. Vraag daarom alleen om informatie die echt nodig is, of vertel waarom je extra informatie vraagt en maak deze optioneel. Maak gebruik van 'auto complete' zodat adresgegevens automatisch gegenereerd worden.
                </Tooltip>

                <div class="flex-row">
                    <label>
                        Postcode
                        <input type="text" class="form-input">
                    </label>
                    <label>
                        Huisnummer
                        <input type="text" class="form-input">
                    </label>
                </div>

                <div class="flex-stretch">
                    <label>
                        Straatnaam
                        <input type="text" class="form-input" disabled>
                    </label>
                </div>
                <div class="flex-stretch">
                    <label style="margin-right: -1rem">
                        Plaats
                        <input type="text" class="form-input" disabled>
                    </label>
                    <Tooltip offsetLeft={45} offsetTop={60}>
                        <b>Duidelijke foutmelding.</b> Niet verder kunnen met bestellen omdat er een fout in het formulier zit, waarbij dit niet duidelijk is, vormt voor oudere gebruikers een afhaakmoment. Laat het zien als het goed gaat (groen kader en vinkjes). Als het toch fout gaat, laat dan precies zien waar de fout zit en licht dit vriendelijk en duidelijk toe.
                    </Tooltip>
                </div>

                <div class="flex-stretch">
                    <label>
                        E-mailadres
                        <input type="text" class="form-input">
                    </label>
                </div>
                <div class="flex-stretch">
                    <label>
                        Telefoonnummer (om je eventueel te kunnen informeren)
                        <input type="text" class="form-input">
                        <Tooltip offsetLeft={-20} offsetTop={-10}>
                            <b>Zo min mogelijk inspanning en fouten.</b> Vraag alleen de informatie die echt nodig is of vertel waarom je extra informatie vraagt. 
                        </Tooltip>
                    </label>
                </div>

            </div>
        {/if}


        <!-- Product overview -->
            
        <div class="column product-overview">

            {#if stepIndex==1}
                <h2 class="h4">Ik ben al klant</h2>
                <button class="btn btn-primary">Inloggen</button>
                <div class="spacer"></div>
            {/if}

            <h2 class="h4">Jouw bestelling (winkelmandje)</h2>
            <div class="product">
                <h3 class="h5">Samsung, super zuinig met automatische wasdosering</h3>
                <p>Typenummer: WW90T534AAW</p>
                <div class="columns">
                    <div class="column col-auto">
                        <img src="/images/wasmachine-1.png" alt="wasmachine samsung" style="height: 5rem">
                    </div>
                    <div class="column">
                        <p><b>Totaalbedrag (incl BTW) €699,-</b></p>
                        <a href="/products/wasmachines" class="btn btn-small">Wijzig bestelling</a>
                        <Tooltip offsetLeft={200} offsetTop={-5}>
                            <b>Bestelling zichtbaar.</b> Laat in het hele bestelproces zien welk product er besteld wordt en geef de optie dat de bestelling nog aan te passen is.<br>
                            <b>Contact.</b> Tijdens het bestelproces zijn er vaak nog vragen. Probeer deze zoveel mogelijk in het proces in tekst te beantwoorden maar geef ook een mogelijkheid om contact op te nemen.
                        </Tooltip>
                    </div>
                </div>
            </div>
            <p>Hulp nodig met bestellen? Bel ons op 0316-123456</p>

        </div>

    </article>

    <div class="flex-row">
        <button class="btn btn-primary btn-bestellen" on:click={() => stepIndex++}>Ga door met bestellen</button>
        {#if stepIndex==1}
            <p style="margin-top: .5rem">of</p>
            <button class="btn">Ik wil een account maken</button>
            <div>
                <h5 class="h6">Voordelen van een account</h5>
                <p>
                    • Altijd gratis bezorging <br>
                    • Alle aankopen worden geregistreerd
                </p>
            </div>
            <Tooltip offsetLeft={0} offsetTop={20}>
                <b>Account.</b> Natuurlijk heb je graag dat klanten een account aanmaken. Als een account voordelen biedt, laat deze dan zien, want hierdoor zal de oudere gebruiker eerder geneigd zijn om toch een account aan te maken.
            </Tooltip>
        {/if}
    </div>


</main>

<div class="spacer"></div>

<style lang="scss">

    .order-page {
        gap: 4rem;
    }

    .product-overview {

        .product {
            border: solid 2px var(--highlight-color);
            padding: .5rem;
        }

    }

    // layout
    .flex-row {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin: 1rem 0;
    }

    .flex-stretch {
        @extend .flex-row;
        gap: 1rem;
        width: 100%;
        justify-content: stretch;

        label {
            display: block;
            width: 100%;
        }
    }

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