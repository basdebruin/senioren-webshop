<div class="spacer"></div>
<div class="spacer"></div>

<div class="container grid-lg">

    <a href="/home" class="btn btn-primary"><i class="ri-arrow-left-s-line"></i> Beginpagina</a>
    <h2 style="margin-top: 2rem">Klantenservice</h2>

    <div class="columns">
        <div class="column buttons">
            <a href="#retourneren">
                <span class="icon"><i class="ri-truck-fill"></i></span>
                <span class="text">Retourneren &amp; annuleren</span>
            </a>
            <a href="#betalen">
                <span class="icon"><i class="ri-bank-card-fill"></i></span>
                <span class="text">Betalen</span>
            </a>
            <a href="#bestellen">
                <span class="icon"><i class="ri-mac-fill"></i></span>
                <span class="text">Bestellen</span>
            </a>
            <a href="#bezorgen">
                <span class="icon"><i class="ri-archive-fill"></i></span>
                <span class="text">Bezorgen</span>
            </a>
            <a href="#garantie">
                <span class="icon"><i class="ri-article-fill"></i></span>
                <span class="text">Garantie</span>
            </a>
        </div>
        <div class="column buttons">
            <a href="#cadeau">
                <span class="icon"><i class="ri-gift-fill"></i></span>
                <span class="text">Cadeaubon</span>
            </a>
            <a href="#reparatie">
                <span class="icon"><i class="ri-tools-fill"></i></span>
                <span class="text">Reparatie en installeren</span>
            </a>
            <a href="#winkels">
                <span class="icon"><i class="ri-map-pin-2-fill"></i></span>
                <span class="text">Winkels</span>
            </a>
            <a href="#account">
                <span class="icon"><i class="ri-account-box-fill"></i></span>
                <span class="text">Account &amp; voorwaarden</span>
            </a>
            <a href="#gegevens">
                <span class="icon"><i class="ri-home-5-fill"></i></span>
                <span class="text">Bedrijfsgegevens</span>
            </a>
        </div>
    </div>

</div>

<div class="spacer"></div>

<style lang="scss">
    .buttons > a {
        display: flex;
        align-items: center;
        gap: 1rem;
        border: solid 1px var(--highlight-color);
        border-radius: .5rem;
        overflow: hidden;
        margin: .5rem 0;
        
        transition: all .2s;

        .icon {
            display: inline-block;
            height: 100%;
            background: var(--highlight-color);
            padding: .5rem 1rem;

            font-size: 2rem;
            color: white;
        }

        &:hover {
            text-decoration: none;
            background-color: var(--secondary-color);
        }
    }
</style>