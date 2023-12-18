<script>
    // @ts-ignore
    import CookiePopup from "$lib/Cookie/CookiePopup.svelte";
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";

</script>

<CookiePopup />

<div class="container grid-xl">

    <div class="top-buttons">
        <a href="#onze-winkels" class="btn btn-small">Onze winkels</a>
        <a href="/klantenservice" class="btn btn-small">Klantenservice</a>
    </div>

    <!-- Producten -->

    <h1 class="text-primary">
        Kies een product
        <Tooltip offsetLeft={240}>
            <b>Zoeken en vinden. </b> Veel webshops tonen een banner met een actie of aanbieding. Voor de oudere online bezoeker kan dit te veel aandacht vragen, waardoor het hen afleidt van wat zij zoeken. Zorg ervoor dat er meerdere manieren zijn waarop de bezoeker je aanbod kan vinden. Bijvoorbeeld via een menu, een zoekvenster en gepresenteerd op de homepage. Het zoekvenster wordt veel gebruikt door oudere online bezoekers! Zet je aanbod gecategoriseerd op de homepage, met een afbeelding van het product mét tekst. Maak bij voorkeur gebruik van platte afbeeldingen met weinig toeters en bellen en afleidende kleuren. Let erop dat de aanklikvelden groot genoeg zijn en rondom witruimte hebben, zodat ze makkelijk aangeklikt kunnen worden.
        </Tooltip>
    </h1>


    <ul class="columns products">
        <li class="column">
            <a href="products/wasmachines" class="btn">
                <img src="/images/wasmachines.png" alt="">
                <h3>Wasmachines</h3>
            </a>
        </li>
        <li class="column tooltip">
            <a href="products/wasmachines" class="btn">
                <img src="/images/wasdrogers.png" alt="">
                <h3>wasdrogers</h3>
            </a>
        </li>
        <li class="column tooltip">
            <a href="products/wasmachines" class="btn">
                <img src="/images/koelkasten.png" alt="">
                <h3>koelkasten</h3>
            </a>
        </li>
        <li class="column tooltip">
            <a href="products/wasmachines" class="btn">
                <img src="/images/vriezers.png" alt="">
                <h3>vriezers</h3>
            </a>
        </li>
        <li class="column tooltip">
            <a href="products/wasmachines" class="btn">
                <img src="/images/vaatwassers.png" alt="">
                <h3>vaatwassers</h3>
            </a>
        </li>
    </ul>

    <ul class="columns products">
        <li class="column tooltip">
            <a href="products/wasmachines" class="btn">
                <img src="/images/smartphones.png" alt="">
                <h3>smartphones</h3>
            </a>
        </li>
        <li class="column tooltip">
            <a href="products/wasmachines" class="btn">
                <img src="/images/tablets.png" alt="">
                <h3>tablets</h3>
            </a>
        </li>
        <li class="column tooltip">
            <a href="products/wasmachines" class="btn">
                <img src="/images/monitors.png" alt="">
                <h3>monitors</h3>
            </a>
        </li>
        <li class="column tooltip">
            <a href="products/wasmachines" class="btn">
                <img src="/images/laptops.png" alt="">
                <h3>laptops</h3>
            </a>
        </li>
        <li class="column tooltip">
            <a href="products/wasmachines" class="btn">
                <img src="/images/waterkokers.png" alt="">
                <h3>waterkokers</h3>
            </a>
        </li>
    </ul>


</div>

<div class="spacer"></div>

<!-- Vertrouwen lijst -->

<div class="hero-points hero bg-primary">
    <div class="hero-body container grid-xl">
        <div class="columns">
            <ul class="column col-4" style="line-height: 1.9">
                <Tooltip>
                    <b>Service. </b> In een oogopslag de belangrijke servicepunten in beeld geeft zekerheid. Doe dit met beknopte bullets. Voor velen, maar zeker ook voor de oudere online bezoeker, vormt het retourneerproces een belemmering om te kopen. Zorg ervoor dat retourneren zo makkelijk mogelijk gaat, het liefst zonder printer. Als producten groot of zwaar zijn, kan een ophaalservice uitkomst bieden.
                </Tooltip>
                
                <li>5 dagen in de week gratis thuisbezorgd (vanaf € 25,-)</li>
                <li>Binnen 30 dagen gratis retour</li>
                <li>Makkelijk retour te zenden</li>
                <li>Klantenbeoordeling 9/10</li>
            </ul>
            <div class="column col-4">
                <div class="image-columns  columns">
                    <Tooltip>
                        <b>Keurmerk.</b> Vertrouwen hebben in een webshop is voor een oudere online bezoeker heel belangrijk. Misschien is het daarom dat veel ouderen bij de grote bekende webshops kopen. Aangesloten zijn bij een keurmerk en dit zichtbaar maken, geeft vertrouwen. Wat ook vertrouwen geeft, is gebruik maken van de veel gebruikte betaalmethodes.
                    </Tooltip>
                    <div class="column"><img src="/veilig-winkelen.svg" alt="veilig winkelen met thuiswinkel en webshop keurmerk"></div>
                    <div class="column"><img src="/vertrouwd-betalen.svg" alt="vertrouwd betalen met ideal en mastercard"></div>
                </div>
            </div>
            <div class="column col-2">
                <Tooltip isLeft={true}>
                    <b>Contact.</b> Wat ook vertrouwen geeft, is de mogelijkheid om een webshop te kunnen bellen. Of de adresgegevens te zien. Behalve bellen is een e-mail- of chatfunctie, zeker voor oudere bezoekers die slechter zijn gaan horen, een goed alternatief.
                </Tooltip>
                <p><b>Heb je vragen?</b></p>
                <ul class="contact-options">
                    <li><i class="ri-phone-line"></i> Bel ons</li>
                    <li><i class="ri-mail-line"></i> Stuur ons een mail</li>
                    <li><i class="ri-chat-3-line"></i> Gebruik de live chat</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="spacer"></div>

<!-- Samsung highlight -->

<div class="hero-samsung hero">
    <div class="columns">
        <div class="column">
            <img src="/images/wasmachine-samsung-ad.png" alt="samsung wasmachine">
        </div>
        <div class="column">
            <img src="/images/logo-samsung.png" alt="samsung" style="width: 150px; margin-left: -.2rem">
            <div class="h3" style="max-width: 400px">Deze maand <b>20% korting</b> op Samsung drogers</div>
        </div>
        <div class="column">
            <Tooltip isLeft={true}>
                <b>Reclame/Acties.</b> In ons onderzoek bleek er weinig aandacht te zijn voor actiebanners, meestal zorgden de banners juist voor afleiding of verwarring. Een enkele keer klikte men erop door maar dit waren meestal eenvoudige banners met een heldere boodschap.
            </Tooltip>
            <a href="#advertentie" class="btn" style="transform: scale(1.2)">Meer over deze actie</a>
        </div>
    </div>
</div>

<div class="spacer"></div>

<!-- Foto's -->

<div class="container grid-xl">
<div class="photo-columns columns">
    <Tooltip>
        <b>Aankleding.</b> Deze artikeltjes zijn puur ter aankleding en dienen geen doel. De oudere gebruikers in in ons onderzoek gingen hieraan voorbij.
    </Tooltip>
    <div class="column col-4">
        <img src="/images/stock-photo-ipad.png" alt="" height="230px" class="img-fit-cover">
        <h3 class="h4">Overal via je tablet tv kijken</h3>
        <p>Je kiest uit tablets met zowel wifi als wifi en 4G/5G. Met een tablet die 4G/5G ondersteunt, heb je ook toegang tot internet op plekken waar je geen veilige wifi verbinding hebt. Denk dan bijvoorbeeld aan de trein of het park. Je hebt hier wel een eSim of simkaart met mobiel internet voor nodig.</p>
    </div>
    <div class="column col-4">
        <img src="/images/stock-photo-koffie.png" alt="">
        <h3 class="h4">Heerlijke koffie in mum van tijd</h3>
        <p>Hoe vind je de machine die het beste bij je past? Daar helpen we je graag een handje bij. Zo zetten wij alle koffiezetapparaten voor jou op een rij en leggen we het verschil per machine uit. Heb je hierna nog geen keuze gemaakt? Kom dan naar een van onze winkels en test zelf een koffiemachine.</p>
    </div>
    <div class="column col-4">
        <img src="/images/stock-photo-keuken.png" alt="">
        <h3 class="h4">Een keuken in elk huis</h3>
        <p>Ga je verhuizen of krijg je een volledig nieuwe keuken? Dan heb je nieuwe keukenapparatuur nodig. Bepaal eerst of je de apparaten gaat inbouwen of dat je voor vrijstaande modellen kiest. Heb je inbouw apparatuur nodig? Let dan goed op de nismaten, zodat je zeker weet dat alles past.</p>
    </div>
</div>
</div>

<div class="spacer"></div>



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
                justify-content: space-between;
                gap: .5rem;
                height: 300px;

                box-shadow: 0px 5px 10px rgba(0,0,0,.05);

                text-transform: capitalize;

                &:hover {
                    border: solid 2px var(--dark-color);
                }

                img {
                    width: 100%;
                    height: 200px;
                    object-fit: contain;
                }

                h3 {
                    font-size: 1rem;
                }
            }

            &.tooltip::after {
                display: block;
                content: "Alle knoppen leiden naar de wasmachine. \A De wasmachine dient als voorbeeld";
                white-space: pre;
                text-wrap: initial;
                text-align: center;
                width: fit-content;
                background-color: var(--primary-color);
                bottom: -10%;
            }
        }
    }

    .hero-points {
        background-color: var(--secondary-color) !important;
        color: var(--dark-color);

        padding: 2rem;
        padding-top: 3rem;

        .hero-body > .columns {
            align-items: flex-start;
            justify-content: center;

            gap: 2rem;

            * {
                margin: 0;
            }
        }

        .image-columns {
            img {
                margin: 0;
                width: 100%;
                scale: 1.05;
            }
        }

        .contact-options {
            list-style: none;

            i {
                font-size: 1.1rem;
                margin-right: .5rem;
            }
        }
    }

    .hero-samsung {
        background: linear-gradient(130deg, var(--highlight-color) 0%, var(--highlight-color) 75%, #12CFF7 75.01%) !important;

        max-height: 300px;
        padding: 0;
        margin: 4rem 0;

        .columns {
            justify-content: center;
            align-items: center;
            gap: 3rem;
            width: 100%;
            max-width: 1400px;
            margin: 0 auto;
        }
        .column {
            flex: unset;
            margin-top: -3rem;
        }

        img {
            width: 350px;
        }
    }

    .photo-columns {
        
        .column:not(:last-child) {
            padding-right: 2rem;
        }
        img {
            width: 100%;
            margin-bottom: 1rem;
            height: 12rem;
            object-fit: cover;
        }
    }
</style>
