<template>
  <lv-layout>
    <template #menu>
      <lv-menu>
        <template #header>
          Libvue Beta
        </template>
        <lv-menu-group label="Installation">
          <lv-menu-item icon="rocket" to="getting-started" label="Getting Started"/>
        </lv-menu-group>
        <lv-menu-group label="Components">
          <lv-menu-list icon="grid" label="Layout">
            <lv-menu-item to="lv-menu" label="Menu"/>
          </lv-menu-list>
          <lv-menu-list icon="clipboard-notes" label="Form Elements">
            <lv-menu-item to="lv-button" label="Button"/>
            <lv-menu-item to="lv-input" label="Input"/>
          </lv-menu-list>
        </lv-menu-group>
      </lv-menu>
    </template>
    <template #content>
      <router-view />
    </template>
  </lv-layout>
</template>
