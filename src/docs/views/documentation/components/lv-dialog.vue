<template>
    <lv-heading v-space-after="0.5" :level="3">Dialog</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A non-modal or modal dialog</lv-heading>

    <lv-notice color="solid-dimmed-success" v-space-after="1" icon="accessibility">
        <lv-flex gap=".2rem">
            Using <lv-link color="currentColor" href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" target="_blank" highlight>w3.org Aria Dialog Pattern</lv-link>
        </lv-flex>
    </lv-notice>

    <lv-card v-space-after="1">
        <lv-button label="Open the dialog" @click="showDialog = true"/>
        <lv-dialog :show="showDialog" @click-backdrop="showDialog = false" :modal="false" :fullscreen="fullscreen">
            <template #header>
                <lv-heading :level="4" v-space-after="1">Make a choice</lv-heading>
            </template>
            <template #content>
                <lv-heading :level="6">Do you want to continue?</lv-heading>
                <lv-text v-space-after="0.5">Press continue to keep doing what you were doing.</lv-text>
                <lv-text v-space-after="0.5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab cum, dolorem ex explicabo inventore iure, iusto minus nulla pariatur placeat rerum voluptas. Accusantium ad adipisci amet blanditiis consequatur cumque ducimus esse est expedita facere fuga, hic incidunt nesciunt obcaecati reiciendis, rerum sapiente sit ullam, veniam veritatis! Architecto eaque ex facere harum maxime praesentium rem temporibus voluptatum! Culpa doloremque explicabo facere harum officia quidem ut voluptate. Alias aperiam eos recusandae temporibus. Ab ad aperiam asperiores cumque doloremque eaque eligendi expedita in laborum libero nam, neque non numquam perspiciatis quibusdam quisquam sapiente sint soluta voluptate voluptatem. Deserunt magni modi rerum vel.
                </lv-text>
                <lv-text v-space-after="0.5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab cum, dolorem ex explicabo inventore iure, iusto minus nulla pariatur placeat rerum voluptas. Accusantium ad adipisci amet blanditiis consequatur cumque ducimus esse est expedita facere fuga, hic incidunt nesciunt obcaecati reiciendis, rerum sapiente sit ullam, veniam veritatis! Architecto eaque ex facere harum maxime praesentium rem temporibus voluptatum! Culpa doloremque explicabo facere harum officia quidem ut voluptate. Alias aperiam eos recusandae temporibus. Ab ad aperiam asperiores cumque doloremque eaque eligendi expedita in laborum libero nam, neque non numquam perspiciatis quibusdam quisquam sapiente sint soluta voluptate voluptatem. Deserunt magni modi rerum vel.
                </lv-text>
                <lv-switch v-model="model" v-space-after="1" label="Enable something"/>
                <lv-input v-space-after="1" placeholder="Type something" />
            </template>
            <template #footer>
                <lv-flex>
                    <lv-button label="Continue" color="solid-primary" @click="showDialog = false"/>
                    <lv-button label="Cancel" color="solid-dimmed-primary" @click="showDialog = false"/>
                    <lv-button label="Toggle Fullscreen" color="solid-dimmed-primary" @click="fullscreen = !fullscreen"></lv-button>
                </lv-flex>
            </template>
        </lv-dialog>
    </lv-card>
    <code-preview v-space-after="1" :code="code" lang="html"/>
    <component-details :slots="['default', 'header', 'content', 'footer']" component="LvDialog"></component-details>
</template>

<script>
const code = `
<lv-button label="Open the dialog" @click="showDialog = true"/>
<lv-dialog :show="showDialog" @click-backdrop="showDialog = false" :modal="false" :fullscreen="fullscreen">
    <template #header>
        <lv-heading :level="4" v-space-after="1">Make a choice</lv-heading>
    </template>
    <template #content>
        <lv-heading :level="6">Do you want to continue?</lv-heading>
        <lv-text v-space-after="0.5">Press continue to keep doing what you were doing.</lv-text>
        <lv-text v-space-after="0.5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab cum, dolorem ex explicabo inventore iure, iusto minus nulla pariatur placeat rerum voluptas. Accusantium ad adipisci amet blanditiis consequatur cumque ducimus esse est expedita facere fuga, hic incidunt nesciunt obcaecati reiciendis, rerum sapiente sit ullam, veniam veritatis! Architecto eaque ex facere harum maxime praesentium rem temporibus voluptatum! Culpa doloremque explicabo facere harum officia quidem ut voluptate. Alias aperiam eos recusandae temporibus. Ab ad aperiam asperiores cumque doloremque eaque eligendi expedita in laborum libero nam, neque non numquam perspiciatis quibusdam quisquam sapiente sint soluta voluptate voluptatem. Deserunt magni modi rerum vel.
        </lv-text>
        <lv-text v-space-after="0.5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab cum, dolorem ex explicabo inventore iure, iusto minus nulla pariatur placeat rerum voluptas. Accusantium ad adipisci amet blanditiis consequatur cumque ducimus esse est expedita facere fuga, hic incidunt nesciunt obcaecati reiciendis, rerum sapiente sit ullam, veniam veritatis! Architecto eaque ex facere harum maxime praesentium rem temporibus voluptatum! Culpa doloremque explicabo facere harum officia quidem ut voluptate. Alias aperiam eos recusandae temporibus. Ab ad aperiam asperiores cumque doloremque eaque eligendi expedita in laborum libero nam, neque non numquam perspiciatis quibusdam quisquam sapiente sint soluta voluptate voluptatem. Deserunt magni modi rerum vel.
        </lv-text>
        <lv-switch v-model="model" v-space-after="1" label="Enable something"/>
        <lv-input v-space-after="1" placeholder="Type something" />
    </template>
    <template #footer>
        <lv-flex>
            <lv-button label="Continue" color="solid-primary" @click="showDialog = false"/>
            <lv-button label="Cancel" color="solid-dimmed-primary" @click="showDialog = false"/>
            <lv-button label="Toggle Fullscreen" color="solid-dimmed-primary" @click="fullscreen = !fullscreen"></lv-button>
        </lv-flex>
    </template>
</lv-dialog>
`.trim();
export default {
    data() {
        return {
            fullscreen: false,
            showDialog: false,
            code,
            model: false,
        }
    },
};
</script>
