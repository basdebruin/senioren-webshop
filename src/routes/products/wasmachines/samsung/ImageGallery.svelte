<script lang="ts">
    export let images : string[] = [""];

    let imageIndex = 0;
    let activeImage = images[imageIndex];
</script>

<div class="image-gallery">
    <div class="main-image">
        <img src={activeImage} alt="">
    </div>

    <div class="thumbnails">
        {#each images as image, index}
            <button class="btn thumbnail" on:click={() => {imageIndex=index; activeImage = images[index]}}>
                <img src={image} alt="">
            </button>
        {/each}
    </div>

    <button class="btn btn-left" on:click={() => {--imageIndex >= 0 ? null : imageIndex+=images.length; activeImage = images[imageIndex]}}> 
        <i class="ri-arrow-left-s-line"></i>
    </button>
    <button class="btn btn-right" on:click={()=> {imageIndex = (imageIndex+1) % images.length; activeImage = images[imageIndex]}}>
        <i class="ri-arrow-right-s-line"></i>
    </button>
</div>