<template>
    <lv-heading v-space-after="0.5" :level="3">Avatar</lv-heading>
    <lv-heading v-space-after="1" sub :level="6">A user's avatar with a fallback to it's initials.</lv-heading>
    <lv-card v-space-after="1">
        <lv-group>
            <lv-avatar initials="LV" />
            <lv-avatar image="https://picsum.photos/id/64/512/512" />
        </lv-group>
    </lv-card>
    <lv-code :code="code" lang="html" />
</template>

<script>
const code = `
<lv-avatar initials="LV" />
<lv-avatar image="https://picsum.photos/id/64/512/512" />
`.trim();
export default {
    data() {
        return {
            code
        }
    }
}
</script>
