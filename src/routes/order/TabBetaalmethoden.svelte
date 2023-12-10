<script lang="ts">
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";

    let checked = false;
    function check(event : Event) {
        event.preventDefault();
        checked=!checked;
    }
</script>
<div class="column">
    <h2>Hoe wil je betalen?
        <Tooltip offsetLeft={-15}>
            <b>Betalen.</b> Betalen met iDEAL, met je creditcard en achteraf betalen: dit zijn veelgebruikte betaalmethoden. Maar niet iedereen maakt gebruik van internetbankieren, dus het is belangrijk om ook een overboeking als betaalmethode aan te bieden.
        </Tooltip>
    </h2>

    <div class="betaling" class:checked>
        <label class="checkbox ideal" class:checked>
            <div>
                <input type="checkbox" name="betaalmethoden" on:click={()=>checked=!checked} checked={checked}>
                <img src="/logo-ideal.svg" alt="">
                iDeal
            </div>
            {#if checked}
                <div>
                    Kies uw bank:
                    <select class="form-select">
                        <option>ABN Amro</option>
                        <option>ASN Bank</option>
                        <option>Bunq</option>
                        <option>ING</option>
                        <option>Knab</option>
                        <option>Rabobank</option>
                        <option>Regiobank</option>
                        <option>SNS</option>
                    </select>
                </div>
            {/if}
        </label>
        <label class="checkbox">
            <input type="radio" name="betaalmethoden" on:click={check}>
            <img src="/logo-mastercard.svg" alt="">
            Creditcard
        </label>
        <label class="checkbox">
            <input type="radio" name="betaalmethoden" on:click={check}>
            <img src="/logo-overboeken.svg" alt="">
            Overboeking
        </label>
        <label class="checkbox">
            <input type="radio" name="betaalmethoden" on:click={check}>
            <img src="/logo-house.svg" alt="">
            Pinnen aan de deur
        </label>
        <label class="checkbox">
            <input type="radio" name="betaalmethoden" on:click={check}>
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
    .ideal {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        div {
            display: flex;
            align-items: center;
            gap: 1rem;
            width: 100%;

            select {
                width: 75%;
                margin-left: 1rem;
            }
        }
    }
    .betaling.checked .checkbox:not(.checked) {
        opacity: .5;
    }
    .check {
        margin-bottom: -1rem;
        margin-top: 4.5rem;
        max-width: 25rem;
    }
</style>