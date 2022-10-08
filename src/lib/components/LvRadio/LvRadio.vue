<template>
    <div class="lv-radio">
        <input :id="identifier" class="lv-radio__input" type="radio" :checked="isChecked" :disabled="disabled" :name="name" :value="value" @input="onInput"/>
        <label v-if="label" class="lv-radio__label" :for="identifier">{{ label }}</label>
    </div>
</template>

<script>
import useRandom from '../../composables/random';

export default {
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        value: {
            type: String,
            default: null,
        },
        name: {
            type: String,
            default: null,
        },
        label: {
            type: String,
            default: null,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            identifier: useRandom(),
        };
    },
    computed: {
        isChecked() {
            return this.value === this.modelValue;
        },
    },
    methods: {
        onInput(e) {
            if (!this.loading && !this.disabled) {
                this.$emit('update:modelValue', e.target.value);
            }
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-radio {
    display: flex;
    align-items: center;
    font-size: $font-size;
    line-height: $font-size;

    &__input {
        width: 1rem;
        height: 1rem;
        margin: 0;
        margin-right: 0.375rem;
    }
}
</style>
