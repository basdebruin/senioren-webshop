<script lang="ts">
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
import { shoppingCartFull } from "$lib/stores";
    import Product from "../products/Product.svelte";
    import EnergieLabel from "../products/wasmachines/EnergieLabel.svelte";
</script>

{#if !$shoppingCartFull}    
    <article class="empty">
        <div class="empty-icon">
            <i class="ri-shopping-basket-2-line"></i>
        </div>
        <h1 class="empty-title">Winkelmandje</h1>
        <p class="empty-subtitle">Je winkelmandje is nog leeg</p>
        <div class="empty-action">
            <a href="/home" class="btn btn-primary">
                <i class="ri-arrow-left-s-line"></i> 
                Terug
            </a>
        </div>
    </article>
{/if}
{#if $shoppingCartFull}
    <div class="spacer" style="height: 100px"></div>
    <div class="container grid-lg">
        <h1>Winkelmandje</h1>
        <div class="product">
            <h2 class="h3">Samsung superzuinig met automatisch wasmiddeldosering</h2>
            <p><b>Typenummer: WW90T534AAW</b></p>
            <div class="columns">
                <div class="column img-col">
                    <img src="/images/wasmachines.png" alt="">
                </div>
                <div class="column">
                    <p>Vulgewicht</p>
                    <p><b>8 kg</b></p>
                    <p>Geluidsniveau</p>
                    <p><b>stil (71 dB)</b></p>
                    <p>Toerental</p>
                    <p><b>1400</b></p>
                    <p>Energielabel</p>
                    <EnergieLabel />
                </div>
                <div class="column">
                    <h4 class="h5">Berzorging en service</h4>
                    <Tooltip offsetLeft={235} offsetTop={-10} isLeft={true}>
                        <b>Beantwoord de vragen.</b> Zodra het product in het mandje zit, begint men zich af te vragen hoe het zit met de service en de bestelling. Dit is hét moment om dit soort informatie te tonen. Op die manier voorkom je dat de bezoeker ergens anders op de site moet gaan zoeken, en het product vergeet of niet meer terug kan vinden.
                        <br><br>
                        <b>Product verwijderen. </b> In het onderzoek gaven de oudere deelnemers regelmatig aan, dat als ze het product niet wilden hebben, ze het product uit hun mandje wilden halen omdat ze het idee hadden dat ze anders misschien alsnog ergens aan vast zouden zitten. Voeg een knop 'verwijderen' toe, dat stelt de klant gerust.
                    </Tooltip>
                    <ul>
                        <li>2 jaar garantie</li>
                        <li>Gratis thuisbezorgd en aangesloten</li>
                        <li>Gratis retourneren binnen 30 dagen</li>
                        <li>Zelf je bezorgmoment kiezen</li>
                        <li>Levertijd 2-3 weken</li>
                    </ul>

                    <span class="price">Totaalbedrag (incl BTW) <h4>€699,-</h4></span>

                    <button class="btn btn-small" on:click={() => (shoppingCartFull.set(false))}><i class="ri-delete-bin-line"></i> Delete</button>
                </div>
            </div>
        </div>
        <div class="order-buttons">
            <a href="/products/wasmachines" class="btn">Verder winkelen</a>
            <a href="/order" class="btn btn-primary">Ga door met bestellen</a>
        </div>
    </div>
{/if}

<button class="btn" on:click={() => (shoppingCartFull.set(true))}>Add product</button>

<style lang="scss">
    article {
        background: none;
        padding: 10rem 6rem;

        .empty-icon {
            font-size: 7rem;
        }
    }

    .product {
        border: solid 2px var(--primary-color);
        padding: 1rem;

        .img-col {
            max-width: 200px;
            margin-right: 2rem;
            img {
                width: 100%;
            }
        }

        p {
            margin: .5rem 0;
        }

        .price {
            display: flex;
            gap: .5rem;
            font-weight: bold;
            * { 
                color: var(--dark-color);
            }
            margin-top: 1rem;
        }
    }

    .order-buttons {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
    }
</style>