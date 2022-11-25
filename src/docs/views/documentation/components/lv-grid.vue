<template>
    <lv-heading v-space-after="0.5" :level="3">Grid</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Organise your content!</lv-heading>

    <lv-heading v-space-after="1" :level="6">Simple Grid Layout</lv-heading>

    <lv-card v-space-after="1">
        <lv-grid gap="1rem">
            <lv-grid-row gap="1rem">
                <lv-grid-column :width="6">
                    <lv-card>6</lv-card>
                </lv-grid-column>
                <lv-grid-column :width="3">
                    <lv-card>3</lv-card>
                </lv-grid-column>
                <lv-grid-column :width="3">
                    <lv-card>3</lv-card>
                </lv-grid-column>
            </lv-grid-row>
            <lv-grid-row gap="1rem">
                <lv-grid-column :width="3">
                    <lv-card>3</lv-card>
                </lv-grid-column>
                <lv-grid-column :width="4">
                    <lv-card>4</lv-card>
                </lv-grid-column>
                <lv-grid-column :width="5">
                    <lv-card>5</lv-card>
                </lv-grid-column>
            </lv-grid-row>
            <lv-grid-row gap="1rem">
                <lv-grid-column :width="2">
                    <lv-card>2</lv-card>
                </lv-grid-column>
                <lv-grid-column :width="2">
                    <lv-card>2</lv-card>
                </lv-grid-column>
                <lv-grid-column :width="2">
                    <lv-card>2</lv-card>
                </lv-grid-column>
                <lv-grid-column :width="6">
                    <lv-card>6</lv-card>
                </lv-grid-column>
            </lv-grid-row>
        </lv-grid>
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html"/>

    <component-details component="LvGrid"></component-details>
</template>

<script>
const code = `
<lv-grid gap="1rem">
    <lv-grid-row gap="1rem">
        <lv-grid-column :width="6">
            <lv-card>6</lv-card>
        </lv-grid-column>
        <lv-grid-column :width="3">
            <lv-card>3</lv-card>
        </lv-grid-column>
        <lv-grid-column :width="3">
            <lv-card>3</lv-card>
        </lv-grid-column>
    </lv-grid-row>
    <lv-grid-row gap="1rem">
        <lv-grid-column :width="3">
            <lv-card>3</lv-card>
        </lv-grid-column>
        <lv-grid-column :width="4">
            <lv-card>4</lv-card>
        </lv-grid-column>
        <lv-grid-column :width="5">
            <lv-card>5</lv-card>
        </lv-grid-column>
    </lv-grid-row>
    <lv-grid-row gap="1rem">
        <lv-grid-column :width="2">
            <lv-card>2</lv-card>
        </lv-grid-column>
        <lv-grid-column :width="2">
            <lv-card>2</lv-card>
        </lv-grid-column>
        <lv-grid-column :width="2">
            <lv-card>2</lv-card>
        </lv-grid-column>
        <lv-grid-column :width="6">
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
