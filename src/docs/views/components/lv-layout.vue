<template>
    <lv-heading :level="3" v-space-after="0.5">Layout</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">A simple layout component</lv-heading>

    <lv-heading :level="6" v-space-after="1">Horizontal layout</lv-heading>
    <lv-card v-space-after="1">
        <lv-layout layout="horizontal" horizontal-menu-width="100px">
            <template #logo>Logo</template>
            <template #menu>Menu</template>
            <template #content>Content</template>
        </lv-layout>
    </lv-card>

    <lv-code v-space-after="1" lang="html" :code="code" />

    <lv-heading :level="6" v-space-after="1">Vertical layout</lv-heading>
    <lv-card v-space-after="1">
        <lv-layout layout="vertical">
            <template #logo>Logo</template>
            <template #menu>Menu</template>
            <template #content>Content</template>
        </lv-layout>
    </lv-card>

    <lv-code v-space-after="1" lang="html" :code="codeVertical" />
</template>

<script>
export default {
    data() {
        return {
            code: `<lv-layout layout="horizontal" horizontal-menu-width="100px">\n  <template #logo>Logo</template>\n  <template #menu>Menu</template>\n  <template #content>Content</template>\n</lv-layout>`,
            codeVertical: `<lv-layout layout="vertical">\n  <template #logo>Logo</template>\n  <template #menu>Menu</template>\n  <template #content>Content</template>\n</lv-layout>`,
        };
    },
};
</script>

<style>
.red {
    background-color: red;
    width: 100%;
    height: 200px;
}
.green {
    background-color: green;
    width: 100%;
    height: 200px;
}
</style>