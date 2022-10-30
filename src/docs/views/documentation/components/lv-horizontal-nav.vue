<template>
    <lv-heading v-space-after="0.5" :level="3">Horizontal Navigation</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Some components to help you construct a vertical Menu</lv-heading>

    <lv-card v-space-after="1">
        <lv-group gap="0.5rem">
            <lv-horizontal-nav-item label="Documentation" v-space-after="1">
                <lv-horizontal-nav-group label="Getting Started" v-space-after=".5">
                    <lv-horizontal-nav-item label="Install" v-space-after=".5"/>
                    <lv-horizontal-nav-item label="Uninstall" />
                </lv-horizontal-nav-group>
                <lv-horizontal-nav-group label="About us">
                    <lv-horizontal-nav-item label="Meet the team" v-space-after=".5"/>
                    <lv-horizontal-nav-item label="Jobs" />
                </lv-horizontal-nav-group>
            </lv-horizontal-nav-item>
            <lv-horizontal-nav-item label="Extensions" v-space-after="1"/>
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />
</template>

<script>
const code = `
<lv-group>
    <lv-horizontal-nav-item label="Documentation" v-space-after="1">
        <lv-horizontal-nav-item label="Install" v-space-after=".5"/>
        <lv-horizontal-nav-item label="Layout" />
    </lv-horizontal-nav-item>
    <lv-horizontal-nav-item label="Extensions" v-space-after="1"/>
</lv-group>
`.trim();
export default {
    data() {
        return {
            code
        };
    },
};
</script>
