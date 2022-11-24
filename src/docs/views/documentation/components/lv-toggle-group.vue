<template>
    <lv-heading v-space-after="0.5" :level="3">Toggle Group</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A group of toggle buttons</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex>
            <lv-toggle-group>
                <lv-toggle v-model="pressedAlignLeft">
                    <lv-icon name="align-left"/>
                </lv-toggle>
                <lv-toggle v-model="pressedAlignCenter">
                    <lv-icon name="align-center"/>
                </lv-toggle>
                <lv-toggle v-model="pressedAlignRight">
                    <lv-icon name="align-right"/>
                </lv-toggle>
            </lv-toggle-group>
            <lv-toggle-group>
                <lv-toggle v-model="pressedItalic">
                    <lv-icon name="italic"/>
                </lv-toggle>
                <lv-toggle v-model="pressedBold">
                    <lv-icon name="bold"/>
                </lv-toggle>
                <lv-toggle v-model="pressedUnderline">
                    <lv-icon name="link"/>
                </lv-toggle>
            </lv-toggle-group>
        </lv-flex>
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html"></lv-code>
    <component-details component="LvToggleGroup"></component-details>
</template>

<script>
const code = `
<lv-flex>
    <lv-toggle-group>
        <lv-toggle v-model="pressedAlignLeft">
            <lv-icon name="align-left"/>
        </lv-toggle>
        <lv-toggle v-model="pressedAlignCenter">
            <lv-icon name="align-center"/>
        </lv-toggle>
        <lv-toggle v-model="pressedAlignRight">
            <lv-icon name="align-right"/>
        </lv-toggle>
    </lv-toggle-group>
    <lv-toggle-group>
        <lv-toggle v-model="pressedItalic">
            <lv-icon name="italic"/>
        </lv-toggle>
        <lv-toggle v-model="pressedBold">
            <lv-icon name="bold"/>
        </lv-toggle>
        <lv-toggle v-model="pressedUnderline">
            <lv-icon name="link"/>
        </lv-toggle>
    </lv-toggle-group>
</lv-flex>
`.trim();
export default {
    data() {
        return {
            code,
            pressedItalic: false,
            pressedAlign: false,
            pressedAlignLeft: false,
            pressedAlignCenter: false,
            pressedAlignRight: false,
            pressedBold: false,
            pressedUnderline: false,
        }
    },
}
</script>
