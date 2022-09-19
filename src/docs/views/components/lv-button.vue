<template>
    <lv-group>
        <lv-heading :level="3" v-space-after="0.5">Button</lv-heading>
        <lv-heading sub :level="6" v-space-after="1">A simple button component</lv-heading>
        <lv-button label="Default" to="getting-started" />
        <lv-button type="primary" label="Primary" />
        <lv-button icon="exclamation-octagon" label="Warning" type="warning" />
        <lv-button icon="info-circle" label="Info" type="info" />
        <lv-button icon="thumbs-up" label="Success" type="success" />
        <lv-button label="Loading" loading />
        <lv-button label="Disabled" disabled />
    </lv-group>
</template>
