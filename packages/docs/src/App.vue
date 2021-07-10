<template>
  <lv-layout>
    <template #menu>
      <lv-menu>
        <lv-menu-item to="http://www.google.com" label="Getting Started"/>
      </lv-menu>
    </template>
    <template #content>
      <router-view />
    </template>
  </lv-layout>
</template>
