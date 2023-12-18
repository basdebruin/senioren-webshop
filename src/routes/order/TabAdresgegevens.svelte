<script>
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
    import Input from "./Input.svelte";

    let adressActive = false;
    let nameActive = false;
</script>


<div class="column">
    <Tooltip>
        <b>Geen account.</b> Gebruikers vinden het vervelend om een account aan te maken. Ze zijn bang voor ongewenste mail. Biedt de optie om ook als eenmalige gast te kopen aan, en geef deze optie duidelijk weer.
    </Tooltip>
    <h2>Adresgegevens</h2>
    <label for="aanhef">Aanhef</label>
    <div class="flex-row">
        <label class="checkbox">
            <input type="radio" name="aanhef" checked> mevrouw
        </label>
        <label class="checkbox">
            <input type="radio" name="aanhef"> heer
        </label>
        <label class="checkbox">
            <input type="radio" name="aanhef"> anders
        </label>
    </div>

    <div class="flex-stretch">
        <Input 
            label="Voornaam"
            clickedText="Jan"
            bind:clicked={nameActive}/>
        <Input 
            label="Tussenv."
            clickedText="de"
            width="60%"
            bind:clicked={nameActive}/>
        <Input 
            label="Achternaam"
            clickedText="Vries"
            bind:clicked={nameActive}/>
    </div>

    <Tooltip offsetLeft={-20} offsetTop={55}>
        <b>Alleen benodigde info.</b> Het invullen van een formulier vraagt best wat energie van oudere online bezoekers. Vraag daarom alleen om informatie die echt nodig is, of vertel waarom je extra informatie vraagt en maak deze optioneel. Maak gebruik van 'auto complete' zodat adresgegevens automatisch gegenereerd worden.
    </Tooltip>

    <div class="flex-row">
        <Input 
            label="Postcode"
            clickedText="1243CS"
            bind:clicked={adressActive}/>
        <Input 
            label="Huisnummer"
            clickedText="12"
            bind:clicked={adressActive}/>
    </div>

    <div class="flex-stretch">
        <Input 
            label="Straatnaam"
            clickedText="Niemweg"
            disabled={true}
            bind:clicked={adressActive}/>
    </div>
    <div class="flex-stretch">
        <Input 
            label="Plaats"
            clickedText="Wilvenhorst"
            disabled={true}
            bind:clicked={adressActive}/>
    </div>

    <Tooltip offsetLeft={-20} offsetTop={60}>
        <b>Duidelijke foutmelding.</b> Niet verder kunnen met bestellen omdat er een fout in het formulier zit, waarbij dit niet duidelijk is, vormt voor oudere gebruikers een afhaakmoment. Laat het zien als het goed gaat (groen kader en vinkjes). Als het toch fout gaat, laat dan precies zien waar de fout zit en licht dit vriendelijk en duidelijk toe.
    </Tooltip>
    <div class="flex-stretch">
        <Input 
            label="E-mailadres"
            clickedText="mail@klantnl"
            clickedState="error"
            bottomLabel="Er zit een fout in uw emailadres"
            bind:clicked={adressActive}/>
    </div>
    
    <Tooltip offsetLeft={-20} offsetTop={60}>
        <b>Zo min mogelijk inspanning en fouten.</b> Vraag alleen de informatie die echt nodig is of vertel waarom je extra informatie vraagt. 
    </Tooltip>
    <div class="flex-stretch">
        <Input 
            label="Telefoonnummer"
            clickedText="06123456"
            clickedState="error"
            bottomLabel="Er ontbreekt een cijfer uit uw telefoonnummer"
            bind:clicked={adressActive}/>
    </div>
</div>

<style lang="scss">

    // layout
    .flex-row {
        display: flex;
        align-items: flex-start;
        gap: 1rem;
        margin: 1rem 0;
    }

    .flex-stretch {
        @extend .flex-row;
        width: 100%;
        justify-content: stretch;
    }

</style>
