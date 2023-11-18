<script lang="ts" type="module">
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
    import { showCookie } from "$lib/stores";
    import { onMount } from "svelte";

    let popupVisible = true;

    let close = () => 
        popupVisible = false;

    let openPreferences = false;

    // only show Cookie popup on first visit
    onMount(() => {
        popupVisible = $showCookie;
        if ($showCookie)
            showCookie.set(false);
    })
</script>

<article class="modal" class:active={popupVisible} aria-hidden={!popupVisible}>
    <a href="#close" class="modal-overlay" aria-label="Close cookie popup" on:click={close} tabindex="0"></a>
    <div class="modal-container">
        <div class="modal-title">
            <Tooltip>
                <b>Cookie Pop-ups. </b>Lorem ipsum dolor sit amet consectetur. Sed sit nibh leo urna venenatis viverra integer cursus at. Accumsan mauris vehicula dui id. Sed suspendisse nibh lectus arcu mauris mollis sit at nulla. At nulla non commodo imperdiet vulputate leo elit. Vestibulum posuere vestibulum viverra eu. Morbi praesent ultrices habitant nunc est in interdum scelerisque. Aliquet suscipit netus elementum elementum eu ullamcorper nec. Interdum orci nullam posuere ut quam in. Ullamcorper egestas viverra purus gravida commodo.
                Aliquet cras in eu ultricies mattis. Nibh sit bibendum aliquet risus sem quam facilisis turpis. Adipiscing ridiculus a nulla interdum ullamcorper justo morbi. 
            </Tooltip>
            <h2>Cookie instellingen</h2>
        </div>
        <div class="columns">
            <div class="col-9">
                {#if !openPreferences}
                    <p>Wil je graag de beste website ervaring? Klik dan op “Accepteren”. Je gaat ermee akkoord dat wij jouw internetgedrag op deze website volgen. Dit stelt ons in staat om de website te optimaliseren en jou persoonlijkere advertenties te bieden.</p>
                    <p>Kies je voor “Weigeren”, dan zullen wij alleen de noodzakelijke sessie-gerelateerde cookies gebruiken om de gebruiksvriendelijkheid te verbeteren en om statistisch bereik te meten. Je kunt er ook voor kiezen om met de knop hieronder je Voorkeuren aan te passen</p>
                    <button class="btn btn-primary" on:click={()=>openPreferences=true}>
                        Voorkeuren aanpassen
                    </button>
                    <a href="#close" class="link">Informatie over gegevensbescherming</a>
                {/if}
                {#if openPreferences}
                    <p>Selecteer hieronder welke cookies je toe wilt staan. Houd er rekening mee dat bij het uitsluiten van cookies sommige functionaliteiten van de website niet langer kunnen werken.</p>
                    <div class="checkboxes">
                        <label class="checkbox">
                            <input type="radio" name="cookie"> Functionaliteiten
                        </label>
                        <label class="checkbox">
                            <input type="radio" name="cookie"> Marketing
                        </label>
                        <label class="checkbox">
                            <input type="radio" name="cookie"> Derde partijen
                        </label>
                    </div>
                    <a href="#close" class="link">Informatie over gegevensbescherming</a>
                {/if}
            </div>

            <div class="col-3">
                <button class="btn btn-primary" on:click={close}>Accepteren</button>
                <button class="btn" on:click={close}>Weigeren</button>
            </div>
        </div>
</article>

<style>
    .modal {
        z-index: 1000;
    }

    .modal-container {
        padding: 2rem;
        max-width: 1100px;
        z-index: 1001;
    }

    .columns > * {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: .5rem;
    }

    .col-3 > * {
        width: 90%;
        margin-left: 10%;
    }

    .checkboxes {
        display: flex;
        width: 100%;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
    }
</style>