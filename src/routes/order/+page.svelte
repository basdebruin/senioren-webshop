<script lang="ts">
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
    import Input from "./Input.svelte";
    import TabAdresgegevens from "./TabAdresgegevens.svelte";
    import TabBetaalmethoden from "./TabBetaalmethoden.svelte";
    import TabVerzekering from "./TabVerzekering.svelte";
    import TabVerzendmethoden from "./TabVerzendmethoden.svelte";


    let stepIndex = 0;
    let steps = [
        { name: "Verzekering",      component: TabVerzekering },
        { name: "Adresgegevens",    component: TabAdresgegevens },
        { name: "Verzendmethoden",  component: TabVerzendmethoden },
        { name: "Betaalmethoden",   component: TabBetaalmethoden },
    ];

    let accountActive = false;
    let accountPasswordShown = false;
</script>

<div class="spacer" style="height: 100px"></div>

<main class="container grid-xl">

    <!-- Navigation -->
    <div class="order-navigation">
        <!-- Steps -->
        <a href="/shopping-cart" class="btn btn-primary" style="height: 2.5rem"><i class="ri-arrow-left-s-line"></i> Terug</a>
        <ul class="step">
            {#each steps as step, index}
                <li class="step-item" class:active={stepIndex >= index}>
                    <a data-index={index+1} href="#step-{index}" on:click={() => stepIndex = index}>{step.name}</a>
                </li>
            {/each}
            <Tooltip isLeft={true} offsetTop={15} offsetLeft={-30}>
                <b>Overzicht.</b> Het zijn vaak best wat stappen die een koper moet doorlopen. Het is fijn dat deze stappen inzichtelijk zijn.
            </Tooltip>
        </ul>
    </div>

    <!-- Ordering pages -->

    <article class="columns order-page">


        <!-- Load Page Component -->
        <svelte:component this={steps[stepIndex].component} />


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
                        <span class="price">Totaalbedrag (incl BTW) <h3>€ 699,-</h3></span>
                        <a href="/shopping-cart" class="btn btn-small">Wijzig bestelling</a>
                        <Tooltip offsetLeft={200} offsetTop={-5}>
                            <b>Bestelling zichtbaar.</b> Laat in het hele bestelproces zien welk product er besteld wordt en geef de optie dat de bestelling nog aan te passen is.
                            <br><br>
                            <b>Contact.</b> Tijdens het bestelproces zijn er vaak nog vragen. Probeer deze zoveel mogelijk in het proces in tekst te beantwoorden maar geef ook een mogelijkheid om contact op te nemen.
                        </Tooltip>
                    </div>
                </div>

                {#if stepIndex == 3}
                    <div class="summary">
                        <p><b>Bezorging</b></p>
                        <p>do 6 feb 8:30 - 17:00</p>
                        <button class="btn btn-small" on:click={() => stepIndex = 2}>Wijzig bezorgdatum</button>
                    </div>
                    <div class="summary">
                        <p><b>Adres</b></p>
                        <p>
                            Naam van de klant <br>
                            Niemweg 12 <br>
                            1243 CS Wilvenhorst
                        </p>
                        <button class="btn btn-small" on:click={() => stepIndex = 1}>Wijzig adres</button>
                    </div>
                {/if}

            </div>
            <p style="margin-top: 1rem">Hulp nodig met bestellen? Bel ons op 0316-123456</p>

        </div>

    </article>

    <!-- Bestellen en Account -->

    <div class="flex-row">
        {#if stepIndex < 3}
            <button class="btn btn-primary btn-bestellen" on:click={() => stepIndex++}>Ga door met bestellen</button>
        {/if}
        {#if stepIndex == 3}
            <div>
                <a class="btn btn-primary btn-bestellen" href="/order/order-complete">Bestelling betalen</a>
                <p style="margin-top: 1rem">U gaat nu naar de website van uw bank</p>
            </div>
        {/if}
        {#if stepIndex==1}
            <p style="margin-top: .5rem">of</p>
            <button class="btn" on:click={()=>accountActive=true}>Ik wil een account maken</button>
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
    {#if stepIndex==1}
        <div class="account" class:active={accountActive}>
            <h3 class="h5">Account aanmaken</h3>
            <div class="flex-row">
                <Input 
                label="Wachtwoord"
                    clickedText={accountPasswordShown ? "wachtwoord123" : "•••••••••••••"}
                    width="30rem"/>
                <button class="show-password" on:click={() => accountPasswordShown=!accountPasswordShown}>
                    <i class=  {accountPasswordShown ? "ri-eye-off-fill" : "ri-eye-fill"}></i>
                    Wachtwoord {accountPasswordShown ? "verbergen" : "tonen"}
                </button>
            </div>
            <button class="btn btn-primary btn-bestellen" on:click={() => stepIndex++}>Ga door met bestellen</button>
        </div>
    {/if}


</main>

<div class="spacer"></div>

<style lang="scss">

    .order-page {
        gap: 4rem;
    }

    :global(.order-page h2) {
        margin-bottom: 1rem;
    }

    .product-overview {

        .product {
            border: solid 2px var(--highlight-color);
            padding: .5rem;

            .summary {
                display: flex;
                width: 100%;
                gap: .5rem;
                align-items: flex-start;

                margin-top: 1rem;
                > * {
                    flex-grow: 1
                }
            }
        }

    }


    // BOTTOM

    .order-navigation {
        display: flex;
        gap: 1rem;
        margin: 2rem 0;
    }

    .flex-row {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin: 1rem 0;
    }

    // lines
    .step-item * {
        color: var(--primary-color) !important;
    }
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
        font-weight: 600;
    }
    .step .step-item a::before {
        width: 1.5rem;
        height: 1.5rem;
        top: -.6rem;
        padding-top: .05rem;
        font-weight: 600;
        content: attr(data-index);
        background: white !important;
        border: solid 1.5px var(--primary-color);
    }
    .step .step-item.active a::before {
        background: var(--primary-color) !important;
        color: white;
    }

    // price
    .price {
        display: flex;
        gap: .5rem;
        align-items: baseline;
        font-weight: bold;
        * { 
            color: var(--dark-color);
        }
        margin-top: 1rem;

        h3 {
            font-size: 1.25rem;
        }
    }


    // Make Account 
    .account {
        &:not(.active){
            opacity: .1;
            pointer-events: none;
        }
        .show-password {
            display: inline-flex;
            align-items: center;
            background: none;
            border: none;
            margin-top: 1.4rem;
            cursor: pointer;

            border-radius: .2rem;
            padding: 0 .5rem;

            transition: background .2s;
            &:hover {
                background-color: var(--secondary-color);
            }
        }
    }
    
</style>