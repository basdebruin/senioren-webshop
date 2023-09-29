<script lang="ts">
    export let images : string[] = [""];

    let imageIndex = 0;
    let activeImage = images[imageIndex];

    let modalOpen = false;
</script>

<div class="image-gallery">
    <a href="#open-modal" class="main-image" on:click={() => modalOpen=!modalOpen} aria-label="maak afbeelding groter">
        <img src={activeImage} alt="">
    </a>

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

<a href="#close-modal" class="modal" class:active={modalOpen} aria-hidden={!modalOpen} on:click={() => modalOpen = false} aria-label="sluit afbeelding">
    <div class="modal-overlay"></div>
    <div class="modal-container">
        <img src={activeImage} alt="">
    </div>
</a>

<style lang="scss">
    .image-gallery {
        position: relative;
        display: block;
        width: 100%;

        .main-image {
            display: block;
            margin: 1rem auto;
            width: 60%;
            height: 400px;
            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            cursor: zoom-in;
        }

        .thumbnails {
            display: flex;
            margin: 1rem auto;
            width: 100%;
            gap: .5rem;
            justify-content: center;

            .thumbnail {
                width: 4rem;
                height: 4rem;
                padding: 0;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        .btn-left, .btn-right {
            position: absolute;
            left: 0; top: 40%;
            padding: .4rem 0 .5rem 0;
            font-size: 1.5rem;
        }
        .btn-right {
            left: unset;
            right: 0;
        }

    }
    .modal {
        z-index: 999;

        cursor: zoom-out;

        img {
            display: block;
            width: 100%;
            height: 100%;
            max-height: 80vh;
            padding: 2rem;
            object-fit: contain;
        }

        .modal-overlay {
            background: rgba(255,255,255,.8);
            cursor: zoom-out;
        }

        .modal-container {
            background: none;
            box-shadow: none;
        }
    }
</style>