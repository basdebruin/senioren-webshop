<script>
    let popupVisible= true;

    let close = () => 
        popupVisible = false;
</script>

<article class="modal" class:active={popupVisible}>
    <a href="#" class="modal-overlay" aria-label="Close cookie popup" on:click={close}></a>
    <div class="modal-container">
        <div class="modal-title">
            <h2>Cookie instellingen</h2>
        </div>
        <div class="columns">
            <div class="col-9">
                <p>Wil je graag de beste website ervaring? Klik dan op “Accepteren”. Je gaat ermee akkoord dat wij jouw internet gedrag op deze website volgen. Dit stelt ons in staat om de website te optimaliseren en jou persoonlijkere advertenties te bieden.</p>
                <p>Kies je voor “Weigeren”, dan zullen wij alleen de noodzakelijke sessie gerelateerde cookies gebruiken om de gebruiksvriendelijkheid te verbeteren en om statistisch bereik te meten.</p>
                <button class="btn btn-primary">
                    Voorkeuren aanpassen
                </button>
                <a href="#">Informatie over gegevensbescherming</a>
            </div>

            <div class="col-3">
                <button class="btn btn-primary" on:click={close}>Accepteren</button>
                <button class="btn" on:click={close}>Weigeren</button>
            </div>
        </div>
</article>

<style>
    .modal-container {
        padding: 2rem;
        max-width: 1100px;
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
</style>