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
    <h1 style="color: white">Prototype webshop voor iedereen</h1>
    <!-- <h2 style="color: white">voor ouderen</h2> -->

</div>

<article class="columns">
    <div class="column">
        <p>
            In het onderzoek 'Senioren en Webshops', uitgevoerd door Accessibility in de periode mei 2022 tot juli 2023, is gekeken naar het gebruik van webshops door de oudere onlinegebruikers (65 jaar en ouder). Het onderzoek bestond uit twee delen: een online enquête onder leden van de ANBO en gebruikersonderzoeken, waarbij oudere deelnemers werden geobserveerd tijdens het doen van aankopen in webshops.
        </p>
        <p>
            Het doel van dit onderzoek was inzichtelijk maken hoe webshops nog gebruiksvriendelijker gemaakt kunnen worden voor de oudere doelgroep. Dit is belangrijk, omdat de groep ouderen groeit. Als mensen ouder worden, krijgen ze te maken met specifieke ouderdomsbeperkingen. Waar moet je als webshop-bouwer of als webshop-eigenaar dan rekening mee houden voor de interessante klantengroep? De inzichten uit het onderzoek zijn verwerkt in dit prototype. Via tooltips kun je de motivatie achter de designkeuzes lezen. 
        </p>

        <a class="link" href="https://www.accessibility.nl/senioren-en-webshops" target="_blank"> Lees meer op de landingspagina <i class="ri-external-link-line"></i> </a>
        <a href="/home" class="btn">
            Start
            <i class="ri-arrow-right-line"></i>
        </a>
    </div>
    <div class="col-5 image-col">
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
    h1 {
        font-size: 2rem;
        margin: 0;
        margin-top: 1rem;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: normal;
        margin: 0;
    }
    .fixed-page {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 100vh;
        z-index: 999;
        background-color: white;
    }
    .hero {
        background-color: var(--accessibility-blue);
        color: white;

        padding: 2rem 3rem;

        img {
            width: 20%;
            margin-bottom: 1rem;
        }
    }

    article {
        padding: 3rem;
        gap: 2rem;
    }

    .link {
        display: block;
        margin: 0 0 1rem 0;

        i {
            font-size: .8rem;
        }
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

    @media (max-width: 900px) {
        .image-col {
            display: none;
        }
    }
</style>
