<script>
    import { onMount } from "svelte";

    let mobileModalActive = false;
    onMount(()=> {
        if (window.innerWidth < 1000)
            mobileModalActive = true
    });

    function copyToClipboard() {
        navigator.clipboard.writeText(
            window.location.origin
        )
    }
</script>

<div class="fixed-page">

<div class="hero">

    <img src="/images/logo-accessibility.png" alt="Stichting Accessibility">
    <h1 style="color: white">Voorbeeldontwerp Webwinkel</h1>
    <h2 style="color: white">voor senioren</h2>

</div>

<article class="columns">
    <div class="col-7">
        <p>
            Lorem ipsum dolor sit amet consectetur. Tellus id ac et curabitur leo tellus porttitor convallis. Varius viverra convallis feugiat egestas. Porttitor ut aliquet eleifend volutpat vestibulum consequat ultrices integer purus. In morbi accumsan vel nunc vel. Purus nisi massa risus venenatis dignissim dignissim odio. Vulputate purus iaculis turpis eget urna augue metus sed vulputate. Condimentum porta netus vehicula cum elit vivamus sed at.
        </p>
        <p>    
            Rhoncus cras risus mollis nunc sit ipsum. Quis magna tortor nisl sed. Ac faucibus at dignissim gravida fusce. Volutpat duis in facilisi in purus nisi malesuada neque eu. Diam nullam mauris lectus enim sed posuere. Sollicitudin bibendum pellentesque.
        </p>
        <a href="/home" class="btn">
            Start
            <i class="ri-arrow-right-line"></i>
        </a>
    </div>
    <div class="col-4">
        <img src="/images/stock-photo-ipad.png" alt="oudere mevrouw op de bank met een ipad">
    </div>
</article>

</div>


<!-- MOBILE POPUP -->
{#if mobileModalActive}
    <article class="fixed-page mobile-warning">
        <h2>Niet gemaakt voor mobiel</h2>
        <p>Het lijkt erop dat je deze website probeert te openen op een mobiel apparaat. Deze voorbeeld webshop is alleen ontworpen voor desktop.</p>
        <button class="btn btn-primary" on:click={()=>mobileModalActive=false}>
            <i class="ri-close-fill"></i> Negeer
        </button>
        <button class="btn" on:click={copyToClipboard}>
            <i class="ri-clipboard-line"></i> Kopieer webadres naar klembord
        </button>
    </article>
{/if}

<style lang="scss">
    h2 {
        font-weight: normal;
    }
    .fixed-page {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 999;
        background-color: white;
    }
    .hero {
        background-color: var(--accessibility-blue);
        color: white;

        padding: 3rem;

        img {
            width: 20%;
            margin-bottom: 1rem;
        }
    }

    article {
        padding: 3rem;
        gap: 2rem;
    }

    .mobile-warning {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        justify-content: center;
        text-align: center;
        
        z-index: 1000;
        background-color: white;
        min-height: 100%;
        padding: 1rem;
    }
</style>