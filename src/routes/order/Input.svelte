<script>
    export let label = "Label";
    export let bottomLabel = "";
    export let clicked = false;
    export let clickedText = "";
    export let clickedState = "success";
    export let width = "100%";
</script>

<label class={clickedState} class:clicked={clicked} style="width: {width}">
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
        border: solid 2px var(--primary-color);
        border-radius: 100%;
        
        i {
            color: inherit;
            transform: translate(-.1rem, .03rem);
        }
    }
    
    label.clicked {
        &.error {
            color: darkred;
            button, .icon {
                border-color: darkred;
                color: darkred;
            }
        }
        &.success {
            color: green;
            button, .icon {
                border-color: green;
                color: green;
            }
        }
    }

</style>