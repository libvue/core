<template>
    <div class="splash">
        <div v-space-after="0.5" class="splash__logo">
            <img v-space-after="1" class="splash__logo-brand" src="/logo-splash.svg" alt="">
            <div class="splash__logo-text">Libvue</div>
        </div>
        <lv-paragraph v-space-after="2" class="splash__about">A vue component library for quickly building interfaces.</lv-paragraph>
        <lv-group>
            <lv-button color="primary" icon="book-open" @click="$router.push('install')">Documentation</lv-button>
            <lv-button color-type="outline" icon="github" @click="goToGithub">Github</lv-button>
        </lv-group>
    </div>
</template>

<script>
export default {
    methods: {
        goToGithub() {
            window.open('https://github.com/harmendv/libvue', '_blank');
        }
    },
};
</script>

<style lang="scss">
@import '../../lib/scss/variables/index';

.splash {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    max-width: 350px;
    margin: auto;
    padding-top: 150px;

    &__about {
        text-align: center;
    }
    &__logo {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        &-brand {
            margin-right: 5px;
            color: $color-primary;
            width: 160px;
        }
        &-text {
            font-size: 21px;
            font-weight: bold;
        }
    }
}
</style>
