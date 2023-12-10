<script lang="ts">
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";

    export let filterApplied = false;

    let clicked = false;
    let showMerken = false;

    function click(activeFilter = false) {
        return (event : Event) => {
            if (!activeFilter)
                event.preventDefault();
            clicked=!clicked;
        }
    }

    function applyFilter() {
        filterApplied = clicked
    }
</script>

<h3>Filter</h3>
<p>Vink hieronder je voorkeuren aan</p>

{#if clicked}
    <button class="btn btn-primary btn-small" on:click={applyFilter}>Filters toepassen</button>
{/if}

<h5>Vulgewicht</h5>
<label>
    <input type="checkbox" on:click={click()}>
    Groot (8 kg of meer) <span>(4)</span>
</label>
<label>
    <input type="checkbox" on:click={click(true)} checked={clicked}>
    Gemiddeld (7 - 8 kg) <span>(6)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    Klein (7 kg of minder) <span>(0)</span>
</label>

<h5>Merk</h5>
<label>
    <input type="checkbox" on:click={click()}>
    AEG <span>(2)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    Bosch <span>(1)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    Haier <span>(2)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    Miele <span>(2)</span>
</label>
<label>
    <input type="checkbox" on:click={click(true)} checked={clicked}>
    Samsung <span>(3)</span>
</label>
{#if showMerken}
    <label>
        <input type="checkbox" on:click={click()}>
        Siemens <span>(2)</span>
    </label>
    <label>
        <input type="checkbox" on:click={click()}>
        LG <span>(3)</span>
    </label>
{/if}
<a class="link" href="#merken" on:click={()=>showMerken=!showMerken}>Klik hier voor {showMerken ? "minder" : "meer"} merken</a>


<h5>Maximaal geluidsniveau</h5>
<label>
    <input type="checkbox" on:click={click()}>
    Heel stil (70 dB of lager) <span>(2)</span>
</label>
<label>
    <input type="checkbox" on:click={click(true)} checked={clicked}>
    Stil (71 - 80 dB) <span>(7)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    Maakt niet uit <span>(10)</span>
</label>

<h5>Energieklasse</h5>
<label>
    <input type="checkbox" on:click={click()}>
    Heel zuinig (klasse A) <span>(4)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    Zuinig (klasse B) <span>(6)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    Minder zuinig (vanaf klasse C) <span>(0)</span>
</label>

<h5>Prijs</h5>
<label>
    <input type="checkbox" on:click={click()}>
    tot € 500 <span>(0)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    € 500 - € 750 <span>(4)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    € 750 - € 1000 <span>(5)</span>
</label>
<label>
    <input type="checkbox" on:click={click()}>
    vanaf € 1000 <span>(1)</span>
</label>

<button class="btn btn-primary btn-small button-bottom" on:click={applyFilter}>Filters toepassen</button>
<Tooltip offsetLeft={210} offsetTop={-3}>
    <b>De filter wordt niet altijd gebruikt.</b> Soms is de werking onbekend en soms wordt het filter ervaren als 'sturend'. Houd sowieso de keuzes eenvoudig en licht technische of Engelse termen toe met bijvoorbeeld een knop 'uitleg' of info
</Tooltip>

<style lang="scss">
    h3 {
        margin-top: .2rem
    }
    p {
        margin-top: .8rem;
    }
    label {
        display: flex;
        width: 100%;
        max-width: 13rem;
        gap: .5rem;
        font-size: .7rem;
        align-items: center;
        margin: .5rem 0;

        cursor: pointer;

        * {
            display: block;
        }

        span {
            text-align: right;
            flex-grow: 100;
        }
    }

    input {
        appearance: none;
        display: block;
        width: 1.25rem;
        height: 1.25rem;
        border: solid 1px var(--primary-color);

        &:checked {
            background-image: url(/check-fill.svg);
            border-width: 2px;
        }

        cursor: pointer;
    }

    span {
        color: var(--primary-color);
    }

    h5, .button-bottom {
        margin-top: 2rem;
    }
</style>