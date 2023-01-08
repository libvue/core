<template>
    <lv-heading v-space-after="0.5" :level="3">Layout</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A simple layout component</lv-heading>

    <lv-card v-space-after="1">
        <lv-layout class="fixed-z-index" :sticky-header="false" :sticky-sub-header="false">
            <template #header>
                <lv-header>
                    <template #branding>Logo</template>
                    <template #navigation>Navigation</template>
                </lv-header>
            </template>
            <template #sub-header>
                <lv-sub-header>
                    Subheader
                </lv-sub-header>
            </template>
            <template #sidebar>
                Sidebar
            </template>
            <template #main>
                Content
            </template>
        </lv-layout>
    </lv-card>

    <lv-code v-space-after="1" lang="html" :code="code" />
    <component-details component="LvLayout"></component-details>
</template>

<script>
const code = `
<lv-layout :sticky-header="false" :sticky-sub-header="false">
    <template #header>
        <lv-header>
            <template #branding>Logo</template>
            <template #navigation>Navigation</template>
        </lv-header>
    </template>
    <template #sub-header>
        <lv-sub-header>
            Subheader
        </lv-sub-header>
    </template>
    <template #sidebar>
        Sidebar
    </template>
    <template #main>
        Content
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

<style lang="scss">
.fixed-z-index {
    .lv-layout__header {
        z-index: 0;
    }
}
</style>
