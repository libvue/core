<template>
    <lv-heading v-space-after="0.5" :level="3">Tabs</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Tab it like it's hot</lv-heading>
    <lv-card v-space-after="1">
        <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
            <template #one="{ tab }">
                {{ tab.title }}
            </template>
            <template #two="{ tab }">
                {{ tab.title }}
            </template>
        </lv-tabs>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="codeTemplate" />
    <code-preview v-space-after="1" lang="javascript" :code="codeScript" />
    <component-details component="LvTabs"></component-details>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'one',
            tabs: [
                { id: 'one', title: 'Tab one' },
                { id: 'two', title: 'Tab two' },
                { id: 'three', title: 'Tab three', disabled: true },
            ],
            codeTemplate: `<lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => activeTab = v">\n  <template #one="{ tab }">\n    {{ tab.title }}\n  </template>\n  <template #two="{ tab }">\n    {{ tab.title }}\n  </template>\n</lv-tabs>`,
            codeScript: `data() {\n  return {\n    activeTab: 'one',\n    tabs: [\n      { id: 'one', title: 'Tab one' },\n      { id: 'two', title: 'Tab two' },\n      { id: 'three', title: 'Tab three', disabled: true, }\n    ],  \n  }\n}`,
        };
    },
};
</script>
