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
                    <img src={"/check-fill.svg"} alt={clickedState}>
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
        display: block;
        width: 28px;
        height: 28px;
        border: solid 2px var(--primary-color);
        border-radius: 100%;
    }
    
    label.clicked {
        &.error {
            color: darkred;
            button, .icon {
                border-color: darkred;
            }
        }
        &.success {
            color: green;
            button, .icon {
                border-color: green;
            }
        }
    }

</style>