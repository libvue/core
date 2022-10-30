<template>
    <div class="splash">

        <lv-hero title="Libvue" description="An extendable collection of Vue components to quickly scaffold interfaces." v-space-after="4">
            <template #buttons>
                <lv-button color="solid-primary" icon="book-open" @click="$router.push('install')">Documentation</lv-button>
                <lv-button color="solid-dimmed-primary" icon="github" @click="goToGithub">Github</lv-button>
            </template>
        </lv-hero>

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
.splash {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 100%;
    margin: auto;
    padding-top: 100px;
}
</style>
