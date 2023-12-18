<template>
    <lv-heading v-space-after="0.5" :level="3">Hero</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A nice little wrapper around your content</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)" v-space-after="1">
        <template #left>
            <lv-card v-space-after="1">
                <lv-hero align="left" title="This is a hero component" description="This is the description of the hero component">
                    <template #image>
                        <lv-image src="https://picsum.photos/id/56/2880/1920" width="220px" rounded/>
                    </template>
                    <template #buttons>
                        <lv-button label="Call to action" color="solid-primary"/>
                        <lv-button label="Alternative action" color="solid-dimmed-primary"/>
                    </template>
                </lv-hero>
            </lv-card>
            <code-preview v-space-after="1" :code="codeLeft" lang="html"/>
        </template>
        <template #center>
            <lv-card v-space-after="1">
                <lv-hero title="This is a hero component" description="This is the description of the hero component">
                    <template #image>
                        <lv-image src="https://picsum.photos/id/56/2880/1920" width="220px" rounded/>
                    </template>
                    <template #buttons>
                        <lv-button label="Call to action" color="solid-primary"/>
                        <lv-button label="Alternative action" color="solid-dimmed-primary"/>
                    </template>
                </lv-hero>
            </lv-card>
            <code-preview v-space-after="1" :code="codeCenter" lang="html"/>
        </template>
        <template #right>
            <lv-card v-space-after="1">
                <lv-hero align="right" title="This is a hero component" description="This is the description of the hero component">
                    <template #image>
                        <lv-image src="https://picsum.photos/id/56/2880/1920" width="220px" rounded/>
                    </template>
                    <template #buttons>
                        <lv-button label="Call to action" color="solid-primary"/>
                        <lv-button label="Alternative action" color="solid-dimmed-primary"/>
                    </template>
                </lv-hero>
            </lv-card>
            <code-preview v-space-after="1" :code="codeRight" lang="html"/>
        </template>
    </lv-tabs>

    <component-details component="LvHero" :slots="['image', 'buttons']"></component-details>
</template>

<script>
const codeLeft = `
<lv-card>
    <lv-hero align="left" title="This is a hero component" description="This is the description of the hero component">
        <template #image>
            <lv-image src="https://picsum.photos/id/56/2880/1920" width="220px" rounded/>
        </template>
        <template #buttons>
            <lv-button label="Call to action" color="solid-primary"/>
            <lv-button label="Alternative action" color="solid-dimmed-primary"/>
        </template>
    </lv-hero>
</lv-card>
`.trim();

const codeCenter = `
<lv-card>
    <lv-hero title="This is a hero component" description="This is the description of the hero component">
        <template #image>
            <lv-image src="https://picsum.photos/id/56/2880/1920" width="220px" rounded/>
        </template>
        <template #buttons>
            <lv-button label="Call to action" color="solid-primary"/>
            <lv-button label="Alternative action" color="solid-dimmed-primary"/>
        </template>
    </lv-hero>
</lv-card>
`.trim();

const codeRight = `
<lv-card>
    <lv-hero align="right" title="This is a hero component" description="This is the description of the hero component">
        <template #image>
            <lv-image src="https://picsum.photos/id/56/2880/1920" width="220px" rounded/>
        </template>
        <template #buttons>
            <lv-button label="Call to action" color="solid-primary"/>
            <lv-button label="Alternative action" color="solid-dimmed-primary"/>
        </template>
    </lv-hero>
</lv-card>
`.trim();
export default {
    data() {
        return {
            codeLeft,
            codeCenter,
            codeRight,
            activeTab: 'left',
            tabs: [
                { id: 'left', title: 'Left' },
                { id: 'center', title: 'Center' },
                { id: 'right', title: 'Right' },
            ],
        };
    },
};
</script>
