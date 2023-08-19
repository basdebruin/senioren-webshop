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
            <a href="#">Wasmachines</a> 
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
    />
</div>