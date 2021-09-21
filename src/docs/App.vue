<template>
  <lv-layout>
    <template #menu>
      <lv-menu @click-header="$router.push('/')">
        <template #header>
          <lv-icon name="vuejs-alt" class="logo" :size="16"/> Libvue
        </template>
        <lv-menu-group label="Installation">
          <lv-menu-item icon="rocket" to="getting-started" label="Getting Started"/>
        </lv-menu-group>
        <lv-menu-group label="Components">
          <lv-menu-list icon="grid" label="Layout">
            <lv-menu-item to="lv-group" label="Group"/>
            <lv-menu-item to="lv-card" label="Card"/>
            <lv-menu-item to="lv-menu" label="Menu"/>
          </lv-menu-list>
          <lv-menu-list icon="pen" label="Writing">
            <lv-menu-item to="lv-heading" label="Heading"/>
            <lv-menu-item to="lv-paragraph" label="Paragraph"/>
            <lv-menu-item to="lv-quote" label="Quote"/>
            <lv-menu-item to="lv-code" label="Code"/>
            <lv-menu-item to="lv-notice" label="Notice"/>
          </lv-menu-list>
          <lv-menu-list icon="compass" label="Navigation">
            <lv-menu-item to="lv-button" label="Button"/>
          </lv-menu-list>
          <lv-menu-list icon="clipboard-notes" label="Form Elements">
            <lv-menu-item to="lv-input" label="Input"/>
            <lv-menu-item to="lv-checkbox" label="Checkbox"/>
          </lv-menu-list>
          <lv-menu-list icon="analytics" label="Data Visualization">
            <lv-menu-item to="lv-table" label="Table"/>
            <lv-menu-item to="lv-chart" label="Chart"/>
          </lv-menu-list>
        </lv-menu-group>
      </lv-menu>
    </template>
    <template #content>
      <router-view />
    </template>
  </lv-layout>
</template>

<style scoped>

.logo {
  margin-right: 5px;
  color: #ff2e77;
}
</style>
