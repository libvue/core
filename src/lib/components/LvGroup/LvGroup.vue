<template>
    <div class="lv-group" :class="classObject">
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        direction: {
            type: String,
            default: 'row',
            validator: (value) => ['row', 'column'].includes(value),
        },
        align: {
            type: String,
            default: 'left',
            validator(value) {
                // The value must match one of these strings
                return ['left', 'center', 'right', 'justify'].includes(value);
            },
        },
        gap: {
            type: [String, Number],
            default: '10px',
        },
        fill: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        classObject() {
            return {
                [`lv-group--align-${this.align}`]: !!this.align,
                [`lv-group--direction-${this.direction}`]: !!this.direction,
                'lv-group--fill': this.fill,
            };
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-group {
    display: flex;
    flex-wrap: wrap;
    gap: v-bind(gap);
    width: 100%;

    &--align-left {
        justify-content: flex-start;
    }

    &--align-right {
        justify-content: flex-end;
    }

    &--align-center {
        justify-content: center;
    }

    &--direction-column {
        flex-direction: column;
    }

    &--fill {
        > * {
            flex-grow: 1;
        }
    }
}
</style>
