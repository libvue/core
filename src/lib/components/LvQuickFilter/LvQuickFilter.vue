<template>
    <div class="lv-quick-filter" :class="classObject">
        <div class="lv-quick-filter__input">
            <div class="lv-quick-filter__values">

            </div>
            <input class="lv-quick-filter__search" placeholder="Search anything" type="text" v-model="search">
        </div>

        <transition name="dropdown">
            <div v-show="dropdownVisible" class="lv-quick-filter__dropdown" role="listbox">
                {{ dropdownResults }}
            </div>
        </transition>
    </div>
</template>

<script>
import propSizeMixin from '../../mixins/propSizeMixin';

export default {
    mixins: [
        propSizeMixin('default'),
    ],
    props: {
        loading: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        filters: {
            type: Object,
            default: () => ({})
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-quick-filter--size-${this.size}`]: true,
                'lv-quick-filter--disabled': !!this.disabled || !!this.loading,
                'lv-quick-filter--loading': !!this.loading,
            };
        },
        dropdownResults() {
            return {}
        }
    },
    data() {
        return {
            dropdownVisible: true,
            search: 'Duit',
        };
    },
};
</script>

<style lang="scss">
@import '../../scss/mixins/sizeMixin';
.lv-quick-filter {
    $self: &;
    position: relative;
    width: 100%;
    &__input {
        display: flex;
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
    }
    &__search {
        flex-grow: 1;
        font-size: inherit;
        border: 0;
        &:focus {
            outline: 0;
        }
    }
    &__values {
        font-size: inherit;
    }

    &__dropdown {
        position: absolute;
        z-index: var(--z-index-dropdown);
        margin-top: calc(var(--padding) * 0.5);
        box-shadow: var(--shadow);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background-color: var(--background-color);
        padding: calc(var(--padding) * 0.5);
        width: 100%;
        max-height: 300px;
        overflow-y: auto;
        font-size: inherit;
    }

    @include size-mixin('.lv-quick-filter__input');
}
</style>