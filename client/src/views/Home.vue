<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="viteLogoSrc"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col cols="12">
        <h1 class="text-h3 font-weight-bold mb-3">
          Welcome to Vite + Vue + Vuetify
        </h1>
        <p class="text-subtitle-1">
          This is a modern Vue 3 application with Vue Router and Vuetify
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import viteLogoUrl from '/vite.svg?url'

const viteLogoSrc = viteLogoUrl
</script>

