<div class="tooltip-container">
    <span class="tooltip-icon">
        <img src="/tooltip_icon.svg" alt="tooltip">

        <article class="tooltip-content">
            <slot></slot>
        </article>
    </span>
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
        width: 34px; height: 34px;
        background: pink;
        color: brown;
        border: solid 2px brown;
        border-radius: 20px;
        box-shadow: 0px 5px 10px rgba(0,0,0,.1);

        display: flex;
        align-items: center;
        justify-content: center;

        cursor: help;

        img {
            width: 30px;
        }
    }

    .tooltip-content {
        visibility: hidden;
        position: absolute;
        top: .5rem; left: .5rem;
        width: 500px;
        background: pink;
        border: solid 1px brown;
        padding: 1rem;
        line-height: 1.3;
        box-shadow: 0px 5px 10px rgba(0,0,0,.1);
        font-size: .7rem;
        color: var(--dark-color);
    }

    .tooltip-icon:hover .tooltip-content {
        visibility: visible;
    }
</style>