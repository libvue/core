<template>
    <div class="lv-hero" :class="classObject">
        <div class="lv-hero__content">
            <div class="lv-hero__title">
                <slot name="title">
                    <lv-heading :level="1">{{ title }}</lv-heading>
                </slot>
            </div>
            <div class="lv-hero__description">
                <slot name="description">
                    {{ description }}
                </slot>
            </div>
            <div v-if="!!$slots.buttons" class="lv-hero__buttons">
                <slot name="buttons"></slot>
            </div>
        </div>
        <div v-if="!!$slots.image" class="lv-hero__image">
            <slot name="image"></slot>
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
        align: {
            type: String,
            default: 'center',
            validator: (val) => ['left', 'center', 'right'].includes(val),
        },
    },
    computed: {
        hasSide() {
            return !!this.$slots.side;
        },
        classObject() {
            return {
                [`lv-hero--align-${this.align}`]: !!this.align,
            };
        },
    },
};
</script>

<style lang="scss">
.lv-hero {
    $self: &;
    display: flex;
    margin: 0 auto;
    color: var(--text-color);
    width: 100%;

    &__content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    &__title {
        margin: 0;
        margin-bottom: 1rem;
        font-weight: bold;
        font-size: var(--font-size-huge);
    }
    &__description {
        margin: 0;
        margin-bottom: 1rem;
        font-size: var(--font-size-large);
    }
    &__buttons {
        display: flex;
        flex-shrink: 0;
        gap: 10px;
        margin-top: auto;
    }

    &--align-right {
        #{$self}__image {
            display: flex;
            justify-content: center;
            margin-left: 1rem;
            text-align: center;
        }
        #{$self}__content {
            justify-content: flex-end;
        }
        #{$self}__description,
        #{$self}__title {
            display: flex;
            justify-content: flex-end;
            text-align: right;
            > * {
                display: inline;
            }
        }
        #{$self}__buttons {
            display: flex;
            justify-content: flex-end;
        }
    }

    &--align-left {
        #{$self}__image {
            order: 0;
            display: flex;
            justify-content: center;
            margin-right: 1rem;
            text-align: center;
        }
        #{$self}__content {
            order: 1;
        }
    }

    &--align-center {
        flex-direction: column;
        justify-content: center;

        #{$self}__content {
            order: 1;
            justify-content: center;
        }
        #{$self}__description,
        #{$self}__title {
            display: flex;
            justify-content: center;
            text-align: center;
            > * {
                display: inline;
            }
        }
        #{$self}__buttons {
            display: flex;
            justify-content: center;
        }
        #{$self}__image {
            order: 0;
            display: flex;
            justify-content: center;
            margin-bottom: 1rem;
            text-align: center;
        }
    }
}
</style>
