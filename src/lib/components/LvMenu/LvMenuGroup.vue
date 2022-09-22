<template>
    <div class="lv-menu-group" :class="classObject" @mouseenter="onHoverLabel" @mouseleave="onBlurLabel">
        <h1 class="lv-menu-group__label" >
            <lv-icon class="lv-menu-group__icon" v-if="icon" :name="icon" /> {{ label }}
        </h1>
        <transition name="fade">
           <div class="lv-menu-group__content" v-show="showContent">
               <slot />
           </div>
        </transition>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            default: '',
        },
        icon: {
            type: String,
            default: '',
        },
    },
    inject: ['layout'],
    data() {
        return {
            showContent: this.layout.value !== 'vertical',
        }
    },
    watch: {
        'layout.value'(val) {
            this.showContent = val !== 'vertical';
        },
    },
    computed: {
        classObject() {
            return {
                [`lv-menu-group--layout-${this.layout.value}`]: !!this.layout.value
            };
        }
    },
    methods: {
        onHoverLabel() {
            if(this.layout.value === 'vertical') {
                this.showContent = true;
            }
        },
        onBlurLabel() {
            if(this.layout.value === 'vertical') {
                this.showContent = false;
            }
        }
    }
};
</script>

<style lang="scss">
@import '../../scss/variables';
@import '../../scss/transitions/fade';

.lv-menu-group {
    $self: &;
    font-family: $font-family;
    flex-grow: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    cursor: pointer;
    font-size: $font-size;
    position: relative;

    &--layout-vertical {
        flex-grow: 0;
        margin-bottom: 0;
        margin-right: 20px;
        height: 100%;
        width: auto;
        display: flex;
        justify-content: center;
        #{$self}__label {
            margin-bottom: 0;
            padding:0;
        }
        #{$self}__content {
            padding: 15px;
            position: absolute;
            top: 50px;
            transform: translateX(calc(-50% + 30px));
            background-color: #fff;
            z-index: 3;
            box-shadow: 0 0 10px rgba(0,0,0,0.2);
            border-radius: $border-radius;
            overflow-y: auto;
        }
    }

    &:last-of-type {
        margin-bottom: 0;
    }

    &__label {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: $font-size-small;
        color: $text-color;
        margin-top: 0;
        padding: 5px;
    }

    &__icon {
        margin-right: 5px;
    }
}
</style>
