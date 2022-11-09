<template>
    <lv-heading v-space-after="0.5" :level="3">Fieldset</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A composition of form controls, labels, hints & validations messages</lv-heading>
    <lv-card v-space-after="1">
        <lv-fieldset label="Username" label-for="input-username" reset-button>
            <lv-input placeholder="Enter username" id="input-username"/>
            <template #hint>
                The name of the user!
            </template>
            <template #invalid>
                Oops! You did it wrong!
            </template>
        </lv-fieldset>
    </lv-card>
    <lv-code lang="html" :code="code"/>
</template>

<script>
const code = `
<lv-fieldset label="Username" label-for="input-username" reset-button>
    <lv-input placeholder="Enter username" id="input-username"/>
    <template #hint>
        The name of the user!
    </template>
    <template #invalid>
        Oops! You did it wrong!
    </template>
</lv-fieldset>
`.trim();
export default {
    data() {
        return {
            code,
        }
    }
}
</script>
