<template>
    <div class="splash">
        <div class="splash__logo">
            <lv-icon name="vuejs-alt" class="splash__logo-icon" :size="28" />
            <div class="splash__logo-text">Libvue</div>
        </div>
        <lv-paragraph class="splash__about"> Yet another opinionated vue framework. </lv-paragraph>
        <lv-group>
            <lv-button type="primary" @click="$router.push('install')" icon="book-open">Documentation</lv-button>
            <lv-button type="ghost" @click="$router.push('install')" icon="github">Github</lv-button>
        </lv-group>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.splash {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    max-width: 400px;
    margin: auto;
    &__about {
        margin-bottom: 2rem;
        text-align: center;
    }
    &__logo {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        &-icon {
            color: #ff2e77;
            margin-right: 5px;
        }
        &-text {
            font-size: 21px;
            font-weight: bold;
        }
    }
}
</style>
