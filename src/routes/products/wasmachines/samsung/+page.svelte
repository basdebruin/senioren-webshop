<script>
    import Explainer from "$lib/Tooltip/Explainer.svelte";
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
    import { shoppingCartFull } from "$lib/stores";
    import ImageGallery from "./ImageGallery.svelte";
    import Reviews from "./Reviews.svelte";
    import Specs from "./Specs.svelte";
</script>

<div class="spacer"></div>

<div class="container grid-xl" style="margin: 2rem auto">
    <!-- Breadcrumb -->
    <a href="/products/wasmachines" class="btn btn-primary">
        <i class="ri-arrow-left-s-line"></i> Terug
    </a>
    <ul class="breadcrumb" style="display: inline-block; margin-left: 1rem">
        <li class="breadcrumb-item">
            <a href="/home">Beginpagina</a>
        </li>
        <li class="breadcrumb-item"> 
            <a href="/products/wasmachines">Wasmachines</a> 
        </li>
        <li class="breadcrumb-item"> 
            <a href="#samsung">Samsung</a> 
        </li>
    </ul>


    <div class="spacer"></div>

    <!-- Title -->
    <Tooltip>
        <b>Een titel met informatie.</b> De meeste webshops gebruiken een productnummer in de titel boven een product. In het productoverzicht helpt een beschrijvende titel met het geven van een richting om zo tot een keuze te komen. Het is wel belangrijk dat het productnummer zichtbaar blijft, want via dit nummer kan men online, buiten de webshop om, naar meer informatie of naar recensies zoeken.
    </Tooltip>
    <h1>Samsung superzuinig met automatisch wasmiddeldosering</h1>
    <h5>Typenummer:  WW90T534AAW</h5>

    <div class="columns">
        <!-- Image Gallery -->
        <div class="column col-5">
            <ImageGallery 
                images={["/images/wasmachine-hires.png", "/images/wasmachine-hires-2.png", "/images/wasmachine-hires-3.png", "/images/wasmachine-hires-4.png"]}/>
            <Tooltip offsetTop={-45} offsetLeft={65}>
                <b>Foto's zeggen veel meer dan woorden.</b> Als er als kenmerk 'eenvoudig te bedienen' vermeld staat is het bv fijn als er ook een foto is met het bedieningspaneel goed te zien opdat de gebruiker daar zich een mening over kan vormen.
            </Tooltip>
        </div>
        <!-- Description -->
        <div class="column col-6" style="max-width: 45%">

            <h3>
                Omschrijving
            </h3>
            <Tooltip offsetLeft={175} offsetTop={-10}>
                <b>Weinig inspanning.</b> De oudere bezoeker leest meestal goed, is doorgaans geen scannende lezer. Daarom is een overzichtelijke, niet al te langer tekst, prettig. Gebruik daarbij duidelijke en ruim opgezette bulletpoints, want dit helpt de bezoeker om, zonder veel inspanning, een beeld te krijgen van een product. Gaat het over een gebruiksartikel? Zeg dan iets over het gewicht, de grootte of de bedienbaarheid, eventueel ondersteund met foto's. Geef uitleg bij technische termen of Engelstalige woorden.
            </Tooltip>
            <ul>
                <li>Doseert altijd de juiste hoeveelheid wasmiddel en wasverzachter dankzij Autodose (
                    <Explainer title="Autodose">
                        Verspilling wil iedereen graag voorkomen en de Autodose-functie helpt daarbij. Deze functie registreert precies de hoeveelheid was en past daarop de dosering van het wasmiddel en wasverzachter aan. Zo gebruikt de machine nooit te veel of te weinig.
                    </Explainer>
                ).</li>
                <li>De wasmachine heeft met 8 kilogram vulgewicht een ruime trommel.</li>
                <li>Je wast hiermee zeer grote ladingen was in één keer.</li>
                <li>Om beddengoed, ondergoed of handdoeken grondig schoon te wassen, gebruik je het hygiënisch stoomprogramma.</li>
                <li>Met SmartThings koppel je de wasmachine aan je smartphone of tablet</li>
                <li>De bediening is heel eenvoudig.</li>
            </ul>
            <div class="price">
                € 699,-
            </div>
            <ul>
                <li>2 jaar garantie</li>
                <li>gratis thuisbezorgd en aangesloten</li>
                <li>gratis retourneren binnen 30 dagen.</li>
            </ul>
            
            <Tooltip offsetLeft={-20} offsetTop={35}>
                <b>Navigeren.</b> Zorg ervoor de gebruiker makkelijk heen en terug kan, zonder uit de bestelflow te geraken. Gebruik knoppen van minimaal 25x25 pixels formaat, let altijd op zaken als contrast en helder taalgebruik. Een knop in het bestelproces met de naam 'verzenden' in plaats van bijvoorbeeld 'verder met bestellen' leidde ertoe dat een van de deelnemers zo verward was dat zij van de aankoop afzag: 'Hoe kan het nu verzonden worden zonder dat ik mijn adres heb opgegeven?'
            </Tooltip>
            <div class="desc-buttons">
                <a href="/products/wasmachines" class="btn">Terug naar overzicht</a>
                <a href="/shopping-cart" class="btn btn-primary" on:click={() => {shoppingCartFull.set(true)}}>Bestellen</a>
            </div>
        </div>
    </div>

    <div class="v-list">
        <p>Gratis bezorgd</p>
        <p>30 dagen bedenktijd en gratis retourneren</p>
        <p>Oude machine wordt meegenomen</p>
    </div>

    <!-- Specs -->
    <h2 style="margin-bottom: 1rem">Specificaties</h2>
    <Tooltip offsetLeft={175} offsetTop={-20}>
        <b>Gedoseerde informatie.</b> Vaak zijn de specificaties heel uitvoerig en dat vereist vaak veel scrollen, waardoor een pagina onoverzichtelijk is voor de oudere bezoeker. Veel informatie kun je door middel van tabbladen gecontroleerd en gedoseerd weergeven.
    </Tooltip>
    <Specs/>

</div>


<div class="spacer"></div>



<div class="container grid-xl reviews">
    <!-- Reviews -->
    <h3>Referenties</h3>
    <Tooltip offsetLeft={150} offsetTop={-8}>
        <b>Recensies.</b> De mening van andere kopers doet ertoe (al zijn er ouderen die recensies juist wantrouwen, want 'die schrijven ze vast zelf'). Regelmatig werd er ook nog op externe reviewsites gekeken. Plaats bovenin de plus- en minpunten en daarna het de recensie opdat men sneller de belangrijke info tot zich kan nemen.
    </Tooltip>

    <Reviews />

</div>

<div class="spacer"></div>

<style lang="scss">
    .columns {
        gap: 1rem;
    }

    .price {
        font-size: 1.7rem;
        font-weight: bold;
    }
    .desc-buttons {
        display: flex;
        gap: 1rem;
        flex-grow: 1;
        justify-content: stretch;
        > * {
            display: block;
            width: 100%;
        }
    }
    .v-list {
        display: flex;
        justify-content: space-around;
        margin: 2rem auto;
        font-weight: bold;
    }
</style>