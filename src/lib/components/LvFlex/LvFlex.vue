<template>
    <div class="lv-flex" :class="classObject">
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
        justifyContent: {
            type: String,
            default: 'start',
            validator: (value) => ['start', 'center', 'end'].includes(value),
        },
        alignItems: {
            type: String,
            default: null,
            validator: (value) => ['start', 'center', 'end'].includes(value),
        },
        gap: {
            type: [String, Number],
            default: '10px',
        },
        fill: {
            type: Boolean,
            default: false,
        },
        wrap: {
            type: Boolean,
            default: true,
        }
    },
    computed: {
        classObject() {
            return {
                [`lv-flex--justify-content-${this.justifyContent}`]: !!this.justifyContent,
                [`lv-flex--align-items-${this.alignItems}`]: !!this.alignItems,
                [`lv-flex--direction-${this.direction}`]: !!this.direction,
                'lv-flex--fill': this.fill,
                'lv-flex--wrap': this.wrap,
            };
        },
    },
};
</script>

<style lang="scss">
.lv-flex {
    $self: &;
    display: flex;
    gap: v-bind(gap);

    &--justify-content-start {
        justify-content: flex-start;
    }

    &--justify-content-end {
        justify-content: flex-end;
    }

    &--justify-content-center {
        justify-content: center;
    }

    &--align-items-start {
        align-items: flex-start;
    }

    &--align-items-end {
        align-items: flex-end;
    }

    &--align-items-center {
        align-items: center;
    }

    &--direction-column {
        flex-direction: column;
    }

    &--fill {
        > * {
            flex-grow: 1;
        }
    }
    &--fill#{$self}--direction-column {
        align-items: stretch !important;
    }

    &--wrap {
        flex-wrap: wrap;
    }
}
</style>
