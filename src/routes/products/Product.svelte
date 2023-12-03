<script lang="ts">
    import Explainer from "$lib/Tooltip/Explainer.svelte";
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
import { shoppingCartFull } from "$lib/stores";
    import EnergieLabel from "./wasmachines/EnergieLabel.svelte";

    export let title = "Product title";
    export let img = "";
    export let vulgewicht = "";
    export let toerental = "";
    export let geluidsniveau = "";
    export let energielabel = "A";
    export let prijs = 0;
    export let onzeKeuze = false;

    export let showTooltip = false;
</script>

<div class="product">
    <h3>{title}</h3>
    <div class="columns">
        <div class="column">
            <a href="/products/wasmachines/samsung">
                <img src={img} alt={title} class="product-image">
                {#if onzeKeuze}
                    <div class="onze-keuze">Onze keuze</div>
                {/if}
            </a>
        </div>
        <div class="column">
            <p>Vulgewicht</p>
            <p><b>{vulgewicht}</b></p>
            <p>Toerental</p>
            <p><b>{toerental}</b></p>

            <div class="compare">
                <label class="form-checkbox">
                    <input type="checkbox">
                    <i class="form-icon"></i> Vergelijken
                </label> 
                <Explainer title="Vergelijken">
                    <b>Hoe werkt dit?</b> <br>
                    Zet een vinkje bij 'Vergelijk' bij drie
                    producten die je graag met elkaar wil
                    vergelijken. Er verschijnt een nieuw venster met de gekozen producten naast elkaar.
                </Explainer>
                {#if showTooltip}
                    <Tooltip offsetLeft={40} offsetTop={14}>
                        <b>Vergelijken.</b> Oudere gebruikers nemen de tijd om zich te oriënteren, meerder producten met elkaar kunnen vergelijken in een oogopslag helpt hen een goede keuze te kunnen maken.
                    </Tooltip>
                {/if}
            </div>
        </div>
        <div class="column">
            <p>Geluidsniveau</p>
            <p><b>{geluidsniveau}</b></p>
            <p>Energielabel</p>
            <p>
                <EnergieLabel energielabel={energielabel} />
            </p>
        </div>
        <div class="column">
            <h3 style="font-size: 1.25rem">€ {prijs},-</h3>
            <a href="/products/wasmachines/samsung" class="btn">Meer informatie</a>
            <a href="/shopping-cart" class="btn btn-primary" on:click={() => shoppingCartFull.set(true)}>
                <i class="ri-shopping-basket-2-fill"></i>
                Bestel nu
            </a>

        </div>
    </div>
</div>
<hr>


<style lang="scss">
    .product {
        position: relative;
        margin: 1rem 0;
    }

    .product-image {
        width: 100%;
        height: 200px;
        object-fit: contain;
    }

    h3 {
        margin-bottom: 1rem;
    }

    p {
        font-size: .7rem;
        margin: .7rem 0;
    }

    .onze-keuze {
        position: absolute;
        top: 9rem; left: -1rem;

        background-color: var(--primary-color);
        padding: .4rem 1rem;
        border-radius: 0 .2rem .2rem 0;
        color: white;
    }

    .btn {
        margin: .3rem 0;
        width: 100%;
    }

    hr {
        border: solid 1px var(--highlight-color);
    }

    .compare {
        display: flex;
        align-items: center;
    }
</style>