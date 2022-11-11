<template>
    <div class="lv-badge" :class="classObject">
        <div v-if="!!$slots.default" class="lv-badge__slot">
            <slot></slot>
        </div>
        <div class="lv-badge__badge" :class="badgeClassObject">{{ text }}</div>
    </div>
</template>

<script>
import propColorMixin from '../../mixins/propColorMixin';
import propSizeMixin from '../../mixins/propSizeMixin';

export default {
    mixins: [propColorMixin('solid-danger'), propSizeMixin('small')],
    props: {
        text: {
            type: String,
            default: '',
        },
    },
    computed: {
        classObject() {
            return {
                'lv-badge--slotted': !!this.$slots.default,
            };
        },
        badgeClassObject() {
            return {
                [`lv-badge__badge--color-${this.color}`]: !!this.color,
                [`lv-badge__badge--size-${this.size}`]: true,
            };
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/mixins/colorMixin';
@import '../../scss/mixins/sizeMixin';

.lv-badge {
    $self: &;
    display: inline-flex;
    position: relative;
    align-items: center;

    &__badge {
        display: inline-flex;
        border-radius: 1rem;
        padding: 0.25rem 0.5rem;
        color: white;
        @include color-mixin;
        @include size-mixin;
    }
    &__slot {
        display: inline;
        position: relative;
    }
    &--slotted {
        #{$self}__badge {
            position: absolute;
            top: -1rem;
            right: 0;
            transform: translateX(50%);
        }
    }
}
</style>
