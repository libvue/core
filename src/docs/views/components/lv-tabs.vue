<template>
    <lv-group>
        <lv-heading :level="3" v-space-after="0.5">Tabs</lv-heading>
        <lv-heading sub :level="6" v-space-after="1">Tab it like it's hot</lv-heading>
        <lv-tabs :tabs="tabs" :active="activeTab" @change="(v) => activeTab = v">
            <template #one="{ tab }">
                {{ tab.title }}
            </template>
            <template #two="{ tab }">
                {{ tab.title }}
            </template>
        </lv-tabs>
    </lv-group>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'one',
            tabs: [
                { id: 'one', title: 'Tab one' },
                { id: 'two', title: 'Tab two' }
            ]
        }
    }
}
</script>
