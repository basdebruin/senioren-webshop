<script>
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
    import Product from "../Product.svelte";
    import Filters from "./Filters.svelte";

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
            <a href="#wasmachines">Wasmachines</a> 
        </li>
        <Tooltip offsetLeft={250}>
            <b>Voor orientatie.</b> “Hoe kom ik terug” is een veelgehoorde vraag in dit onderzoek. Het zoekraken is een heikel punt bij veel oudere bezoekers. Een 'terug' knop helpt enorm. Een kruimelpad met daarin de stappen waar de gebruiker nu zit is ook handig.
        </Tooltip>
    </ul>

    <div class="spacer" style="height: 2rem"></div>

    <div class="columns">
        <!-- Filters -->
        <div class="column col-3 filters">
            <Filters />
        </div>
        <div class="column col-8">

            <!-- Title -->
            <h1>Wasmachines</h1>
            <p>
                Je kunt de wasmachine die voor jou geschikt is makkelijker vinden door je voorkeuren hier links aan te geven. Na het toepassen van de voorkeuren zie je de wasmachines die aan jouw wensen voldoen.
            </p>
            
            <!-- Products -->
            <Tooltip offsetLeft={-20} offsetTop={25}>
                <b>Vergelijken: 3 producten boven de 'vouw'.</b> De oudere gebruiker wil makkelijk kunnen vergelijken, door drie producten in beeld te hebben met de belangrijkste ken-merken kan de bezoeker al een voorverkenning doen zonder naar 'meer informatie' te gaan. Sommige deelnemers gingen vanaf hier meteen door naar 'bestel nu'
            </Tooltip>
            <Product 
                title="Samsung superzuinig met automatisch wasmiddeldosering" 
                img="/images/wasmachine-1.png"
                vulgewicht="8 kg"
                toerental="1400"
                geluidsniveau="stil (71dB)"
                energielabel="A"
                onzeKeuze={true}
                prijs={699}
                showTooltip={true}
            />
            <Product 
                title="Bosch voor lage energiekosten, stil en snel" 
                img="/images/wasmachine-2.png"
                vulgewicht="9 kg"
                toerental="1400"
                geluidsniveau="stil (71dB)"
                energielabel="A"
                prijs={939}
            />
            <Tooltip offsetLeft={400} offsetTop={40}>
                <b>Een titel met informatie.</b> De meeste webshops gebruiken een productnummer in de titel boven een product. In het productoverzicht helpt een beschrijvende titel met het geven van een richting om zo tot een keuze te komen. Het is wel belangrijk dat het productnummer zichtbaar blijft, want via dit nummer kan men online, buiten de webshop om, naar meer informatie of naar recensies zoeken.
            </Tooltip>
            <Product 
                title="Samsung zuinig, stil met stoomfunctie" 
                img="/images/wasmachine-3.png"
                vulgewicht="7 kg"
                toerental="1500"
                geluidsniveau="stil (72dB)"
                energielabel="A"
                prijs={629}
            />
            <Product 
                title="Haier heel stil, snel met WIFI" 
                img="/images/wasmachine-4.png"
                vulgewicht="8 kg"
                toerental="1500"
                geluidsniveau="Heel stil (69dB)"
                energielabel="B"
                prijs={629}
            />
            <Product 
                title="Samsung, stil en wasgoed toevoegen tijdens wasbeurt" 
                img="/images/wasmachine-5.png"
                vulgewicht="8 kg"
                toerental="1500"
                geluidsniveau="stil (72dB)"
                energielabel="A"
                prijs={749}
            />
            <Product 
                title="AEG, stil met stoomfunctie" 
                img="/images/wasmachine-6.png"
                vulgewicht="8 kg"
                toerental="1600"
                geluidsniveau="stil (76dB)"
                energielabel="B"
                prijs={969}
            />
            <Product 
                title="AEG voor gemiddelde energiekosten, stil en snel" 
                img="/images/wasmachine-7.png"
                vulgewicht="9 kg"
                toerental="1500"
                geluidsniveau="stil (76dB)"
                energielabel="B"
                prijs={849}
            />
            <Product 
                title="Miele zuinig, stil met strijkfunctie" 
                img="/images/wasmachine-8.png"
                vulgewicht="8 kg"
                toerental="1500"
                geluidsniveau="stil (72dB)"
                energielabel="B"
                prijs={879}
            />
            <Product 
                title="Miele waterbesparend, zuinig met WIFI" 
                img="/images/wasmachine-9.png"
                vulgewicht="8 kg"
                toerental="1500"
                geluidsniveau="Heel stil (69dB)"
                energielabel="B"
                prijs={1799}
            />
        </div>
    </div>

    <!-- Pagination -->
    <ul class="pagination">
        <li class="btn" style="margin-right: .5rem"><i class="ri-arrow-left-s-line"></i><span>Vorige</span></li>
        <li class="btn btn-primary">1</li>
        <li class="btn btn-hover">2</li>
        <li class="btn btn-hover">3</li>
        <li class="btn btn-hover">4</li>
        <li class="btn btn-hover">5</li>
        <li class="btn" style="margin-left: .5rem"><span>Volgende</span><i class="ri-arrow-right-s-line"></i></li>
    </ul>

</div>

<style lang="scss">
    .filters > img {
        cursor: not-allowed;

        margin-top: -2rem;

        transition: all .1s;
        &:hover {
            opacity: .5;
        }
    }

    .pagination {
        margin: 2rem auto;
        width: fit-content;
        display: flex;
        align-items: center;

        > * {
            height: 1.5rem;
            padding: .1rem .5rem;
            cursor: pointer;
        }

        span {
            display: inline-block;
            transform: translateY(-.1rem);
        }



        .btn-hover {
            background: none;
            border: none;

            &:hover {
                background: var(--secondary-color);
            }
        }
    }
</style>