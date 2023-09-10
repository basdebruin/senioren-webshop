<script>
    // @ts-nocheck

    import { clickOutside } from "$lib/clickOutside";

    export let title = "Title";
    let open = false;
</script>

<span class="explainer">

    <a href="#{title.replaceAll(" ", "-")}" class="link" on:click={() => open=!open}>Uitleg</a>

    {#if open}
        <div class="card" use:clickOutside on:click_outside={() => open=false}>

            <div class="card-header">
                <h4 class="card-title">{title}</h4>
                <a href="#explainer" class="close-button" on:click={() => open=false}>
                    Sluiten
                    <i class="ri-close-circle-fill"></i>
                </a>
            </div>

            <div class="card-body">
                <slot></slot>
            </div>

        </div>
    {/if}

</span>

<style lang="scss">
    .explainer {
        position: relative;
        display: inline-block;

        .card {
            display: block;

            position: absolute;
            top: 0rem;
            left: 0;
            z-index: 900;

            width: 25rem;

            box-shadow: 0 5px 20px rgba(0,0,0,.1);

            .card-header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .close-button {
                    font-weight: bold;
                    display: flex;
                    align-items: center;
                    transform: translateY(-.3rem);

                    text-decoration: none !important;
                }
            }
        }
    }
</style>