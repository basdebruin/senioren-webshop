<script lang="ts">
    let activeTab = 0;

    let tabData = [
        {
            title: "korte specificaties",
            data: [
                ["Artikelnummer", "87037"],
                ["Fabrikantcode", "WW90T524AAW/S2"],
                ["Merk", "Samsung"],
                ["Garantie", "2 jaar"],
                ["Afhandeling van je defect", "Bij jou thuis"],
                ["Oude apparatuur gratis retour", "Ja"]
            ]
        },
        {
            title: "algemene kenmerken",
            data: [
                ["Type wasmachine", "Voorlader"],
                ["Vulgewicht", "9 kg"],
                ["Toerental", "1400rpm"],
                ["Geluidsniveau centifugeren", "72 dB"],
                ["Droogresultaat", "B"],
                ["Duur wascyclus", "228 min"]
            ]
        },
        {
            title: "functionele kenmerken",
            data: [
                ["Gebruiksgemak", "Automatisch uitschakelen, Automatisch wasmiddeldosering, bediening via app, stoomfunctie"],
                ["Tussentijds toevoegen", "Nee"],
                ["Wifi ingebouwd", "Nee"],
                ["Opbouw startuitsel", "1 - 24 uur"],
                ["Type eindsignaal", "Akkoestisch, Optisch"],
                ["Display", "Ja"]
            ]
        },
        {
            title: "wasfuncties",
            data: [
                ["Waskwaliteit", "Topklasse"],
                ["Kleding beschermende tromer", "Ja"],
                ["4D Wassen", "Ja"],
                ["Stoomfunctie", "Ja"],
                ["Automatsche wasdosering", "Ja"],
                ["Soort stoomfunctie", "Hygiënisch schoonmaken"],
            ]
        },
        {
            title: "water en energie",
            data: [
                ["Energieklass", "A"],
                ["Energiebesparing over levensduur", "330 euro"],
                ["Milieuvriendelijk", "Ja"],
                ["Energieverbruik per jaar", "108 kWh"],
                ["Energiekosten per jaar", "48,6 euro"],
                ["Watergebruik per jaar", "1100 L"]
            ]
        },
        {
            title: "fysieke eigenschappen",
            data: [
                ["Diepte", "63,5 cm"],
                ["Breedte", "60"],
                ["Hoogte", "85 cm"],
                ["Gewicht", "68 kg"],
                ["Kleur", "Wit"],
                ["Standaard draarichting deur", "Links"]
            ]
        },
    ];
</script>

<div class="specs">

        <ul class="tab tab-block">
            {#each tabData as data, index}
                <li class="tab-item" class:active={activeTab==index}>
                    <a 
                        href="#{data.title.replace(" ", "-")}"
                        on:click={() => (activeTab=index)}>
                            {data.title}
                    </a>
                </li>
            {/each}
        </ul>

        <table>
            {#each tabData[activeTab].data as data}
                <tr>
                    <td>{data[0]}</td><td>{data[1]}</td>
                </tr>
            {/each}
        </table>
        
    </div>

<style lang="scss">
    .specs {
        border: solid 2px var(--primary-color);
        border-radius: 3px;

        overflow-x: hidden;

        .tab {
            margin: 0;

            .active {
                background-color: var(--primary-color);
                a {
                    color: white !important;
                }
            }
        }

        table {
            width: 100%;
        }
        table tr {
            width: 100%;
            position: relative;
            display: inline-block;
            td {
                //padding: .3rem 21rem .2rem 1rem;
                display: inline-block;
                padding: .3rem;
                width: 50%;
            }

            &:nth-child(odd) {
                background: var(--secondary-color);
            }
        }
    }
</style>