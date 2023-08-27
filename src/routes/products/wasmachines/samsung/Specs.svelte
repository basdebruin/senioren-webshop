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
                ["Afghandeling van je defect", "Bij jou thuis"],
                ["Oude apparatuur gratis retour", "Ja"]
            ]
        },
        {
            title: "algemene kenmerken",
            data: [
                ["Artikelnummer", "87037"],
                ["Fabrikantcode", "WW90T524AAW/S2"],
                ["Merk", "Samsung"],
                ["Garantie", "2 jaar"],
                ["Afghandeling van je defect", "Bij jou thuis"],
                ["Oude apparatuur gratis retour", "Ja"]
            ]
        },
        {
            title: "functionele kenmerken",
            data: [
                ["Artikelnummer", "87037"],
                ["Fabrikantcode", "WW90T524AAW/S2"],
                ["Merk", "Samsung"],
                ["Garantie", "2 jaar"],
                ["Afghandeling van je defect", "Bij jou thuis"],
                ["Oude apparatuur gratis retour", "Ja"]
            ]
        },
        {
            title: "korte specificaties",
            data: [
                ["Artikelnummer", "87037"],
                ["Fabrikantcode", "WW90T524AAW/S2"],
                ["Merk", "Samsung"],
                ["Garantie", "2 jaar"],
                ["Afghandeling van je defect", "Bij jou thuis"],
                ["Oude apparatuur gratis retour", "Ja"]
            ]
        },
        {
            title: "wasfuncties",
            data: [
                ["Artikelnummer", "87037"],
                ["Fabrikantcode", "WW90T524AAW/S2"],
                ["Merk", "Samsung"],
                ["Garantie", "2 jaar"],
                ["Afghandeling van je defect", "Bij jou thuis"],
                ["Oude apparatuur gratis retour", "Ja"]
            ]
        },
        {
            title: "water en energie",
            data: [
                ["Artikelnummer", "87037"],
                ["Fabrikantcode", "WW90T524AAW/S2"],
                ["Merk", "Samsung"],
                ["Garantie", "2 jaar"],
                ["Afghandeling van je defect", "Bij jou thuis"],
                ["Oude apparatuur gratis retour", "Ja"]
            ]
        },
        {
            title: "fysieke eigenschappen",
            data: [
                ["Artikelnummer", "87037"],
                ["Fabrikantcode", "WW90T524AAW/S2"],
                ["Merk", "Samsung"],
                ["Garantie", "2 jaar"],
                ["Afghandeling van je defect", "Bij jou thuis"],
                ["Oude apparatuur gratis retour", "Ja"]
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

        table tr {
            td {
                padding: .3rem 21rem .2rem 1rem;
            }

            &:nth-child(odd) {
                background: var(--secondary-color);
            }
        }
    }
</style>