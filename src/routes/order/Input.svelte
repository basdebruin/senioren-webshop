<script>
    export let label = "Label";
    export let disabled = false;

    let value = "";

    let state = "";

    function validate() {
        if (value.length < 3) {
            state = "error";
            return;
        } 

        state = "success";
    }
</script>

<label class={state}>
    {label}
    <input type="text" class="form-input" disabled={disabled} on:input={validate} bind:value={value}>
</label>

<style lang="scss">
    label {
        &.error {
            color: darkred;
            input {
                border: solid 2px darkred;
            }
        }
        &.success {
            color: green;
            input {
                border: solid 2px green;
            }
        }
    }
</style>