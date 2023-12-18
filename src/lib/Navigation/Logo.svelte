<a href="/home" aria-label="Elektroworld - Ga naar home" id="logo">
    <span class="text">
        ElektroHub
    </span>
    <svg class="logo-element" width="107" height="117" viewBox="0 0 107 117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34.1159 64.4542H0L34.1159 0H58.5H88L68.2319 33.8759H107L34.1159 116.5V64.4542Z" fill="white"/>
    </svg>

</a>

<style lang="scss">
    #logo {
        appearance: none;
        position: relative;
        overflow: hidden;

        &:hover {
            text-decoration: none;
        }
    }

    .text {
        font-size: 1.5rem;
        color: white;
    }

    .logo-element {
        position: absolute;
        top: -2rem;
        left: 1.2rem;

        width: 100px; height: 100px;

        opacity: .2;

        clip-path: inset(0 0 16px 0); //crop
    }
</style>