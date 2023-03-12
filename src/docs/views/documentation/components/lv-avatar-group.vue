<template>
    <lv-heading v-space-after="0.5" :level="3">Avatar</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">A user's avatar with a fallback to it's initials.</lv-heading>
    <lv-card v-space-after="1">
        <lv-avatar-group>
            <lv-avatar initials="AB" />
            <lv-avatar initials="CD" />
            <lv-avatar initials="EF" />
            <lv-avatar initials="GH" />
        </lv-avatar-group>
    </lv-card>
    <lv-code v-space-after="1" :code="code" lang="html" />
    <component-details component="LvAvatarGroup"></component-details>
</template>

<script>
import LvAvatarGroup from '../../../../lib/components/LvAvatarGroup/LvAvatarGroup.vue';

const code = `
<lv-avatar initials="LV" />
<lv-avatar initials="LV" size="2rem"/>
<lv-avatar image="https://i.pravatar.cc/512?img=19" />
<lv-avatar image="https://i.pravatar.cc/512?img=19" size="2rem" />
`.trim();
export default {
    components: { LvAvatarGroup },
    data() {
        return {
            code,
        };
    },
};
</script>
