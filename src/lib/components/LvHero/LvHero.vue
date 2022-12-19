<template>
    <div class="lv-hero" :class="classObject">
        <div class="lv-hero__content">
            <h1 class="lv-hero__title"><slot name="title">{{ title }}</slot></h1>
            <p class="lv-hero__description">
                <slot name="description">{{ description }}</slot>
            </p>
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
        },
    },
    computed: {
        hasSide() {
            return !!this.$slots.side;
        },
        classObject() {
            return {
                'lv-hero--no-side': !this.hasSide,
            };
        },
    },
};
</script>

<style lang="scss">
.lv-hero {
    $self: &;
    display: flex;
    color: var(--text-color);
    margin: 0 auto;

    &__content {
        display: flex;
        flex-direction: column;
    }
    &__title {
        margin: 0;
        margin-bottom: 1rem;
        font-size: 3rem;
    }
    &__description {
        margin: 0;
        margin-bottom: 1rem;
        font-size: 1.3rem;
    }
    &__buttons {
        display: flex;
        flex-shrink: 0;
        gap: 10px;
        margin-top: auto;
    }
    &__side {
        display: flex;
        justify-content: center;
        align-items: center;
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
