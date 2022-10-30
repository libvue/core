<template>
    <lv-heading v-space-after="0.5" :level="3">Header</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A predesigned header</lv-heading>

    <lv-card v-space-after="1">
        <lv-header>
            <template #branding>
                <img v-space-after="0.5" class="logo" src="logo.svg" />
            </template>
            <template #search>
                <lv-input placeholder="Search docs" icon="search"/>
            </template>
            <template #extra>
                <lv-button icon="github" color="light-default" />
            </template>
        </lv-header>
    </lv-card>

    <lv-code v-space-after="1" lang="html" :code="code" />
</template>

<script>
const code = `
<lv-header>
    <template #branding>
        <img v-space-after="0.5" class="logo" src="logo.svg" />
    </template>
    <template #search>
        <lv-input placeholder="Search docs" icon="search"/>
    </template>
    <template #extra>
        <lv-button icon="github" color="light-default" />
    </template>
</lv-header>
`.trim();
export default {
    data() {
        return {
            code,
        };
    },
};
</script>

<style>
.filler {
    background: linear-gradient(45deg, #eeecff, #f6f5ff);
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 2rem;
    box-sizing: border-box;
    border-radius: 3px;
    color: #4637f3;
}
</style>
