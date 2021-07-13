<template>
  <lv-layout>
    <template #menu>
      <lv-menu>

        <lv-menu-group label="Installation">
          <lv-menu-item to="getting-started" label="Getting Started"/>
        </lv-menu-group>

        <lv-menu-group label="Components">
          <lv-menu-item to="lv-button" label="Button"/>
        </lv-menu-group>

      </lv-menu>
    </template>
    <template #content>
      <router-view />
    </template>
  </lv-layout>
</template>
