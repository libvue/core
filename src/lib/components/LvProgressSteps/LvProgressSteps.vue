<template>
    <div class="lv-progress-steps">
        <div
            v-for="(step, index) in steps"
            :key="index"
            class="lv-progress-steps__step"
            :class="{
                'lv-progress-steps__step--completed': !!step.completed,
                'lv-progress-steps__step--active': step.id === active,
                'lv-progress-steps__step--disabled': !!step.disabled,
            }"
            @click="onClickStep(step.id)"
        >
            <div class="lv-progress-steps__title">
                <span class="lv-progress-steps__prefix" v-if="step.prefix">{{ step.prefix }}</span>
                {{ step.title }}
            </div>
            <div class="lv-progress-steps__bar"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        steps: {
            type: Array,
            default: () => [],
        },
        active: {
            type: String,
            default: null,
        }
    },
    emits: ['change-step'],
    methods: {
        onClickStep(id) {
            this.$emit('change-step', id)
        }
    }
};
</script>

<style lang="scss">
.lv-progress-steps {
    $self: &;
    display: flex;
    gap: 1rem;
    width: 100%;
    overflow-x: auto;

    &__step {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: center;
        cursor: pointer;
        &--completed {
            #{$self}__bar {
                background-color: var(--color-success);
            }
        }
        &--active {
            #{$self}__bar {
                background-color: var(--color-primary);
            }
        }
        &--disabled {
            cursor: not-allowed;
            pointer-events: none;
            #{$self}__title,
            #{$self}__prefix {
                color: var(--text-color-dimmed)
            }
        }
    }
    &__prefix {
        display: inline-block;
        margin-right: 0.5rem;
    }
    &__title {
        font-weight: 600;
        white-space: nowrap;
    }
    &__bar {
        flex-shrink: 0;
        margin-top: 0.5rem;
        background-color: var(--border-color);
        width: 100%;
        height: 3px;
    }
}
</style>
