<template>
    <div class="splash">
        <lv-hero
            v-space-after="4"
            title="Libvue"
            description="An extendable collection of Vue components to quickly scaffold interfaces."
        >
            <template #buttons>
                <lv-button color="solid-primary" icon="book-open" @click="$router.push('/docs/install')">
                    Documentation
                </lv-button>
                <lv-button color="outline-primary" icon="github" @click="goToGithub">Github</lv-button>
            </template>
        </lv-hero>
    </div>
</template>

<script>
export default {
    methods: {
        goToGithub() {
            window.open('https://github.com/harmendv/libvue', '_blank');
        },
    },
};
</script>

<style lang="scss">
.splash {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: auto;
    padding-top: 100px;
    height: 100%;
}
</style>
