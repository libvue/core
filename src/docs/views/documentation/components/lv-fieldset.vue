<template>
    <lv-heading v-space-after="0.5" :level="3">Fieldset</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A composition of form controls, labels, hints & validations messages</lv-heading>
    <lv-card v-space-after="1">
        <lv-grid>
            <lv-grid-row gap="1rem">
                <lv-grid-column :level="6">
                    <lv-fieldset label="Username" label-for="input-username" reset-button>
                        <lv-input placeholder="Enter username" id="input-username"/>
                        <template #hint>
                            Please enter a username
                        </template>
                        <template #invalid>
                            Oops! You did it wrong!
                        </template>
                    </lv-fieldset>
                </lv-grid-column>
                <lv-grid-column :level="6">
                    <lv-fieldset label="Country" label-for="select-country" reset-button>
                        <lv-select id="select-country" />
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
    <lv-code lang="html" :code="code"/>
</template>

<script>
const code = `
<lv-grid>
    <lv-grid-row gap="1rem">
        <lv-grid-column :level="6">
            <lv-fieldset label="Username" label-for="input-username" reset-button>
                <lv-input placeholder="Enter username" id="input-username"/>
                <template #hint>
                    Please enter a username
                </template>
                <template #invalid>
                    Oops! You did it wrong!
                </template>
            </lv-fieldset>
        </lv-grid-column>
        <lv-grid-column :level="6">
            <lv-fieldset label="Country" label-for="select-country" reset-button>
                <lv-select id="select-country" />
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
