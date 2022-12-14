<template>
    <div class="lv-toast" :class="classObject">
        <div class="lv-toast__icon" v-if="icon">
            <lv-icon :name="icon"/>
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
            <lv-button :label="button" type="outline" :size="hasDescription ? 'default' : 'small'" color="solid-dimmed-primary" @click="onClickButton" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            default: null,
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
        onClick() {
            this.$emit('click');
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
        background-color: var(--color-primary-dimmed);
        color: var(--color-primary);
        align-items: center;
        justify-content: center;
        display: flex;
        margin-right: .5rem;
        font-size: 1rem;
        border-radius: var(--border-radius);
    }

    &__title {
        margin-bottom: 0.35rem;
        font-weight: bold;
        font-size: var(--font-size);
        line-height: var(--font-size);
    }
    &__description {
        color: var(--text-color-dimmed);
        font-size: var(--font-size-small);
        line-height: var(--font-size-small);
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
