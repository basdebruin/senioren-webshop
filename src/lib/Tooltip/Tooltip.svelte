<div class="tooltip-container">
    <span class="tooltip-icon">
        <i class="ri-information-line"></i>
    </span>
    <article class="tooltip-content">
        <slot></slot>
    </article>
</div>

<style lang="scss">
    .tooltip-container {
        position: relative;
        width: 0px; height: 0px;
        overflow: visible;
        z-index: 800;
    }

    .tooltip-icon {
        position: absolute;
        top: -30px; left: -30px;
        width: 40px; height: 40px;
        background: pink;
        color: brown;
        border: solid 2px brown;
        border-radius: 20px;
        box-shadow: 0px 5px 10px rgba(0,0,0,.1);

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: help;
    }

    .tooltip-content {
        visibility: hidden;
        position: absolute;
        top: 0; left: 0;
        width: 500px;
        background: white;
        border: solid 1px var(--highlight-color);
        padding: 1rem 0 0 1rem;
        box-shadow: 0px 5px 10px rgba(0,0,0,.1);
        font-size: .7rem;
    }

    .tooltip-icon:hover + .tooltip-content {
        visibility: visible;
    }
</style>