<template>
    <fieldset class="lv-fieldset">
        <label class="lv-fieldset__label" :for="labelFor">
            {{ label }} <lv-icon v-if="required" class="lv-fieldset__required-symbol" name="asterisk"/>
            <button v-if="resetButton" class="lv-fieldset__reset-button" type="button" @click="onClickResetButton">
                <lv-icon class="lv-fieldset__reset-button-icon" name="rotate-ccw" /> Reset
            </button>
        </label>
        <lv-flex direction="column">
            <div class="lv-fieldset__content">
                <slot></slot>
            </div>
            <div v-if="!!$slots.hint" class="lv-fieldset__hint">
                <slot name="hint">This is a hint</slot>
            </div>
            <div v-if="!!$slots.invalid" class="lv-fieldset__invalid">
                <slot name="invalid">Invalid</slot>
            </div>
        </lv-flex>
    </fieldset>
</template>

<script>
import LvIcon from "../LvIcon/LvIcon.vue";
import LvFlex from "../LvFlex/LvFlex.vue";

export default {
    components: { LvFlex, LvIcon },
    props: {
        label: {
            type: String,
            default: null,
        },
        labelFor: {
            type: String,
            default: null,
        },
        resetButton: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        }
    },
    emits: ['reset'],
    methods: {
        onClickResetButton() {
            this.$emit('reset')
        }
    }
};
</script>

<style lang="scss">
.lv-fieldset {
    margin: 0;
    border: 0;
    padding: 0;
    min-width: 0; // Fix for overflow

    &__label {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        font-size: var(--font-size);
        line-height: var(--font-size);
        font-weight: 500;
    }

    &__reset-button {
        display: flex;
        cursor: pointer;
        margin-left: auto;
        border: 0;
        background-color: transparent;
        padding: 0;
        color: var(--text-color);
        font-size: var(--font-size-small);

        &-icon {
            margin-right: 0.5rem;
        }
        &:hover {
            text-decoration: underline;
        }
    }
    &__required-symbol {
        color: var(--color-danger);
        margin-top: -.5rem;
    }
    &__hint {
        color: var(--text-color-dimmed);
        font-size: var(--font-size-small);
    }

    &__invalid {
        color: var(--color-danger);
        font-size: var(--font-size-small);
    }
}
</style>
