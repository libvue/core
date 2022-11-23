<template>
    <div ref="carousel" class="lv-image-carousel">
        <div class="lv-image-carousel__container">
            <slot></slot>
        </div>
    </div>
</template>


<script>
import EmblaCarousel from 'embla-carousel';

export default {
    data() {
        return {
            instance: null,
        }
    },
    mounted() {
        this.instance = EmblaCarousel(this.$refs.carousel, {
            loop: false
        });
    }
}
</script>

<style lang="scss">
.lv-image-carousel {
    overflow: hidden;

    &__container {
        display: flex;
    }
}
</style>
