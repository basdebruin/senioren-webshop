<script lang="ts">
    export let isLeft : boolean = false;
    export let offsetLeft = 0;
    export let offsetTop = 0;
</script>

<div class="tooltip-container" style="--offset-left: {offsetLeft}px; --offset-top: {offsetTop}px">
    <span class="tooltip-icon">
        <img src="/tooltip_icon.svg" alt="tooltip">

        <article class="tooltip-content" class:is-left={isLeft}>
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

        &:hover {
            z-index: 850;
        }
    }

    .tooltip-icon {
        position: absolute;
        top: calc(-30px + var(--offset-top)); 
        left: calc(-30px + var(--offset-left));
        width: 34px; height: 34px;
        background: white;
        color: pink;
        border: solid 3px pink;
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
        top: 1.4rem; left: 0;
        width: 500px;
        background: pink;
        padding: 1rem;
        line-height: 1.3;
        box-shadow: 0px 5px 10px rgba(0,0,0,.1);
        font-size: .7rem;
        color: var(--dark-color);

        &.is-left {
            left: unset;
            right: 0;
        }
    }
    
    .tooltip-icon:hover .tooltip-content {
        visibility: visible;
    }
</style>