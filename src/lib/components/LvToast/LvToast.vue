<template>
    <div class="lv-toast" :class="classObject">
        <div v-if="icon" class="lv-toast__icon">
            <lv-button :icon="icon" :size="hasDescription ? 'default' : 'small'" :color="iconColor" />
        </div>
        <div class="lv-toast__message" @click="onClick">
            <div class="lv-toast__title">
                {{ title }}
            </div>
            <div class="lv-toast__description">
                {{ description }}
            </div>
        </div>
        <div v-if="button" class="lv-toast__button">
            <lv-button :label="button" :size="hasDescription ? 'default' : 'small'" :color="buttonColor" @click="onClickButton" />
        </div>
    </div>
</template>

<script>
import LvButton from "../LvButton/LvButton.vue";

export default {
    components: { LvButton },
    props: {
        icon: {
            type: String,
            default: null,
        },
        iconColor: {
            type: String,
            default: 'solid-dimmed-primary',
        },
        title: {
            type: String,
            default: '',
        },
        description: {
            type: String,
            default: '',
        },
        button: {
            type: String,
            default: null,
        },
        buttonColor: {
            type: String,
            default: 'solid-dimmed-primary',
        }
    },
    emits: ['click', 'click-button'],
    computed: {
        hasDescription() {
            return !!this.description;
        },
        classObject() {
            return {
                [`lv-toast--no-description`]: !this.description,
            }
        }
    },
    methods: {
        onClickButton() {
            this.$emit('click-button');
        },
        onClick(e) {
            this.$emit('click', e);
        },
    },
};
</script>

<style lang="scss">
.lv-toast {
    $self: &;
    display: flex;
    box-shadow: var(--shadow);
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background: var(--background-color);
    padding: var(--padding);

    &__message {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    &__icon {
        width: 3rem;
        padding: .15rem;
        align-items: center;
        justify-content: center;
        display: flex;
        margin-right: .5rem;
        font-size: var(--font-size);
        cursor: default;
        pointer-events: none;
    }

    &__title {
        margin-bottom: 0.35rem;
        font-weight: bold;
        font-size: var(--font-size);
        line-height: var(--line-height);
        color: var(--text-color);
    }
    &__description {
        color: var(--text-color-dimmed);
        font-size: var(--font-size-small);
        line-height: var(--line-height-small);
    }

    &__button {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: auto;
        padding-left: 1rem;
    }

    &--no-description {
        #{$self}__title {
            margin-bottom: 0;
        }
        #{$self}__icon {
            font-size: .875rem;
            width: 2rem;
        }
    }
}
</style>
