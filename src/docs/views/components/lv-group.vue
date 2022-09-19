<template>
    <lv-heading :level="3" sticky>Group</lv-heading>
    <lv-heading sub :level="6">Group elements with the power of flexbox</lv-heading>

    <lv-heading :level="5">Default Group</lv-heading>
    <lv-group>
        <div class="group-child">1</div>
        <div class="group-child">2</div>
        <div class="group-child">3</div>
        <div class="group-child">4</div>
    </lv-group>
</template>

<style>
.group-child {
    border: 1px dashed #cacaca;
    padding: 10px;
}
</style>
