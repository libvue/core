<template>
  <lv-layout>
    <template #menu>
      <lv-menu>
        <lv-button type="ghost">Home</lv-button>
      </lv-menu>
    </template>
    <template #content>
      <router-view />
    </template>
  </lv-layout>
</template>
