<template>
    <div class="splash">
        <div class="splash__logo" v-space-after="0.5">
            <img class="splash__logo-brand" src="/logo-indented.svg" v-space-after="2" alt="">
            <div class="splash__logo-text">Libvue</div>
        </div>
        <lv-paragraph class="splash__about" v-space-after="2"> Yet another opinionated vue framework. </lv-paragraph>
        <lv-group>
            <lv-button type="primary" @click="$router.push('install')" icon="book-open">Documentation</lv-button>
            <lv-button type="ghost" @click="goToGithub" icon="github">Github</lv-button>
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
@import 'src/lib/scss/variables';

.splash {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    max-width: 400px;
    margin: auto;
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
            width: 200px;
        }
        &-text {
            font-size: 21px;
            font-weight: bold;
        }
    }
}
</style>
