<template>
    <lv-heading v-space-after="0.5" :level="3">Popover</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A popup shown when a button is pressed</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex>
            <lv-popover placement="right" interactive trigger="mouseenter">
                <template #reference>
                    <lv-button label="Hover me"/>
                </template>
                <template #content>
                    <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
                    <lv-flex direction="column">
                        <lv-switch label="Enable something"/>
                        <lv-button label="Or don't" color="solid-dimmed-primary"/>
                    </lv-flex>
                </template>
            </lv-popover>

            <lv-popover placement="bottom" trigger="click" interactive>
                <template #reference>
                    <lv-button label="Click me"/>
                </template>
                <template #content>
                    <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
                    <lv-flex direction="column">
                        <lv-switch label="Enable something"/>
                        <lv-button label="Create console.log" color="solid-dimmed-primary" @click="onClick"/>
                    </lv-flex>
                </template>
            </lv-popover>
        </lv-flex>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="code"/>
    <component-details component="LvPopover"></component-details>
</template>

<script>
const code = `
<lv-flex>
    <lv-popover placement="right" trigger="mouseenter">
        <template #reference>
            <lv-button label="Hover me"/>
        </template>
        <template #content>
            <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
            <lv-flex direction="column">
                <lv-switch label="Enable something"/>
                <lv-button label="Or don't" color="solid-dimmed-primary"/>
            </lv-flex>
        </template>
    </lv-popover>

    <lv-popover placement="bottom" trigger="click">
        <template #reference>
            <lv-button label="Click me"/>
        </template>
        <template #content>
            <lv-heading v-space-after="1" level="5">Do some stuff</lv-heading>
            <lv-flex direction="column">
                <lv-switch label="Enable something"/>
                <lv-button label="Or don't" color="solid-dimmed-primary"/>
            </lv-flex>
        </template>
    </lv-popover>
</lv-flex>
`.trim();
export default {
    data() {
        return {
            code,
        }
    },
    methods: {
        onClick() {
            console.log('YAYYY');
        }
    }
}
</script>
