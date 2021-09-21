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
            <lv-menu-item label="Layout"/>
            <lv-menu-item to="lv-group" label="Group"/>
            <lv-menu-item to="lv-card" label="Card"/>
            <lv-menu-item label="Menu"/>
          </lv-menu-list>
          <lv-menu-list icon="pen" label="Writing">
            <lv-menu-item to="lv-heading" label="Heading"/>
            <lv-menu-item label="Paragraph"/>
            <lv-menu-item label="Quote"/>
            <lv-menu-item label="Kbd"/>
            <lv-menu-item label="Divider"/>
            <lv-menu-item to="lv-code" label="Code"/>
            <lv-menu-item to="lv-notice" label="Notice"/>
          </lv-menu-list>
          <lv-menu-list icon="compass" label="Navigation">
            <lv-menu-item to="lv-button" label="Button"/>
            <lv-menu-item label="Link"/>
            <lv-menu-item label="Breadcrumb"/>
            <lv-menu-item label="Tabs"/>
          </lv-menu-list>
          <lv-menu-list icon="clipboard-notes" label="Form Elements">
            <lv-menu-item to="lv-input" label="Input"/>
            <lv-menu-item to="lv-checkbox" label="Checkbox"/>
            <lv-menu-item label="Select"/>
            <lv-menu-item label="Radio"/>
            <lv-menu-item label="Switch"/>
          </lv-menu-list>
          <lv-menu-list icon="analytics" label="Data Visualization">
            <lv-menu-item to="lv-table" label="Table"/>
            <lv-menu-item to="lv-chart" label="Chart"/>
            <lv-menu-item label="Widget"/>
            <lv-menu-item label="Tag"/>
            <lv-menu-item label="Badge"/>
          </lv-menu-list>
          <lv-menu-list icon="image" label="Media">
            <lv-menu-item label="Icon"/>
            <lv-menu-item label="Image"/>
            <lv-menu-item label="Avatar"/>
          </lv-menu-list>
          <lv-menu-list icon="layers" label="Overlay">
            <lv-menu-item label="Modal"/>
            <lv-menu-item label="Drawer"/>
            <lv-menu-item label="Confirm"/>
            <lv-menu-item label="Tooltip"/>
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
