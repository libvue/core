<template>
    <lv-heading v-space-after="0.5" :level="3">Menu</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">Some components to help you construct a menu</lv-heading>

    <lv-heading v-space-after="1" :level="6">Vertical Menu</lv-heading>
    <lv-card v-space-after="1">
        <lv-menu layout="vertical">
            <lv-menu-group label="Group">
                <lv-menu-item icon="file" label="Menu Item" />
                <lv-menu-item icon="file" label="Menu Item" />
            </lv-menu-group>
            <lv-menu-group label="Group">
                <lv-menu-list icon="boxes" label="Menu List">
                    <lv-menu-item label="Menu Item" />
                    <lv-menu-item label="Menu Item" />
                    <lv-menu-item label="Menu Item" />
                    <lv-menu-item label="Menu Item" />
                </lv-menu-list>
            </lv-menu-group>
        </lv-menu>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="codeVertical" />

    <lv-heading v-space-after="1" :level="6">Horizontal Menu</lv-heading>
    <lv-card v-space-after="1">
        <lv-menu layout="horizontal">
            <lv-menu-group label="Group">
                <lv-menu-item icon="file" label="Menu Item" />
                <lv-menu-item icon="file" label="Menu Item" />
            </lv-menu-group>
            <lv-menu-group label="Group">
                <lv-menu-list icon="boxes" label="Menu List">
                    <lv-menu-item label="Menu Item" />
                    <lv-menu-item label="Menu Item" />
                    <lv-menu-item label="Menu Item" />
                    <lv-menu-item label="Menu Item" />
                </lv-menu-list>
            </lv-menu-group>
        </lv-menu>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />

    <lv-notice v-space-after="1" icon="lightbulb"
        >Setting the layout on the LvLayout will be automatically detected by the LvMenu</lv-notice
    >
</template>

<script>
export default {
    data() {
        return {
            codeVertical: `<lv-menu layout="vertical">\n  <lv-menu-group label="Group">\n    <lv-menu-item icon="file-alt" label="Menu Item" />\n    <lv-menu-item icon="file-alt" label="Menu Item" />\n  </lv-menu-group>\n  <lv-menu-group label="Group">\n    <lv-menu-list icon="layer-group" label="Menu List">\n      <lv-menu-item label="Menu Item"/>\n      <lv-menu-item label="Menu Item"/>\n      <lv-menu-item label="Menu Item" />\n      <lv-menu-item label="Menu Item" />\n    </lv-menu-list>\n  </lv-menu-group>\n</lv-menu>`,
            code: `<lv-menu layout="horizontal">\n  <lv-menu-group label="Group">\n    <lv-menu-item icon="file-alt" label="Menu Item" />\n    <lv-menu-item icon="file-alt" label="Menu Item" />\n  </lv-menu-group>\n  <lv-menu-group label="Group">\n    <lv-menu-list icon="layer-group" label="Menu List">\n      <lv-menu-item label="Menu Item"/>\n      <lv-menu-item label="Menu Item"/>\n      <lv-menu-item label="Menu Item" />\n      <lv-menu-item label="Menu Item" />\n    </lv-menu-list>\n  </lv-menu-group>\n</lv-menu>`,
        };
    },
};
</script>
