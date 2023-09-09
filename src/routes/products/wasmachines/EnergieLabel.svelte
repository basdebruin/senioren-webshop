<script>
    export let energielabel = "A";
</script>

<span class="energielabel">
    <img src="/energie-label.png" alt="">
    <span>{energielabel}</span>
</span>

<style lang="scss">
    .energielabel {
        position: relative;

        img {
            width: 60px;
        }

        span {
            position: absolute;
            top: -1rem;
            left: 1.1rem;

            color: white;
            font-size: 1.2rem;
        }
    }
</style>