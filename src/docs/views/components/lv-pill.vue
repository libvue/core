<template>
    <lv-heading :level="3" v-space-after="0.5">Pill</lv-heading>
    <lv-heading sub :level="6" v-space-after="1">A rectangle that visualizes a tag (a.k.a chip)</lv-heading>
    <lv-card>
        <lv-group>
            <lv-pill text="Default"/>
            <lv-pill text="With Icon" icon="github"/>
            <lv-pill text="And Closable" icon="github" closable/>
            <lv-pill text="Danger" color="danger"/>
            <lv-pill text="Success" color="success"/>
            <lv-pill text="Warning" color="warning"/>
            <lv-pill text="Danger" color="primary"/>
            <lv-pill text="Info" color="info"/>
            <lv-pill text="Light Danger" color="light-danger"/>
            <lv-pill text="Light Success" color="light-success"/>
            <lv-pill text="Light Warning" color="light-warning"/>
            <lv-pill text="Light Danger" color="light-primary" icon="github"/>
            <lv-pill text="Light Info" color="light-info"/>
            <lv-pill text="Default" color-type="outline"/>
            <lv-pill text="Danger" color="danger" color-type="outline"/>
            <lv-pill text="Success" color="success" color-type="outline"/>
            <lv-pill text="Warning" color="warning" color-type="outline" icon="github"/>
            <lv-pill text="Danger" color="primary" color-type="outline"/>
            <lv-pill text="Info" color="info" color-type="outline"/>

            <lv-pill text="Light Danger" color="light-danger" color-type="outline"/>
            <lv-pill text="Light Success" color="light-success" color-type="outline"/>
            <lv-pill text="Light Warning" color="light-warning" color-type="outline" icon="github"/>
            <lv-pill text="Light Danger" color="light-primary" color-type="outline"/>
            <lv-pill text="Light Info" color="light-info" color-type="outline"/>
        </lv-group>
    </lv-card>
</template>
