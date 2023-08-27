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

<style lang="scss">
    .image-gallery {
        position: relative;
        display: block;
        width: 100%;

        .main-image {
            margin: 1rem auto;
            width: 60%;
            height: 400px;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

        .thumbnails {
            display: flex;
            margin: 1rem auto;
            width: 100%;
            gap: .5rem;
            justify-content: center;

            .thumbnail {
                width: 6rem;
                height: 6rem;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }

        .btn-left, .btn-right {
            position: absolute;
            left: 0; top: 40%;
            padding: .3rem .2rem;
            font-size: 1.5rem;
        }
        .btn-right {
            left: unset;
            right: 0;
        }
    }
</style>