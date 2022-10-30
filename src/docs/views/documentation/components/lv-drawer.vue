<template>
    <lv-heading v-space-after="0.5" :level="3">Drawer</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Some kind of dialog drawn from a side</lv-heading>
    <lv-card v-space-after="1">
        <lv-group>
            <lv-button label="Left" @click="onClickDrawerLeft"/>
            <lv-button label="Right" @click="onClickDrawerRight"/>
            <lv-button label="Top" @click="onClickDrawerTop"/>
            <lv-button label="Bottom" @click="onClickDrawerBottom"/>

            <lv-drawer :placement="placement" :show="showDrawer" @click-overlay="showDrawer = false">
                <lv-group direction="column">
                    <lv-button label="Action one"/>
                    <lv-button label="Action Two"/>
                    <lv-button label="Action Three"/>
                    <lv-button label="Action Four"/>
                </lv-group>
            </lv-drawer>
        </lv-group>
    </lv-card>

    <lv-code lang="html" :code="code"/>
</template>

<script>
const code = `
<lv-button label="Left" @click="onClickDrawerLeft"/>
<lv-button label="Right" @click="onClickDrawerRight"/>
<lv-button label="Top" @click="onClickDrawerTop"/>
<lv-button label="Bottom" @click="onClickDrawerBottom"/>

<lv-drawer :placement="placement" :show="showDrawer" @click-overlay="showDrawer = false">
<lv-group direction="column">
    <lv-button label="Action one"/>
    <lv-button label="Action Two"/>
    <lv-button label="Action Three"/>
    <lv-button label="Action Four"/>
</lv-group>
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
