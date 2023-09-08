<script>
    import Stars from "./Stars.svelte";

</script>
<div class="columns">
    <div class="column col-4">

        <div class="total">
            <Stars size="1.5em"/> 9,3/10 (148 referenties)
        </div>

        <h4 class="h6">
            Beoordeling
        </h4>
        <div class="progress-bars">
            <div>
                5 sterren <progress class="progress" value="7" max="10"></progress> 107 referenties
            </div>
            <div>
                4 sterren <progress class="progress" value="3" max="10"></progress> 36 referenties
            </div>
            <div>
                3 sterren <progress class="progress" value="5" max="100"></progress> 3 referenties
            </div>
            <div>
                2 sterren <progress class="progress" value="3" max="100"></progress> 2 referenties
            </div>
            <div>
                1 sterren <progress class="progress" value="0" max="100"></progress> 0 referenties
            </div>
        </div>

        <h4 class="h6">
            Beoordeling per onderdeel
        </h4>
        <div class="by-subject">
            <div>
                <span>Gebruiksgemak</span> <span><Stars stars={4}/> 9,2</span>
            </div>
            <div>
                <span>Onderhoud</span> <span><Stars stars={4}/> 9,1</span>
            </div>
            <div>
                <span>Duurzaamheid</span> <span><Stars stars={4}/> 9,0</span>
            </div>
            <div>
                <span>Design</span> <span><Stars stars={4}/> 9,9</span>
            </div>
        </div>

    </div>

    <div class="column col-8 list">

    </div>
</div>

<style lang="scss">

    .total {
        color: var(--primary-color);
        display: flex;
        gap: .5rem;
    }

    .progress-bars {
        font-size: .7rem;
        margin-bottom: .5rem;
    }

    .progress {
        font-size: 2rem;
        overflow: visible;
        height: 0;
        accent-color: var(--primary-color);
        transform: translateY(.3rem);
        width: 50%;
        margin: 0 .3rem;
    }

    .by-subject > div {
        display: flex;
        width: 100%;
        justify-content: space-between;

        span {
            display: flex;
            justify-content: space-between;
            gap: .2rem;
            width: 30%;
        }
    }

    .list {

    }

</style>