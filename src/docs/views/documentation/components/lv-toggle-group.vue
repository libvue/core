<template>
    <lv-heading v-space-after="0.5" :level="3">Toggle Group</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A group of toggle buttons</lv-heading>
    <lv-card v-space-after="1">
        <lv-group>
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
        </lv-group>
    </lv-card>
    <lv-code :code="code" lang="html"></lv-code>
</template>

<script>
const code = `
<lv-group>
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
</lv-group>
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
