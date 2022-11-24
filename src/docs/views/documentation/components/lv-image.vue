<template>
    <lv-heading v-space-after="0.5" :level="3">Image</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">The Image component is used to display images.</lv-heading>
    <lv-card v-space-after="1">
        <lv-grid>
            <lv-grid-row gap="1rem">
                <lv-grid-column :level="4">
                    <lv-image src="https://picsum.photos/id/56/2880/1920" caption="Picsum Photos #56"/>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-image src="https://picsum.photos/id/57/2880/1920" rounded caption="Picsum Photos #57" caption-align="left"/>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-image src="https://picsum.photos/id/58/2880/1920" caption="Picsum Photos #58" caption-align="right"/>
                </lv-grid-column>
            </lv-grid-row>
        </lv-grid>
    </lv-card>
    <lv-code v-space-after="1" lang="html" :code="code" />

    <component-details component="LvImage"></component-details>
</template>

<script>
const code = `
<lv-grid>
    <lv-grid-row gap="1rem">
        <lv-grid-column :level="4">
            <lv-image src="https://picsum.photos/id/56/2880/1920" caption="Picsum Photos #56"/>
        </lv-grid-column>
        <lv-grid-column :level="4">
            <lv-image src="https://picsum.photos/id/57/2880/1920" rounded caption="Picsum Photos #57" caption-align="left"/>
        </lv-grid-column>
        <lv-grid-column :level="4">
            <lv-image src="https://picsum.photos/id/58/2880/1920" caption="Picsum Photos #58" caption-align="right"/>
        </lv-grid-column>
    </lv-grid-row>
</lv-grid>
`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>
