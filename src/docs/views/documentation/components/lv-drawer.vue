<template>
    <lv-heading v-space-after="0.5" :level="3">Drawer</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Some kind of dialog drawn from a side</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex>
            <lv-button label="Left" @click="onClickDrawerLeft"/>
            <lv-button label="Right" @click="onClickDrawerRight"/>
            <lv-button label="Top" @click="onClickDrawerTop"/>
            <lv-button label="Bottom" @click="onClickDrawerBottom"/>

            <lv-drawer :placement="placement" :show="showDrawer" @click-backdrop="showDrawer = false">
                <lv-input placeholder="Enter something" v-space-after="1"/>
                <lv-flex fill style="margin-top: auto;">
                    <lv-button label="Save" color="solid-primary" @click="showDrawer = false"/>
                    <lv-button label="Cancel" color="solid-dimmed-primary" @click="showDrawer = false"/>
                </lv-flex>
            </lv-drawer>
        </lv-flex>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="code"/>
    <component-details component="LvDrawer"></component-details>
</template>

<script>
const code = `
<lv-button label="Left" @click="onClickDrawerLeft"/>
<lv-button label="Right" @click="onClickDrawerRight"/>
<lv-button label="Top" @click="onClickDrawerTop"/>
<lv-button label="Bottom" @click="onClickDrawerBottom"/>

<lv-drawer :placement="placement" :show="showDrawer" @click-backdrop="showDrawer = false">
    <lv-input placeholder="Enter something" v-space-after="1"/>
    <lv-flex fill style="margin-top: auto;">
        <lv-button label="Save" color="solid-primary"/>
        <lv-button label="Cancel" color="solid-dimmed-primary"/>
    </lv-flex>
</lv-drawer>
`.trim();
export default {
    data() {
        return {
            code,
            showDrawer: false,
            placement: 'left',
        }
    },
    methods: {
        onClickDrawerLeft() {
            this.placement = 'left';
            this.showDrawer = true;
        },
        onClickDrawerRight() {
            this.placement = 'right';
            this.showDrawer = true;
        },
        onClickDrawerTop() {
            this.placement = 'top';
            this.showDrawer = true;
        },
        onClickDrawerBottom() {
            this.placement = 'bottom';
            this.showDrawer = true;
        },
    }
}
</script>
