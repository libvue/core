<template>
    <lv-heading v-space-after="0.5" :level="3">Popover</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A popup shown when a button is pressed</lv-heading>
    <lv-card v-space-after="1">
        <lv-group>
            <lv-popover placement="right" trigger="mouseenter">
                <template #reference>
                    <lv-button label="Hover me"/>
                </template>
                <template #content>
                    <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
                    <lv-group direction="column">
                        <lv-switch label="Enable something"/>
                        <lv-button label="Or don't" color="solid-dimmed-primary"/>
                    </lv-group>
                </template>
            </lv-popover>

            <lv-popover placement="bottom" trigger="click" interactive>
                <template #reference>
                    <lv-button label="Click me"/>
                </template>
                <template #content>
                    <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
                    <lv-group direction="column">
                        <lv-switch label="Enable something"/>
                        <lv-button label="Or don't" color="solid-dimmed-primary"/>
                    </lv-group>
                </template>
            </lv-popover>
        </lv-group>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code"/>
    <component-details component="LvPopover"></component-details>
</template>

<script>
const code = `
<lv-group>
    <lv-popover placement="right" trigger="mouseenter">
        <template #reference>
            <lv-button label="Hover me"/>
        </template>
        <template #content>
            <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
            <lv-group direction="column">
                <lv-switch label="Enable something"/>
                <lv-button label="Or don't" color="solid-dimmed-primary"/>
            </lv-group>
        </template>
    </lv-popover>

    <lv-popover placement="bottom" trigger="click">
        <template #reference>
            <lv-button label="Click me"/>
        </template>
        <template #content>
            <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
            <lv-group direction="column">
                <lv-switch label="Enable something"/>
                <lv-button label="Or don't" color="solid-dimmed-primary"/>
            </lv-group>
        </template>
    </lv-popover>
</lv-group>
`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>
