<template>
    <div class="lv-slider" :class="classNames">
        <div class="lv-slider__track">
            <div ref="track" class="lv-slider__track-limits">
                <div
                    class="lv-slider__indicator"
                    :style="{ left: 0, right: 100 - indicatorRight + '%' }"
                />
                <div
                    class="lv-slider__thumb lv-slider__thumb"
                    :style="{ left: thumbPosition + '%' }"
                    @mousedown.prevent="onThumbMouseDown"
                    @touchstart="onThumbTouchStart"
                />
            </div>
        </div>
        <div class="lv-slider__amounts">
            <div class="lv-slider__amount lv-slider__amount--primary">
                <lv-icon v-if="loading" class="lv-slider__loader" :size="12" name="loader-2" />
                <template v-else>
                    {{ min.toFixed(decimals) }}
                </template>
            </div>
            <div class="lv-slider__amount lv-slider__amount--secondary">
                <lv-icon v-if="loading" class="lv-slider__loader" :size="12" name="loader-2" />
                <template v-else>
                    {{ max.toFixed(decimals) }}
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { useThrottleFn } from '@vueuse/core';

export default {
    props: {
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        modelValue: {
            type: Number,
            default: 0,
        },
        decimals: {
            type: Number,
            default: 0,
            validator(value) {
                return value >= 0;
            },
        },
        step: {
            type: Number,
            default: 1,
            validator(value) {
                return value > 0;
            },
        },
        invalid: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            trackX: 0,
            trackWidth: 0,
            thumbPosition: 0,
        };
    },
    computed: {
        classNames() {
            return {
                'lv-slider--invalid': this.invalid,
                'lv-slider--disabled': this.disabled,
                'lv-slider--loading': this.loading,
            };
        },
        parsedValue() {
            // Calculate the secondary value based on the position of the slider
            const value = ((this.max - this.min) / 100) * this.thumbPosition + this.min;
            // Return the valuem, rounded to set number of decimals
            return parseFloat(value.toFixed(this.decimals));
        },
        indicatorRight() {
            // Get the indicator left position from the thumb that is currently on the right side
            return this.thumbPosition;
        },
        stepPercentage() {
            // Convert the step value to a percentage based value
            return (100 / (this.max - this.min)) * this.step;
        },
    },
    watch: {
        modelValue: {
            handler(value) {
                this.thumbPosition = value ? this.getPositionFromValue(value) : 100;
            },
            deep: true,
            immediate: true,
        },
    },
    mounted() {
        // Cache dimensions and positions
        this.cacheDimensions();
        // Recalculate track X and Y positions on window resize
        window.addEventListener('resize', this.onWindowResize);
        window.dispatchEvent(new Event('resize'));
    },
    created() {
        // Throttle mousemove events
        this.onThumbMouseMoveThrottled = useThrottleFn(this.onThumbMouseMove, 25, false);
        // Throttle touchmove events
        this.onThumbTouchMoveThrottled = useThrottleFn(this.onThumbTouchMove, 25, false);
    },
    methods: {
        /**
         * Mouse Events handlers
         */
        onThumbMouseDown() {
            if (this.disabled || this.loading) return;

            // Cache dimensions and positions values needed for the calculation of the thumb positions
            this.cacheDimensions();
            // Attach secondary mousemove and general mouseup listener
            document.addEventListener('mousemove', this.onThumbMouseMoveThrottled, false);
            document.addEventListener('mouseup', this.onMouseUp, false);
        },
        onThumbMouseMove(event) {
            // Calculate position of secondary thumb based on the mouse X coordinate
            this.thumbPosition = this.getRelativePosition(event.pageX);
        },
        onMouseUp() {
            // Remove all event listeners
            document.removeEventListener('mousemove', this.onThumbMouseMoveThrottled, false);
            document.removeEventListener('mouseup', this.onMouseUp, false);
            // Emit input event
            this.emitInputEvent();
        },
        /**
         * Touch Events handlers
         */
        onThumbTouchStart() {
            if (this.disabled) return;
            // Cache dimensions and positions values needed for the calculation of the thumb positions
            this.cacheDimensions();
            // Attach secondary touchmove and general touchend listener
            document.addEventListener('touchmove', this.onThumbTouchMoveThrottled);
            document.addEventListener('touchend', this.onTouchEnd);
        },
        onThumbTouchMove(event) {
            event.preventDefault();
            // Calculate position of secondary thumb based on the fingers X coordinate
            this.thumbPosition = this.getRelativePosition(event.touches[0].clientX);
        },
        onTouchEnd() {
            // Remove all event listeners
            document.removeEventListener('touchmove', this.onThumbTouchMoveThrottled);
            document.removeEventListener('touchend', this.onTouchEnd);
            // Emit input event
            this.emitInputEvent();
        },
        /**
         * Emit input event
         */
        emitInputEvent() {
            // Emit input event with the from and to value
            this.$emit('update:modelValue', this.parsedValue);
        },
        /**
         * Caches values needed for the calculation of the thumb positions
         */
        cacheDimensions() {
            this.trackWidth = this.$refs.track.offsetWidth;
            this.trackX = this.$refs.track.getBoundingClientRect().left;
        },
        /**
         * Converts a value to a percentage based position
         */
        getPositionFromValue(value) {
            return (100 / (this.max - this.min)) * value - (this.min / (this.max - this.min)) * 100;
        },
        /**
         * Converts an absolute x coordinate to a percentage based x coordinate relative to the track
         */
        getRelativePosition(x) {
            // Calculate the pixel position of the cursor relative to the track
            const relativeX = x - this.trackX;
            // Calculate the percentage based position of the cursor based on the width of the track
            let position = (relativeX / this.trackWidth) * 100;
            // Check if the value should be snapped to specific step size
            if (this.step) {
                // Snap to to specific step size (using a percentage based step value)
                position = Math.round(position / this.stepPercentage) * this.stepPercentage;
            }
            // Limit the percentage value between 0% and 100%
            position = Math.min(Math.max(position, 0), 100);
            // Return the percentage value
            return position;
        },
    },
};
</script>

<style lang="scss">
@import '../../scss/variables';

.lv-slider {
    $self: &;

    position: relative;
    align-items: center;
    box-sizing: border-box;
    padding-top: 9px;
    height: 40px;

    &--disabled {
        #{$self}__thumb {
            cursor: default;

            &::after {
                background-color: $border-color;
            }
        }

        #{$self}__amount {
            color: $text-color-dimmed;
        }

        #{$self}__indicator {
            background-color: darken($border-color, 20);
        }
    }

    &--loading {
        #{$self}__thumb {
            cursor: default;

            &::after {
                background-color: $border-color;
            }
        }

        #{$self}__amount {
            color: $text-color-dimmed;
        }

        #{$self}__indicator {
            background-color: darken($border-color, 20);
        }
    }

    &--invalid {
        #{$self}__amount {
            color: $color-danger;
        }

        #{$self}__indicator {
            background-color: $color-danger;
        }
    }

    &__thumb {
        display: flex;
        position: absolute;
        top: -15px;
        left: -10px;
        flex-direction: row;
        justify-content: center;
        transform: translateX(-50%);
        cursor: pointer;
        padding: 10px;

        &::after {
            transition: background-color 0.2s;
            margin-top: -1px;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
            border: 1px solid #cacaca;
            border-radius: 100%;
            background-color: $background-color;
            width: 14px;
            height: 14px;
            content: '';
        }
    }

    &__amounts {
        display: flex;
        margin-top: 8px;
    }

    &__amount {
        position: relative;
        color: $text-color;
        font-weight: bold;
        font-size: 12px;

        &--secondary {
            margin-left: auto;
        }
    }

    &__indicator {
        position: absolute;
        top: 0;
        bottom: 0;
        transition: background-color 0.2s;
        background-color: $color-primary;
        height: 4px;
        border-radius: 4px;
        margin: 0 -7px;
    }

    &__track {
        position: relative;
        transition: background-color 0.2s;
        border-radius: 4px;
        padding: 0 7px;
        background-color: $border-color;
        height: 4px;
    }

    &__track-limits {
        position: relative;
    }

    &__loader {
        animation: rotate-cw 1s infinite linear;
    }
}
</style>
