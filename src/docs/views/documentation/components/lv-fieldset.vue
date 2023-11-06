<template>
    <lv-heading v-space-after="0.5" :level="3">Fieldset</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A composition of form controls, labels, hints & validations messages</lv-heading>
    <lv-card v-space-after="1">
        <lv-grid>
            <lv-grid-row gap="1rem">
                <lv-grid-column :width="6">
                    <lv-fieldset legend="Username" reset-button>
                        <lv-input placeholder="Enter username" />
                        <template #hint>
                            Please enter a username
                        </template>
                        <template #invalid>
                            Oops! You did it wrong!
                        </template>
                    </lv-fieldset>
                </lv-grid-column>
                <lv-grid-column :width="6">
                    <lv-fieldset legend="Country" reset-button>
                        <lv-select />
                        <template #hint>
                            The country where you are living
                        </template>
                        <template #invalid>
                            Oops! You did it wrong!
                        </template>
                    </lv-fieldset>
                </lv-grid-column>
            </lv-grid-row>
        </lv-grid>
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="code"/>
    <component-details component="LvFieldset"></component-details>
</template>

<script>
const code = `
<lv-grid>
    <lv-grid-row gap="1rem">
        <lv-grid-column :width="6">
            <lv-fieldset legend="Username" reset-button disabled>
                <lv-input placeholder="Enter username" />
                <template #hint>
                    Please enter a username
                </template>
                <template #invalid>
                    Oops! You did it wrong!
                </template>
            </lv-fieldset>
        </lv-grid-column>
        <lv-grid-column :width="6">
            <lv-fieldset legend="Country" reset-button>
                <lv-select />
                <template #hint>
                    The country where you are living
                </template>
                <template #invalid>
                    Oops! You did it wrong!
                </template>
            </lv-fieldset>
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
