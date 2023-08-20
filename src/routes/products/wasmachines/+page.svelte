<script>
    import Product from "../Product.svelte";

</script>
<div class="spacer"></div>

<div class="container grid-lg" style="margin: 2rem auto">
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
    </ul>

    <div class="spacer"></div>

    <h1>Wasmachines</h1>
    <p>
        Je kunt de wasmachine die voor jou geschikt is makkelijker vinden door je voorkeuren hier links aan te geven. Na het toepassen van de voorkeuren zie je de wasmachines die aan jouw wensen voldoen.
    </p>

    <!-- Producten -->
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
    <Product 
        title="Bosch voor lage energiekosten, stil en snel" 
        img="/images/wasmachines.png"
        vulgewicht="9 kg"
        toerental="1400"
        geluidsniveau="stil (71dB)"
        energielabel="A"
        prijs={939}
    />
    <Product 
        title="Samsung zuinig, stil met stoomfunctie" 
        img="/images/wasmachines.png"
        vulgewicht="7 kg"
        toerental="1500"
        geluidsniveau="stil (72dB)"
        energielabel="A"
        prijs={629}
    />
    <Product 
        title="Haier heel stil, snel met WIFI" 
        img="/images/wasmachines.png"
        vulgewicht="8 kg"
        toerental="1500"
        geluidsniveau="Heel stil (69dB)"
        energielabel="B"
        prijs={629}
    />
    <Product 
        title="Samsung, stil en wasgoed toevoegen tijdens wasbeurt" 
        img="/images/wasmachines.png"
        vulgewicht="8 kg"
        toerental="1500"
        geluidsniveau="stil (72dB)"
        energielabel="A"
        prijs={749}
    />
    <Product 
        title="AEG, stil met stoomfunctie" 
        img="/images/wasmachines.png"
        vulgewicht="8 kg"
        toerental="1600"
        geluidsniveau="stil (76dB)"
        energielabel="B"
        prijs={969}
    />
    <Product 
        title="AEG voor gemiddelde energiekosten, stil en snel" 
        img="/images/wasmachines.png"
        vulgewicht="9 kg"
        toerental="1500"
        geluidsniveau="stil (76dB)"
        energielabel="B"
        prijs={849}
    />
    <Product 
        title="Miele zuinig, stil met strijkfunctie" 
        img="/images/wasmachines.png"
        vulgewicht="8 kg"
        toerental="1500"
        geluidsniveau="stil (72dB)"
        energielabel="B"
        prijs={879}
    />
    <Product 
        title="Miele waterbesparend, zuinig met WIFI" 
        img="/images/wasmachines.png"
        vulgewicht="8 kg"
        toerental="1500"
        geluidsniveau="Heel stil (69dB)"
        energielabel="B"
        prijs={1799}
    />

    <!-- Pagination -->
    <ul class="pagination">
        <li class="btn" style="padding-left: .1rem; margin-right: .5rem"><i class="ri-arrow-left-s-line"></i>Vorige</li>
        <li class="btn btn-primary">1</li>
        <li class="btn btn-hover">2</li>
        <li class="btn btn-hover">3</li>
        <li class="btn btn-hover">4</li>
        <li class="btn btn-hover">5</li>
        <li class="btn" style="padding-right: .1rem; margin-left: .5rem">Volgende<i class="ri-arrow-right-s-line"></i></li>
    </ul>

</div>

<style lang="scss">
    .pagination {
        margin: 2rem auto;
        width: fit-content;
        display: flex;
        align-items: center;

        * {
            height: 1.5rem;
            padding: .1rem .5rem;
            cursor: pointer;
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