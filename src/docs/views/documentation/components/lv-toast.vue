<template>
    <lv-heading v-space-after="0.5" :level="3">Toast</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Important messages at your service</lv-heading>

    <lv-tabs :tabs="tabs" :active="activeTab" @change-tab="(v) => (activeTab = v)">
        <template #toast>
            <lv-card v-space-after="1">
                <lv-toast
                    v-space-after="1"
                    icon="save"
                    description="Monday, October 24, 2022 at 9:26 PM"
                    title="Your work is saved"
                    button="Close"
                    @click-button="onClickButton"
                />
                <lv-toast
                    icon="alert-triangle"
                    icon-color="solid-dimmed-danger"
                    title="Something went wrong"
                    button="Close"
                    button-color="outline-danger"
                    @click-button="onClickButton"
                />
            </lv-card>
            <code-preview v-space-after="1" lang="html" :code="code" />
            <component-details component="LvToast"></component-details>
        </template>
        <template #toasts>
            <lv-card v-space-after="1">
                <lv-toasts :max="3" :decay="1000" :event-bus="eventBus" />
                <lv-button color="solid-dimmed-primary" label="Add toast" icon="plus" @click="addToast" />
            </lv-card>
            <code-preview
                v-space-after="1"
                :files="toastFiles"
                :active="activeToastFile"
                @change-file="(v) => (activeToastFile = v)"
            />
            <component-details component="LvToasts"></component-details>
        </template>
    </lv-tabs>
</template>

<script>
import { eventBus } from "../../../../lib/main";

const code = `
<lv-toast
    v-space-after="1"
    icon="save"
    description="Monday, October 24, 2022 at 9:26 PM"
    title="Your work is saved"
    button="Close"
    @click-button="onClickButton"
/>
<lv-toast
    icon="alert-triangle"
    icon-color="solid-dimmed-danger"
    title="Something went wrong"
    button="Close"
    button-color="outline-danger"
    @click-button="onClickButton"
/>
`.trim();
const codeTemplate = `
<lv-toasts :max="3" :decay="1000" :event-bus="eventBus" />
<lv-button color="solid-dimmed-primary" label="Add toast" @click="addToast" />
`.trim();
const codeScript = `
import { eventBus } from "@libvue/core";

export default {
    data() {
        {
            return { eventBus }
        }
    },
    methods: {
        addToast() {
            eventBus.$emit('toast', {
                title: 'Ut enim ad minima veniam, quis nostrum exercitationem',
                description: 'Quis autem vel eum iure reprehenderit',
                button: 'Cancel',
                icon: 'save',
                iconColor: 'solid-dimmed-warning',
                buttonColor: 'solid-success',
                onClick: () => {
                    console.log('Clicking toast');
                },
                onClickButton: () => {
                    console.log('Clicking button');
                },
            });
        },
    }
}
`.trim();
export default {
    data() {
        return {
            code,
            codeTemplate,
            codeScript,
            eventBus,
            activeToastFile: 'template',
            toastFiles: [
                { id: 'template', filename: 'template', code: codeTemplate, lang: 'html' },
                { id: 'script', filename: 'script', code: codeScript, lang: 'js' },
            ],
            activeTab: 'toast',
            tabs: [
                { id: 'toast', title: 'Toast', icon: 'scaling' },
                { id: 'toasts', title: 'Toasts', icon: 'palette' },
            ],
        };
    },
    methods: {
        addToast() {
            eventBus.$emit('toast', {
                title: 'Ut enim ad minima veniam, quis nostrum exercitationem',
                description: 'Quis autem vel eum iure reprehenderit',
                button: 'Cancel',
                icon: 'save',
                iconColor: 'solid-dimmed-warning',
                buttonColor: 'solid-success',
                onClick: () => {
                    console.log('Clicking toast');
                },
                onClickButton: () => {
                    console.log('Clicking button');
                },
            });
        },
        onClickButton() {
            console.log('Clicked Button');
        },
    },
};
</script>
