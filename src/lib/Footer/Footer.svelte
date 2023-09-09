<script>
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";

</script>
<footer>
    <!-- Zoekbalk -->

    <div class="hero hero-search" style="background: var(--highlight-color)">
        <div class="container grid-lg">
            <Tooltip>
                <b>Zoeken.</b> De zoekfunctie wordt vaak gebruikt. Niet alleen voor het zoeken naar producten, waarbij de vraag soms heel gedetailleerd is, zoals een kleine televisie met internet, maar ook voor vragen over bezorging, service, betaling etc. Werkt je zoekmachine goed, geeft het suggesties en gaat het vriendelijk om met typefouten? Dan is de zoekfunctie een uitkomst voor veel oudere online bezoekers.
            </Tooltip>
            <h2>Hoe kunnen we je helpen?</h2>
            <div class="search-bar">
                <input class="form-input" type="text" placeholder="Stel hier je vraag aan de klantenservice!">
                <a href="/klantenservice" class="btn input-group-btn">
                    <i class="ri-search-line"></i>
                    Zoeken
                </a>
            </div>
        </div>
        <img class="logo" src="/logo-spark.svg" alt="" aria-hidden>
    </div>

    <div class="spacer"></div>

    <!-- Informatie -->

    <div class="container grid-xl" style="padding: 2rem 0 4rem 0">
        <div class="columns">
            <div class="column col-3">
                <h3 class="h5">Klantenservice</h3><br>
                Retouren en annuleren <br>
                Betalen<br>
                Bezorgen<br>
                Reparatie & installeren<br>
                Bestellen<br>
                Winkels<br>
                Garantie<br>
            </div>
            <div class="column col-3">
                <h3 class="h5">Over Ons</h3><br>
                Over Ons<br>
                Assortiment<br>
                Blog<br>
                Nieuws<br>
                Cadeaubonnen<br>
                Werken bij <br>
                Contact<br>
                Privacy<br>
            </div>
            <div class="column col-3">
                <h3 class="h5" id="onze-winkels">Onze winkel(s)</h3><br>
                Winkel A<br>
                Dorpstraat 2<br>
                1234 AP De Stad<br><br>
                Winkel B<br>
                Winkelstraat 4<br>
                5678 NA Rijnstad <br><br>
                Winkel C<br>
                Huizenweg 6<br>
                9101 XT Wonsel<br>
            </div>
            <div class="column col-3">
                <Tooltip isLeft={true}>
                    <b>Winkel in beeld.</b> Als een webwinkel onbekend is, stelt het de oudere online bezoeker gerust als er een fysieke winkel is. Dan heeft men een plek om op terug te vallen. Het tonen van adresgegevens geeft al vertrouwen maar er waren deelnemers die online verder zochten, om te zien of er ook écht een winkel was. Dus heb je een fysieke winkel? Laat deze zien!
                </Tooltip>
                <h3 class="h5">Hoofdkantoor</h3><br>
                <img src="/images/stock-photo-kantoor.png" alt="een foto kan ons hoofdkantoor">
                <br><br>
                Hoofdkantoor <br>
                Winkelstraat 4<br>
                5678 NA Rijnstad<br>
            </div>
        </div>
    </div>

    <hr class="blue-hr">
    <div class="footer-images">
        <img src="/footer-images.svg" alt="betaalmethoden: ideal; creditcard; overboeking; betalen aan de deur; achteraf betalen; waarborg; webshop keurmerk">
    </div>
    <div class="footer-block">
        <p><span>Algemene voorwaarden</span> |  <span>Privacy</span>  |  <span>Cookies</span></p>
        <p>2023 - Stichting Accessibility</p>
        <p>Beoordeling door klanten: Tweakers 9/10 - 13.101 beoordelingen</p>
    </div>
</footer>

<style lang="scss">
    footer {
        z-index: 0;
    }

    .blue-hr {
        height: 3px;
        background-color: var(--highlight-color);
        border: none;
    }

    .footer-images {
        margin: 3rem auto;
        max-width: fit-content;
    }

    .footer-block {
        width: 100%;
        background-color: var(--secondary-color);
        padding: 2.5rem;
        padding-bottom: 2rem;
        text-align: center;

        span {
            text-decoration: underline;
            font-weight: normal;
            margin: 0 .5rem;
        }
    }

    .hero-search {
        position: relative;

        h2 {
            color: black;
        }

        .logo {
            position: absolute;
            top: -3rem;
            right: 5%;
            height: 150%;
            opacity: .2;
            pointer-events: none;
        }
    }

    .search-bar {
        display: flex;
        justify-content: stretch;
        gap: .5rem;
        input {
            width: 100%;
        }
    }
</style>