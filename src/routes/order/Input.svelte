<script>
    export let label = "Label";
    export let bottomLabel = "";
    export let clicked = false;
    export let clickedText = "";
    export let clickedState = "success";
    export let width = "100%";
    export let disabled = false;
</script>

<label class={clickedState} class:clicked={clicked} class:disabled={disabled} style="width: {width}">
    {label}

    <button 
        type="button" class="form-input" 
        on:click={() => clicked = true}>
            &NonBreakingSpace;
            {#if clicked}    
                {clickedText}

                <div class="icon">
                    <i class={clickedState=="success" ? "ri-check-fill" : "ri-close-fill"}></i>
                </div>
            {/if}

    </button>

    {clicked ? bottomLabel : ""}
</label>

<style lang="scss">
    label {
        display: block;
    }
    button {
        display: block;
        position: relative;
        text-align: left;
        width: 100%;
        padding: .5rem;
        
        cursor: pointer;
    }

    .icon {
        position: absolute;
        top: .4rem;
        right: .5rem;
        display: flex;
        width: 28px;
        height: 28px;
        border: solid 4px var(--primary-color);
        border-radius: 100%;
        
        i {
            color: inherit;
            transform: translate(-.1rem, .03rem);
        }
    }

    label.disabled:not(.clicked) button {
        background-color: var(--secondary-color);
    }
    
    label.clicked {
        &.error {
            color: #C20000;
            button, .icon {
                border-color: #C20000;
                color: #C20000;
                border-width: 2px;
            }
        }
        &.success {
            color: #3A9403;
            button, .icon {
                border-color: #3A9403;
                color: #3A9403;
                border-width: 2px;
            }
        }
    }

</style>