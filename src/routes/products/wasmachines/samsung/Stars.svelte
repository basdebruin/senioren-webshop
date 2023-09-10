<script lang="ts">

    export let stars = 5;
    export let size = "1em";

</script>

<div class="stars" style="--star-size: {size}" aria-label="{stars} sterren">
    {#each Array(5) as a, index}
        <i class={index < stars ? "ri-star-fill" : "ri-star-line"}></i>
    {/each}
</div>

<style>
    .stars {
        display: inline-flex;
        flex-wrap: nowrap;
        color: var(--primary-color);
        margin: 0 0 .5rem 0;
    }
    .stars i {
        font-size: var(--star-size);
        margin: 0;
    }
</style>