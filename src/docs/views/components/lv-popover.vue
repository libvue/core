<template>
    <lv-heading v-space-after="0.5" :level="3">Popover</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A popup shown when a button is pressed</lv-heading>
    <lv-card v-space-after="1">
        <lv-group>
            <lv-popover placement="right" trigger="hover">
                <template #trigger>
                    <lv-button label="Right"/>
                </template>
                <template #content>
                    <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
                    <lv-group direction="column">
                        <lv-switch label="Enable something"/>
                        <lv-button label="Or don't" color="primary"/>
                    </lv-group>
                </template>
            </lv-popover>

            <lv-popover placement="bottom">
                <template #trigger>
                    <lv-button label="Bottom"/>
                </template>
                <template #content>
                    <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
                    <lv-group direction="column">
                        <lv-switch label="Enable something"/>
                        <lv-button label="Or don't" color="primary"/>
                    </lv-group>
                </template>
            </lv-popover>

        </lv-group>
    </lv-card>
    <lv-code lang="html" :code="code"/>
</template>

<script>
const code = `
<lv-popover placement="right" trigger="hover">
    <template #trigger>
        <lv-button label="Right"/>
    </template>
    <template #content>
        <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
        <lv-group direction="column">
            <lv-switch label="Enable something"/>
            <lv-button label="Or don't" color="primary"/>
        </lv-group>
    </template>
</lv-popover>

<lv-popover placement="bottom">
    <template #trigger>
        <lv-button label="Bottom"/>
    </template>
    <template #content>
        <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
        <lv-group direction="column">
            <lv-switch label="Enable something"/>
            <lv-button label="Or don't" color="primary"/>
        </lv-group>
    </template>
</lv-popover>
`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>
