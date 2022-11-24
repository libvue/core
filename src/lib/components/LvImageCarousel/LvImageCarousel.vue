<template>
    <div class="lv-image-carousel" ref="carousel">
        <div class="lv-image-carousel__container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import EmblaCarousel from 'embla-carousel';
import LvImageCarouselItem from './LvImageCarouselItem.vue';

export default {
    components: {
        // eslint-disable-next-line vue/no-unused-components
        LvImageCarouselItem,
    },
    props: {
        loop: {
            type: Boolean,
            default: true,
        },
        axis: {
            type: String,
            default: 'x',
            validator: (val) => ['x', 'y'].includes(val),
        },
        gap: {
            type: String,
            default: '.25rem'
        }
    },
    data() {
        return {
            instance: null,
        };
    },
    watch: {
        '$slots.default': {
            handler(val) {
                if (val().length > 0) {
                    this.createInstance();
                }
            },
            immediate: true,
        },
    },
    methods: {
        createInstance() {
            if (!this.instance) {
                let tryCount = 0;
                const tryCreate = setInterval(() => {
                    if (this.$refs.carousel) {
                        this.instance = EmblaCarousel(this.$refs.carousel, {
                            loop: this.loop,
                            axis: this.axis,
                        });
                        clearInterval(tryCreate);
                    } else if (tryCount < 30) {
                        tryCount += 1;
                    } else {
                        clearInterval(tryCreate);
                    }
                }, 100);
            }
        },
    },
};
</script>

<style lang="scss">
.lv-image-carousel {
    position: relative;
    overflow: hidden;

    .lv-image-carousel-item {
        margin-left: v-bind(gap);
        margin-right: v-bind(gap);
    }

    &__container {
        display: flex;
    }

    &__button {
        position: absolute;
        top: 50%;
        margin-top: -14px;

        &--next {
            right: 0;
        }
    }
}
</style>
