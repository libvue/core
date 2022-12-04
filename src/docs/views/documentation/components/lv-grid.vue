<template>
    <lv-heading v-space-after="0.5" :level="3">Grid</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Responsive grid</lv-heading>

    <lv-card v-space-after="1">
        <lv-grid gap="1rem">
            <lv-grid-row gap="1rem">
                <lv-grid-column :width="3" :md="4" :sm="12">
                    <lv-card>6</lv-card>
                </lv-grid-column>
                <lv-grid-column :width="3" :md="4" :sm="12">
                    <lv-card>3</lv-card>
                </lv-grid-column>
                <lv-grid-column :width="6" :md="4" :sm="12">
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
        </lv-grid>
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html" />

    <component-details v-space-after="1" title="Grid" component="LvGrid"></component-details>

    <component-details
        v-space-after="1"
        title="Grid Row"
        component-path="LvGrid/LvGridRow"
    ></component-details>

    <component-details
        v-space-after="1"
        title="Grid Column"
        component-path="LvGrid/LvGridColumn"
    ></component-details>
</template>

<script>
const code = `
<lv-grid gap="1rem">
    <lv-grid-row gap="1rem">
        <lv-grid-column :width="3" :md="4" :sm="12">
            <lv-card>6</lv-card>
        </lv-grid-column>
        <lv-grid-column :width="3" :md="4" :sm="12">
            <lv-card>3</lv-card>
        </lv-grid-column>
        <lv-grid-column :width="6" :md="4" :sm="12">
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
</lv-grid>
`.trim();
export default {
    data() {
        return {
            code,
        };
    },
};
</script>
