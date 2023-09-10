<script>
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";

</script>
<div class="column">
    <h2 class="h4">Betaalmethoden
        <Tooltip offsetLeft={-15}>
            <b>Betalen.</b> Betalen met iDEAL, met je creditcard en achteraf betalen: dit zijn veelgebruikte betaalmethoden. Maar niet iedereen maakt gebruik van internetbankieren, dus het is belangrijk om ook een overboeking als betaalmethode aan te bieden.
        </Tooltip>
    </h2>

    <div class="betaling">
        <label class="checkbox">
            <input type="radio" name="betaalmethoden" checked>
            <img src="/logo-ideal.svg" alt="">
            iDeal
        </label>
        <label class="checkbox">
            <input type="radio" name="betaalmethoden">
            <img src="/logo-mastercard.svg" alt="">
            Creditcard
        </label>
        <label class="checkbox">
            <input type="radio" name="betaalmethoden">
            <img src="/logo-overboeken.svg" alt="">
            Overboeking
        </label>
        <label class="checkbox">
            <input type="radio" name="betaalmethoden">
            <img src="/logo-house.svg" alt="">
            Pinnen aan de deur
        </label>
        <label class="checkbox">
            <input type="radio" name="betaalmethoden">
            <img src="/logo-klarna.svg" alt="Klarna">
            Achteraf betalen
        </label>
    </div>
    <label class="checkbox check">
        <input type="checkbox">
        <p>
            Ik heb mijn bestelling en gegevens gecontroleerd en ga akkoord met de <a href="#voorwaarden">algemene voorwaarden.</a>
        </p>
        <Tooltip offsetTop={40}>
            <b>Controle.</b> Nog een laatste controlemoment. Kloppen alle gegevens? En klopt de bestelling met de verwachting? 
        </Tooltip>
    </label>
</div>


<style lang="scss">
    .betaling .checkbox {
        display: flex;
        gap: 1rem;
        align-items: center;

        padding: .5rem;
        border: solid 2px var(--highlight-color);
        margin: .5rem 0;
    }
    .check {
        margin: 1rem 0;
        max-width: 25rem;
    }
</style>