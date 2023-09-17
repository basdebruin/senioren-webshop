<script>
    // @ts-nocheck

    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
    import Logo from "./Logo.svelte";
    import { shoppingCartFull } from "$lib/stores";
    import { clickOutside } from "$lib/clickOutside";

    let dropdownOpen = false;
</script>


<nav>
    <div class="nav-container">
        <div>
            <Logo />
        </div>

        <Tooltip offsetLeft={35} offsetTop={28}>
            <b>In controle zijn.</b> Een gebruiker die niet vaak webshops bezoekt, en die ervaart dat er inééns iets op een pagina gebeurt, zonder dat hij/zij bewust iets doet, kan daarvan schrikken. Laat een dropdownmenu pas verschijnen als de gebruiker zélf op het menu klikt. En niet wanneer hij/zij er overheen hoovert.
        </Tooltip>

        <div class="popout popout-bottom" class:active={dropdownOpen} use:clickOutside on:click_outside={() => dropdownOpen=false}>
            <button class="btn btn-primary" on:click={() => dropdownOpen=!dropdownOpen}>
                Alle producten
                <i class="ri-arrow-down-s-line"></i>
            </button>
            <div class="popout-container">
                <ul class="menu">
                    <li class="menu-item">
                        <a href="/products/wasmachines">Wasmachines</a>
                    </li>
                    <li class="menu-item">
                        <a href="/products/wasmachines">Wasdrogers</a>
                    </li>
                    <li class="menu-item">
                        <a href="/products/wasmachines">Koelkasten</a>
                    </li>
                    <li class="menu-item">
                        <a href="/products/wasmachines">Vriezers</a>
                    </li>
                    <li class="menu-item">
                        <a href="/products/wasmachines">Vaatwassers</a>
                    </li>
                    <li class="menu-item">
                        <a href="/products/wasmachines">Smartphones</a>
                    <li class="menu-item">
                        <a href="/products/wasmachines">Tablets</a>
                    </li>
                    <li class="menu-item">
                        <a href="/products/wasmachines">Monitors</a>
                    </li>
                    <li class="menu-item">
                        <a href="/products/wasmachines">Laptops</a>
                    </li>
                    <li class="menu-item">
                        <a href="/products/wasmachines">Waterkokers</a>
                    </li>
                </ul>
            </div>
        </div>


        <section class="search">
            <div class="input-group">
                <input class="form-input" type="text" placeholder="Waar ben je naar op zoek?">
                <button class="btn btn-primary input-group-btn">
                    <i class="ri-search-line"></i>
                    Zoeken
                </button>
            </div>
        </section>

        <section>
            <Tooltip offsetLeft={15} offsetTop={50} isLeft={true}>
                <b>Herkenbaarheid en bevestiging.</b> In het onderzoek vonden diverse deelnemers het spannend om op een icoon te klikken. Iconen zijn niet voor iedereen meteen duidelijk. Maak dus gebruik van herkenbare iconen, zoals die op de meeste webshops te zien zijn, in combinatie met tekst.
            </Tooltip>
            <a class="btn btn-primary" href="/account">
                <i class="ri-account-circle-fill"></i>
                Account
            </a>
        </section>
        <section>
            <a class="btn btn-primary" href="/shopping-cart">
                <i class="ri-shopping-basket-2-line"></i>
                Winkelmandje
                {#if $shoppingCartFull}
                    <div class="shopping-cart-indicator">1</div>
                {/if}
            </a>
        </section>
    </div>
</nav>


<style lang="scss">
    nav {
        position: fixed;
        top: 0; left: 0;
        width: 100%;
        height: 3rem;
        background-color: var(--primary-color);
        z-index: 900;

        .nav-container {
            display: flex;
            flex-flow: row nowrap;
            align-items: center;
            justify-content: stretch;

            width: 100%;
            max-width: 1500px;
            margin: 0 auto;

            height: 100%;
    
            padding: 1rem;
            gap: 1rem;
        }


        .search {
            flex-grow: 1;
        }

        .shopping-cart-indicator {
            position: absolute;
            top: 0px; right: 5px;
            width: 30px;
            height: 30px;
            padding: .1rem;
            border-radius: 100%;
            background-color: white;
            border: solid 1px var(--primary-color);
            color: var(--primary-color);
        }

        // custom popout that clicks
        .popout {
            display: inline-block;
            position: relative;

            .popout-container {
                display: block;
                left: 50%;
                opacity: 0;
                padding: .5rem;
                position: absolute;
                top: 0;
                transform: translate(-50%, -50%) scale(0);
                transition: transform .2s;
                width: 350px;
                z-index: 300;

                .menu-item a {
                    padding: .5rem 1rem;

                    &:hover {
                        background-color: var(--primary-color);
                        color: white;
                    }
                }
            }

            &.active .popout-container {
                display: block;
                opacity: 1;
                transform: translate(-50%, 10%) scale(1);
            }

            &.popout-bottom {
                .popout-container {
                    left: 50%;
                    top: 0;
                }
            }
        }
    }
</style>