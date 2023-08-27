<script>
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
    import ImageGallery from "./ImageGallery.svelte";
</script>

<div class="spacer"></div>

<div class="container grid-xl" style="margin: 2rem auto">
    <!-- Breadcrumb -->
    <a href="/home" class="btn btn-primary">
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
    <h2>Samsung superzuinig met automatisch wasmiddeldosering</h2>
    <h5>Typenummer:  WW90T534AAW</h5>

    <div class="columns">
        <!-- Image Gallery -->
        <ImageGallery images={["/images/wasmachines.png", "/images/wasdrogers.png", "/images/vaatwassers.png"]}/>
        <!-- Description -->
        <h3>
            Omschrijving
            <Tooltip offsetLeft={200}>
                <b>Weinig inspanning.</b> De oudere bezoeker leest meestal goed, is doorgaans geen scannende lezer. Daarom is een overzichtelijke, niet al te langer tekst, prettig. Gebruik daarbij duidelijke en ruim opgezette bulletpoints, want dit helpt de bezoeker om, zonder veel inspanning, een beeld te krijgen van een product. Gaat het over een gebruiksartikel? Zeg dan iets over het gewicht, de grootte of de bedienbaarheid, eventueel ondersteund met foto's. Geef uitleg bij technische termen of Engelstalige woorden.
            </Tooltip>
        </h3>
        <ul>
            <li>Doseert altijd de juiste hoeveelheid wasmiddel en wasverzachter dankzij Autodose (<a href="#uitleg">Uitleg</a>).</li>
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
            <a href="/products/wasmachines" class="btn btn-primary">Bestellen</a>
        </div>
    </div>

    <div class="v-list">
        <p>Gratis bezorgd</p>
        <p>30 dagen bedenktijd en gratis retourneren</p>
        <p>Oude machine wordt meegenomen</p>
    </div>
</div>

<style lang="scss">
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