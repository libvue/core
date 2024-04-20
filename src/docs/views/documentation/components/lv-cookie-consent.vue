<template>
    <lv-heading v-space-after="0.5" :level="3">Cookie Consent</lv-heading>
    <lv-heading v-space-after="2" sub :level="6">Because we have to somehow</lv-heading>
    <lv-card v-space-after="1">
        <lv-button color="solid-primary" label="Toggle Consent" @click="showCookieConsent = !showCookieConsent" />
        <lv-cookie-consent
            :show="showCookieConsent"
            :modal="true"
            @accept="showCookieConsent = false"
            @decline="showCookieConsent = false"
        />
    </lv-card>
    <code-preview v-space-after="1" lang="html" :code="code" />
    <component-details :slots="['default']" component="LvCookieConsent"></component-details>
</template>

<script>
const code = `
<lv-button color="solid-primary" label="Toggle Consent" @click="showCookieConsent = !showCookieConsent" />
<lv-cookie-consent
    :show="showCookieConsent"
    :modal="true"
    @accept="showCookieConsent = false"
    @decline="showCookieConsent = false"
/>
`.trim();
export default {
    data() {
        return {
            code,
            showCookieConsent: false,
        };
    },
};
</script>
