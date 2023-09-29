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
                5 sterren <span style="--value: 70%"></span> 107 referenties
            </div>
            <div>
                4 sterren <span style="--value: 30%"></span> 36 referenties
            </div>
            <div>
                3 sterren <span style="--value: 5%"></span> 3 referenties
            </div>
            <div>
                2 sterren <span style="--value: 3%"></span> 2 referenties
            </div>
            <div>
                1 sterren <span style="--value: 0%"></span> 0 referenties
            </div>
        </div>

        <h4 class="h6" style="margin-top: 1rem">
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

    <div class="column col-7 list">
        <div><Stars stars={3}/> 7,2/10 </div>
        <h5 class="h6">Goede wasmachine, zwaar tekortschietende programmering</h5>
        <div class="points">
            <div><i class="ri-add-circle-fill"></i> Wast goed</div>
            <div><i class="ri-add-circle-fill"></i> Relatief stil</div>
            <div><i class="ri-add-circle-fill"></i> Automatische dosering (als je net dat ene wasmiddel nodig hebt)</div>
            <div><i class="ri-indeterminate-circle-fill negative"></i> Geen persoonlijke programma's</div>
        </div>
        <p>Deze wasmachine is gekocht op basis van de vele goede reviews en omdat hij op papier alles had wat we zochten. Helaas viel dat toch enigszins tegen</p>
        <p class="info">Hans | 23 januari 2023 | Heeft de Samsung WW80T654ALX zelf aangeschaft</p>

        <hr>

        <div><Stars stars={4}/> 8,8/10 </div>
        <h5 class="h6">Helemaal TOP!</h5>
        <div class="points">
            <div><i class="ri-add-circle-fill"></i> Stil</div>
            <div><i class="ri-add-circle-fill"></i> Gebruiksvriendelijk</div>
        </div>
        <p>Een prettige wasmachine. Fijn dat hij het wasmiddel zelf doseert. Verder ook een hele stille machine.</p>
        <p class="info">Mark | 4 december 2022 | Heeft de Samsung WW90T53AAW Autodose zelf aangeschaft</p>

        <hr>

        <a class="link" href="#reviews">Bekijk alle referenties (148)</a>
    </div>
</div>

<style lang="scss">

    .columns {
        gap: 1rem;
    }

    .total {
        color: var(--primary-color);
        display: flex;
        gap: .5rem;
        align-items: center;
    }

    h4, h5 {
        color: var(--dark-color);
        margin-top: .3rem;
        font-weight: bold;
    }

    .progress-bars {
        font-size: .7rem;
        margin-bottom: .5rem;

        div {
            display: flex;
            gap: 1rem;
            align-items: baseline;
            margin: .5rem 0;
        }

        span {
            position: relative;
            display: inline-block;
            width: 50%;
            height: 10px;
            border-radius: 5px;
            border: 1px var(--primary-color) solid;

            &::after {
                content: " ";
                display: block;
                position: absolute;
                top: 0; left: 0;
                width: var(--value);
                height: 100%;
                background-color: var(--primary-color);
                border-radius: 5px;
            }
        }
    }

    .by-subject > div {
        display: flex;
        width: 100%;
        justify-content: space-between;

        padding-right: .5rem;

        font-size: .7rem;

        span {
            display: flex;
            justify-content: space-between;
            gap: .2rem;
            width: 30%;
        }
    }

    .list {
        h5 {
            color: var(--dark-color);
            margin-top: .3rem;
            font-weight: bold;
        }
        .points {
            display: flex;
            flex-wrap: wrap;

            margin: .5rem 0;

            > div {
                width: 50%;
                display: flex;
                align-items: center;
                gap: .5rem;
            }

            i {
                margin: 0;
                color: #3A9403;

                &.negative {
                    color: #C20000;
                }
            }
        }
        .info {
            color: var(--primary-color);
        }
        hr {
            margin: 1rem 0;
            border: solid 1px var(--highlight-color);
        }
    }

</style>