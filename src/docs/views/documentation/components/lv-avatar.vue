<template>
    <lv-heading v-space-after="0.5" :level="3">Avatar</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A user's avatar with a fallback to it's initials.</lv-heading>
    <lv-card v-space-after="1">
        <lv-flex>
            <lv-avatar initials="LV" />
            <lv-avatar initials="LV" size="2rem"/>
            <lv-avatar image="https://i.pravatar.cc/512?img=19" />
            <lv-avatar image="https://i.pravatar.cc/512?img=19" size="2rem" />
        </lv-flex>
    </lv-card>
    <code-preview v-space-after="1" :code="code" lang="html" />
    <component-details component="LvAvatar"></component-details>
</template>

<script>
const code = `
<lv-avatar initials="LV" />
<lv-avatar initials="LV" size="2rem"/>
<lv-avatar image="https://i.pravatar.cc/512?img=19" />
<lv-avatar image="https://i.pravatar.cc/512?img=19" size="2rem" />
`.trim();
export default {
    data() {
        return {
            code
        }
    }
}
</script>
