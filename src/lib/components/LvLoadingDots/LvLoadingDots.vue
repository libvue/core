<template>
    <div class="lv-loading-dots">
        <div class="lv-loading-dots__dot"></div>
        <div class="lv-loading-dots__dot"></div>
        <div class="lv-loading-dots__dot"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import '../../scss/animations/animations';

.lv-loading-dots {
    display: flex;
    gap: 0.25rem;
    &__dot {
        width: .5rem;
        height: .5rem;
        border-radius: 100%;
        background-color: var(--text-color);
        animation: fade-in-out 2s infinite linear;
        &:nth-of-type(2) {
            animation-delay: 0.3s;
        }
        &:nth-of-type(3) {
            animation-delay: 0.6s;
        }
    }
}
</style>
