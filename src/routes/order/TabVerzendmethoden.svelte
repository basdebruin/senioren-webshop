<script>
    let dates = [
        { date: "Do 6 feb", time: "8:30 - 17:00" },
        { date: "Do 6 feb", time: "14:00 - 21:00" },
        { date: "Vr 7 feb", time: "8:30 - 17:00" },
        { date: "Zo 8 feb", time: "8:30 - 17:00" },
    ]
    let activeDate = 0;
</script>

<div class="column">
    <h2 class="h4">Verzendgegevens</h2>
    <div class="verzendgegevens">
        <label class="checkbox">
            <input type="radio" name="aansluiting" checked> Bezorgmoment
        </label>
        <h3 class="h5"> Kies uw bezorgmoment </h3>
        <div class="date-list">
            {#each dates as date, index}
                <button class="btn" class:active={activeDate==index} on:click={() => activeDate=index}>
                    <p><b>{date.date}</b></p>
                    <p>{date.time}</p>
                </button>
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .verzendgegevens {
        border: solid 2px var(--primary-color);
        padding: 1rem;
        margin-bottom: 1rem;

        > h3, > label {
            margin-bottom: 1rem;
        }

        .date-list {
            display: flex;
            gap: .5rem;

            button.active {
                background: var(--primary-color) !important;
            }
        }
    }
</style>