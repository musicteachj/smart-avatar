<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon>
      <v-toolbar-title>Smart Avatar</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
