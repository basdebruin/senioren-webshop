<script lang="ts">

    export let stars = 5;
    export let size = "1em";

</script>

<div class="stars" style="--star-size: {size}">
    {#each Array(5) as a, index}
        <i class={index < stars ? "ri-star-fill" : "ri-star-line"}></i>
    {/each}
</div>

<style>
    .stars {
        display: flex;
        flex-wrap: nowrap;
        color: var(--primary-color);
    }
    .stars i {
        font-size: var(--star-size);
        margin: 0;
    }
</style>