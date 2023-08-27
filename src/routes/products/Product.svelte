<script lang="ts">
    export let title = "Product title";
    export let img = "";
    export let vulgewicht = "";
    export let toerental = "";
    export let geluidsniveau = "";
    export let energielabel = "A";
    export let prijs = 0;
    export let onzeKeuze = false;
</script>

<div class="product">
    <h3>{title}</h3>
    <div class="columns">
        <div class="column">
            <a href="/products/wasmachines/samsung">
                <img src={img} alt={title}>
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
            <label class="form-checkbox">
                <input type="checkbox">
                <i class="form-icon"></i> Vergelijken
            </label> 
        </div>
        <div class="column">
            <p>Geluidsniveau</p>
            <p><b>{geluidsniveau}</b></p>
            <p>Energielabel</p>
            <p>
                <span class="energielabel">
                    <img src="/energie-label.png" alt="">
                    <span>{energielabel}</span>
                </span>
            </p>
        </div>
        <div class="column">
            <h5>€{prijs},-</h5>
            <a href="/products/wasmachines/samsung" class="btn">Meer informatie</a>
            <a href="/products/wasmachines/samsung" class="btn btn-primary">
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
        margin: 2rem 0;
    }

    h3 {
        margin-bottom: 1rem;
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
    }

    hr {
        border: solid 1px var(--highlight-color);
    }

    .energielabel {
        position: relative;

        img {
            width: 60px;
        }

        span {
            position: absolute;
            top: -1rem;
            left: 1.1rem;

            color: white;
            font-size: 1.2rem;
        }
    }
</style>