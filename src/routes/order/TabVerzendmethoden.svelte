<script>
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";

    let dates = [
        { date: "Do 6 feb", time: "8:30 - 17:00" },
        { date: "Do 6 feb", time: "14:00 - 21:00" },
        { date: "Vr 7 feb", time: "8:30 - 17:00" },
        { date: "Zo 8 feb", time: "8:30 - 17:00" },
    ]
</script>

<div class="column col-7">
    <h2>Verzendgegevens</h2>
    <div class="verzendgegevens">
        <Tooltip offsetLeft={210} offsetTop={25}>
            <b>Kiezen wanneer en door wie.</b> Ouderen zijn druk, net zoals andere onlinegebruikers, dus wanneer ze zelf een bezorgmoment kunnen kiezen is dat fijn. Maak je gebruik van verschillende koeriersdiensten? Vermeldt dit erbij want oudere bezoekers hebben soms voorkeur voor een verzendbedrijf of misschien een bezorger.
        </Tooltip>
        <label class="checkbox">
            <input type="radio" name="aansluiting" checked> Bezorgmoment
        </label>
        <h3 class="h5"> Kies uw bezorgmoment </h3>
        <div class="date-list">
            {#each dates as date, index}
                <input type="radio" name="date-select" id="date-{index}">
                <label class="btn" for="date-{index}">
                    <p><b>{date.date}</b></p>
                    <p>{date.time}</p>
                </label>
            {/each}
        </div>
        <p style="margin-top: 2rem">
            Prijs: <b>Gratis</b>
        </p>
    </div>
</div>

<style lang="scss">
    .verzendgegevens {
        border: solid 2px var(--highlight-color);
        padding: 1rem;
        padding-bottom: 0;
        margin-bottom: 1rem;

        > h3, > label {
            margin-bottom: 1rem;
        }

        .date-list {
            display: flex;
            width: 100%;
            gap: .5rem;
            transform: translateX(-.4rem);

            label {
                display: block;
                width: 25%;
                padding: 2rem 1rem;
                margin: 0;

                * {
                    margin: 0;
                }
            }
            input:checked + label {
                background: var(--primary-color) !important;
                color: white;
            }

            input {
                visibility: hidden;
                width: 0; height: 0;
                margin: 0;
            }
        }
    }
</style>
