<script lang="ts">
    import { shoppingCartFull } from "$lib/stores";
    import Product from "../products/Product.svelte";
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
            <Product 
                title="Samsung superzuinig met automatisch wasmiddeldosering" 
                img="/images/wasmachines.png"
                vulgewicht="8 kg"
                toerental="1400"
                geluidsniveau="stil (71dB)"
                energielabel="A"
                onzeKeuze={true}
                prijs={699}
            />
            <button class="btn" on:click={() => (shoppingCartFull.set(false))}><i class="ri-delete-bin-line"></i> Delete</button>
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
        padding: 0 2rem;
    }

    .order-buttons {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
    }
</style>