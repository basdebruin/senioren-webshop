<script>
    import Explainer from "$lib/Tooltip/Explainer.svelte";
    import Tooltip from "$lib/Tooltip/Tooltip.svelte";

</script>
<div class="column">
    <h2 class="h4">Aansluiting en aanvullende verzekering</h2>
    <h3 class="h5">Aansluiting</h3>
    <label class="checkbox">
        <input type="radio" name="aansluiting" checked>
        <p>
            Drempellevering <br>
            De wasmachine wordt tot de deur gebracht 
            <Explainer title="Drempellevering">
                Bij een woonhuis wordt het apparaat geleverd tot over de drempel van je voordeur. <br>
                Bij een appartement wordt het apparaat geleverd tot over de drempel van je voordeur, als er geen lift aanwezig is bezorgen we tot op de 3e verdieping indien goed toegankelijk via de trap.
            </Explainer>
        </p>
    </label>
    <label class="checkbox">
        <input type="radio" name="aansluiting">
        <p>
            Plaatsen en aansluiten (meerkosten € 25,-) <br>
            De wasmachine wordt geplaatst en geïnstalleerd waar gewenst. 
            <Explainer title="Aansluiten">
                Het apparaat wordt geplaatst en aangesloten waar je het wilt hebben. De wasmachine wordt aangesloten op een geaard stopcontact, de watertoevoer en de waterafvoer. Verpakkingsmateriaal en eventueel de oude wasmachine worden meegenomen.
            </Explainer>
        </p>
    </label>
    <div class="spacer" style="height: 1rem"></div>
    <h3 class="h5">Aanvullende verzekering</h3>
    <p>
        Wil je een aanvullende verzekering van € 149,- eenmalig naast de 2 jaar garantie?
        <Explainer title="Aanvullende verzekering">
            De fabrieksgarantie geldt alleen in het geval het defect/gebrek niet door uzelf veroorzaakt is. De aanvullende verzekering biedt ook garantie bij de gevolgen van dagelijkse ongelukjes, zoals vallen, waterschade, vocht, brand, kortsluiting of overspanning. Zo mogelijk repareren wij uw apparaat kosteloos. Is reparatie niet meer mogelijk, dan vindt in de eerste twee jaar vervanging plaats op basis van gelijke specificaties.
        </Explainer>
        <Tooltip offsetLeft={-15} offsetTop={-10}>
            <b>Volledige informatie.</b> De oudere bezoeker is een kritische klant: teksten worden goed gelezen en moeilijke woorden of onduidelijkheden kunnen leiden tot afhaak- of belmomenten. Licht woorden die uitleg behoeven of onduidelijkheden toe in een tooltip. Belangrijk: wanneer er een fout in de tekst zit, of er klopt iets niet (prijs, kenmerk of iets anders), dan maakt dat de oudere bezoeker wantrouwend.
        </Tooltip>
    </p>
    <label class="checkbox">
        <input type="radio" name="verzekering" checked>
        <p>Nee</p>
    </label>
    <label class="checkbox">
        <input type="radio" name="verzekering">
        <p>Ja</p>
    </label>
</div>