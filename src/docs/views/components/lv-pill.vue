<template>
    <lv-heading :level="3" v-space-after="0.5">Pill</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">A rectangle that visualizes a tag (a.k.a chip)</lv-heading>
    <lv-card>
        <lv-group>
            <lv-pill text="Default"/>
            <lv-pill text="With Icon" icon="github"/>
            <lv-pill text="And Closable" icon="github" closable/>
        </lv-group>
    </lv-card>
</template>
