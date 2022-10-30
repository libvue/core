<template>
    <lv-heading v-space-after="0.5" :level="3">Grids</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Organise your content!</lv-heading>

    <lv-heading v-space-after="1" :level="6">Simple Grid Layout</lv-heading>

    <lv-card v-space-after="1">
        <lv-grid gap="1rem">
            <lv-grid-row gap="1rem">
                <lv-grid-column :level="6">
                    <lv-card>6</lv-card>
                </lv-grid-column>
                <lv-grid-column :level="3">
                    <lv-card>3</lv-card>
                </lv-grid-column>
                <lv-grid-column :level="3">
                    <lv-card>3</lv-card>
                </lv-grid-column>
            </lv-grid-row>
            <lv-grid-row gap="1rem">
                <lv-grid-column :level="3">
                    <lv-card>3</lv-card>
                </lv-grid-column>
                <lv-grid-column :level="4">
                    <lv-card>4</lv-card>
                </lv-grid-column>
                <lv-grid-column :level="5">
                    <lv-card>5</lv-card>
                </lv-grid-column>
            </lv-grid-row>
            <lv-grid-row gap="1rem">
                <lv-grid-column :level="2">
                    <lv-card>2</lv-card>
                </lv-grid-column>
                <lv-grid-column :level="2">
                    <lv-card>2</lv-card>
                </lv-grid-column>
                <lv-grid-column :level="2">
                    <lv-card>2</lv-card>
                </lv-grid-column>
                <lv-grid-column :level="6">
                    <lv-card>6</lv-card>
                </lv-grid-column>
            </lv-grid-row>
        </lv-grid>
    </lv-card>
    <lv-code :code="code" lang="html"/>
</template>

<script>
const code = `
<lv-grid gap="1rem">
    <lv-grid-row gap="1rem">
        <lv-grid-column :level="6">
            <lv-card>6</lv-card>
        </lv-grid-column>
        <lv-grid-column :level="3">
            <lv-card>3</lv-card>
        </lv-grid-column>
        <lv-grid-column :level="3">
            <lv-card>3</lv-card>
        </lv-grid-column>
    </lv-grid-row>
    <lv-grid-row gap="1rem">
        <lv-grid-column :level="3">
            <lv-card>3</lv-card>
        </lv-grid-column>
        <lv-grid-column :level="4">
            <lv-card>4</lv-card>
        </lv-grid-column>
        <lv-grid-column :level="5">
            <lv-card>5</lv-card>
        </lv-grid-column>
    </lv-grid-row>
    <lv-grid-row gap="1rem">
        <lv-grid-column :level="2">
            <lv-card>2</lv-card>
        </lv-grid-column>
        <lv-grid-column :level="2">
            <lv-card>2</lv-card>
        </lv-grid-column>
        <lv-grid-column :level="2">
            <lv-card>2</lv-card>
        </lv-grid-column>
        <lv-grid-column :level="6">
            <lv-card>6</lv-card>
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
