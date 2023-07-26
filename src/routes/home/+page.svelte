<script>
    import CookiePopup from "$lib/Cookie/CookiePopup.svelte";
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";

</script>

<CookiePopup />

<div class="container grid-xl">

    <div class="top-buttons">
        <a href="#winkels" class="btn btn-small">Onze winkels</a>
        <a href="/klanten-service" class="btn btn-small">Klantenservice</a>
    </div>

    <h2 class="text-primary">
        <Tooltip>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, aliquam saepe. Earum minus consequuntur excepturi quae beatae quod libero dolore autem ea voluptatum quo repudiandae vero ad, aperiam vel hic!</p>
        </Tooltip>
        Kies een product
    </h2>


    <ul class="columns products">
        <li class="column">
            <a href="product-wasmachines" class="btn">
                <img src="/images/wasmachines.png" alt="">
                <h3>Wasmachines</h3>
            </a>
        </li>
        <li class="column">
            <a href="product-wasdrogers" class="btn">
                <img src="/images/wasdrogers.png" alt="">
                <h3>wasdrogers</h3>
            </a>
        </li>
        <li class="column">
            <a href="product-koelkasten" class="btn">
                <img src="/images/koelkasten.png" alt="">
                <h3>koelkasten</h3>
            </a>
        </li>
        <li class="column">
            <a href="product-vriezers" class="btn">
                <img src="/images/vriezers.png" alt="">
                <h3>vriezers</h3>
            </a>
        </li>
        <li class="column">
            <a href="product-vaatwassers" class="btn">
                <img src="/images/vaatwassers.png" alt="">
                <h3>vaatwassers</h3>
            </a>
        </li>
    </ul>

    <ul class="columns products">
        <li class="column">
            <a href="product-smartphones" class="btn">
                <img src="/images/smartphones.png" alt="">
                <h3>smartphones</h3>
            </a>
        </li>
        <li class="column">
            <a href="product-tablets" class="btn">
                <img src="/images/tablets.png" alt="">
                <h3>tablets</h3>
            </a>
        </li>
        <li class="column">
            <a href="product-monitors" class="btn">
                <img src="/images/monitors.png" alt="">
                <h3>monitors</h3>
            </a>
        </li>
        <li class="column">
            <a href="product-laptops" class="btn">
                <img src="/images/laptops.png" alt="">
                <h3>laptops</h3>
            </a>
        </li>
        <li class="column">
            <a href="product-waterkokers" class="btn">
                <img src="/images/waterkokers.png" alt="">
                <h3>waterkokers</h3>
            </a>
        </li>
    </ul>


</div>

<div class="hero bg-primary">
    <div class="hero-body container grid-xl">
        <div class="columns">
            <ul class="column col-4">
                <li>5 dagen in de week gratis thuisbezorgd (vanaf € 25,-)</li>
                <li>Binnen 30 dagen gratis retour</li>
                <li>Makkelijk retour te zenden</li>
                <li>Klantenbeoordeling 9/10</li>
            </ul>
            <div class="column col-4">
                veilig winkelen, vertrouwd betalen
            </div>
            <div class="column col-2">
                <p>Heb je vragen?</p>
                <ul>
                    <li>Bel ons</li>
                    <li>Stuur ons een mail</li>
                    <li>Gebruik de live chat</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .top-buttons {
        margin-top: 5rem;
        text-align: right;
    }

    .products {
        flex-wrap: nowrap;

        li {
            list-style: none;

            a {
                display: flex;
                padding: 1rem;
                border: var(--highlight-color) 1px solid;
                flex-direction: column;
                align-items: center;
                justify-content: space-evenly;
                gap: .5rem;
                height: 300px;

                box-shadow: 0px 5px 10px rgba(0,0,0,.05);

                text-transform: capitalize;

                img {
                    width: 100%;
                    max-height: 200px;
                    object-fit: contain;
                    mix-blend-mode: multiply;
                }

                h3 {
                    font-size: 1rem;
                }
            }
        }
    }
</style>