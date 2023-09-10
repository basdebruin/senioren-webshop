<script>
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";

</script>
<div class="spacer" style="height: 100px"></div>

<main class="container grid-xl">
    <a href="/" class="btn btn-primary"><i class="ri-arrow-left-s-line"></i>Beginpagina</a>
    <div class="spacer" style="height: 30px"></div>

    <div class="columns">
        <div class="column">
            <Tooltip >
                <b>Controle en geruststellend.</b> Laat weten dat de bestelling goed is doorgekomen en neem de koper mee in het vervolgproces. Bevestig de afgesproken tijd en het adres opnieuw, dat stelt de klant gerust.
            </Tooltip>
            <h2 class="h3">Bedankt voor jouw bestelling</h2>
        
            <h2 class="h4">Wat gebreurd er nu?</h2>
            <ul>
                <li>Binnen enkele minuten ontvang je een bevestigingsmail op mailadres@datisingevoerd.nl</li>
                <li>Ondertussen gaan wij aan de slag om jouw bestelling zo snel mogelijk klaar te maken om te versturen.</li>
                <li>Dit zijn jouw bestelgegevens op een rijtje:</li>
            </ul>
            <div class="columns">
                <p class="column">
                    <b>Bezorgadres</b> <br>
                    Naam van de klant <br>
                    Niemweg 12 <br>
                    243 CS Wilvenhorst
                </p>
                <p class="column">
                    <b>Bezorginformatie</b> <br>
                    Donderdag 6 februari <br>
                    tussen 8:30 en 17:00
                </p>
            </div>
            <p><b>We wensen je veel plezier met je aankoop!</b></p>
            <img src="/images/bezorger.png" alt="foto van bezorger die kartonnen dozen uit een busje haalt" style="width: 30rem">
        </div>


        <div class="column">
            <h2 class="h3">Naar jou onderweg</h2>
            <div class="product">
                <div class="columns">
                    <img class="column col-2" src="/images/wasmachines.png" alt="">
                    <div class="column col-7">
                        <h4 class="h5">Samsung, super zuinig met automatische wasdosering </h4>
                        <p>Typenummer:  WW90T534AAW</p>
                    </div>
                </div>
                <p><b>Totaalbedrag (incl BTW) € 699,-</b></p>
            </div>
        </div>
    </div>
</main>

<div class="spacer" style="height: 4rem"></div>


<style lang="scss">
    .columns {
        gap: 2rem;
    }

    .product {
        border: solid 2px var(--highlight-color);
        padding: .5rem;
        padding-bottom: 0;
    }

    img {
        object-fit: contain;
        object-position: top;
    }
</style>