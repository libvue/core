<template>
    <div class="lv-hero" :class="classObject">
        <div class="lv-hero__content">
            <h1 class="lv-hero__title">{{ title }}</h1>
            <p class="lv-hero__description">{{ description }}</p>
            <div class="lv-hero__buttons" v-if="!!$slots.buttons">
                <slot name="buttons"></slot>
            </div>
        </div>
        <div class="lv-hero__side" v-if="!!$slots.side">
            <slot name="side"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        }
    },
    computed: {
        hasSide() {
            return !!this.$slots.side;
        },
        classObject() {
            return {
                'lv-hero--no-side': !this.hasSide,
            }
        }
    }
};
</script>

<style lang="scss">
.lv-hero {
    $self: &;
    display: flex;
    &__content {
        display: flex;
        flex-direction: column;
    }
    &__title {
        font-size: 3rem;
        margin: 0;
        margin-bottom: 1rem;
    }
    &__description {
        margin: 0;
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }
    &__buttons {
        flex-shrink: 0;
        margin-top: auto;
        display: flex;
        gap: 10px;
    }
    &__side {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    &--no-side {
        #{$self}__description,
        #{$self}__title {
            text-align: center;
        }
        #{$self}__buttons {
            justify-content: center;
        }
    }
}
</style>
