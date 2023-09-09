<script>
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";
    import Input from "./Input.svelte";

</script>


<div class="column">
    <Tooltip>
        <b>Geen account.</b> Een veelgehoorde klacht was dat er een account moest worden aangemaakt. Weer een wachtwoord aanmaken en na het aanmaken zal de gebruiker nu vast ongewenste mail gaan ontvangen. Biedt de optie om ook als eenmalige gast te kopen aan, en geef deze optie duidelijk weer.
    </Tooltip>
    <h2 class="h4">Adresgegevens</h2>
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
        <Input label="Voornaam"/>
        <label style="width: 6rem">
            Tussenv.
            <input type="text" class="form-input">
        </label>
        <label>
            Achternaam
            <input type="text" class="form-input">
        </label>
    </div>

    <Tooltip offsetLeft={-20} offsetTop={55}>
        <b>Alleen benodigde info.</b> Het invullen van een formulier vraagt best wat energie van oudere online bezoekers. Vraag daarom alleen om informatie die echt nodig is, of vertel waarom je extra informatie vraagt en maak deze optioneel. Maak gebruik van 'auto complete' zodat adresgegevens automatisch gegenereerd worden.
    </Tooltip>

    <div class="flex-row">
        <label>
            Postcode
            <input type="text" class="form-input">
        </label>
        <label>
            Huisnummer
            <input type="text" class="form-input">
        </label>
    </div>

    <div class="flex-stretch">
        <label>
            Straatnaam
            <input type="text" class="form-input" disabled>
        </label>
    </div>
    <div class="flex-stretch">
        <label style="margin-right: -1rem">
            Plaats
            <input type="text" class="form-input" disabled>
        </label>
        <Tooltip offsetLeft={45} offsetTop={60}>
            <b>Duidelijke foutmelding.</b> Niet verder kunnen met bestellen omdat er een fout in het formulier zit, waarbij dit niet duidelijk is, vormt voor oudere gebruikers een afhaakmoment. Laat het zien als het goed gaat (groen kader en vinkjes). Als het toch fout gaat, laat dan precies zien waar de fout zit en licht dit vriendelijk en duidelijk toe.
        </Tooltip>
    </div>

    <div class="flex-stretch">
        <label>
            E-mailadres
            <input type="text" class="form-input">
        </label>
    </div>
    <div class="flex-stretch">
        <label>
            Telefoonnummer (om je eventueel te kunnen informeren)
            <input type="text" class="form-input">
            <Tooltip offsetLeft={-20} offsetTop={-10}>
                <b>Zo min mogelijk inspanning en fouten.</b> Vraag alleen de informatie die echt nodig is of vertel waarom je extra informatie vraagt. 
            </Tooltip>
        </label>
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
        gap: 1rem;
        width: 100%;
        justify-content: stretch;

        label {
            display: block;
            width: 100%;
        }
    }

</style>