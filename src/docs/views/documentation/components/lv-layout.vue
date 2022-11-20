<template>
    <lv-heading v-space-after="0.5" :level="3">Layout</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple layout component</lv-heading>

    <lv-card v-space-after="1">
        <lv-layout>
            <template #header>
                <div class="filler">Sticky Header</div>
            </template>
            <template #sidebar>
                <div class="filler">Sidebar</div>
            </template>
            <template #main>
                <div class="filler">Main</div>
            </template>
        </lv-layout>
    </lv-card>

    <lv-code v-space-after="1" lang="html" :code="code" />
    <component-details component="LvLayout"></component-details>
</template>

<script>
const code = `
<lv-layout>
    <template #header>
        <div class="filler">Sticky Header</div>
    </template>
    <template #sidebar>
        <div class="filler">Sidebar</div>
    </template>
    <template #main>
        <div class="filler">Main</div>
    </template>
</lv-layout>
`.trim();
export default {
    data() {
        return {
            code,
        };
    },
};
</script>

<style lang="scss">
.filler {
    background: var(--color-primary-dimmed);
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 2rem;
    box-sizing: border-box;
    border-radius: 3px;
    color: var(--color-primary);
}
</style>
