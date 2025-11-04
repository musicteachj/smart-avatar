<template>
  <v-container fluid class="pa-4">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="8">
        <!-- Header -->
        <div class="text-center mb-8">
          <h1 class="text-h3 font-weight-bold mb-3">
            Smart Avatar Component Demo
          </h1>
          <p class="text-subtitle-1 text-medium-emphasis">
            A versatile Vue 3 component that intelligently displays user avatars
            with support for initials, images, videos, and carousels
          </p>
        </div>

        <!-- Core Demo Examples -->
        <v-row v-if="user0 && user1 && user2 && user3">
          <!-- Example 1: Initials Only -->
          <v-col cols="12" sm="6" md="3">
            <v-card elevation="2" class="pa-4 h-100">
              <div class="d-flex flex-column align-center">
                <SmartAvatar
                  :name="user0.name"
                  :sources="user0.sources"
                  size="large"
                  :autoplay="false"
                  :loop="false"
                />
                <div class="text-center mt-4">
                  <h3 class="text-h6 font-weight-bold mb-2">Initials Avatar</h3>
                  <p class="text-body-2 text-medium-emphasis">
                    When no media sources are provided, displays user initials
                    with a deterministic color based on their name.
                  </p>
                  <v-chip size="small" color="primary" class="mt-2">
                    {{ user0.name }}
                  </v-chip>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- Example 2: Single Image -->
          <v-col cols="12" sm="6" md="3">
            <v-card elevation="2" class="pa-4 h-100">
              <div class="d-flex flex-column align-center">
                <SmartAvatar
                  :name="user1.name"
                  :sources="user1.sources"
                  size="large"
                  :autoplay="false"
                  :loop="false"
                />
                <div class="text-center mt-4">
                  <h3 class="text-h6 font-weight-bold mb-2">Image Avatar</h3>
                  <p class="text-body-2 text-medium-emphasis">
                    Displays a single image in a circular frame with elegant
                    shadow and proper sizing.
                  </p>
                  <v-chip size="small" color="success" class="mt-2">
                    {{ user1.name }}
                  </v-chip>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- Example 3: Video -->
          <v-col cols="12" sm="6" md="3">
            <v-card elevation="2" class="pa-4 h-100">
              <div class="d-flex flex-column align-center">
                <SmartAvatar
                  :name="user2.name"
                  :sources="user2.sources"
                  size="large"
                  :autoplay="false"
                  :loop="true"
                />
                <div class="text-center mt-4">
                  <h3 class="text-h6 font-weight-bold mb-2">Video Avatar</h3>
                  <p class="text-body-2 text-medium-emphasis">
                    Plays video content with interactive play/pause controls.
                    Hover to reveal controls.
                  </p>
                  <v-chip size="small" color="warning" class="mt-2">
                    {{ user2.name }}
                  </v-chip>
                </div>
              </div>
            </v-card>
          </v-col>

          <!-- Example 4: Carousel -->
          <v-col cols="12" sm="6" md="3">
            <v-card elevation="2" class="pa-4 h-100">
              <div class="d-flex flex-column align-center">
                <SmartAvatar
                  :name="user3.name"
                  :sources="user3.sources"
                  size="large"
                  :autoplay="true"
                  :loop="true"
                />
                <div class="text-center mt-4">
                  <h3 class="text-h6 font-weight-bold mb-2">Carousel Avatar</h3>
                  <p class="text-body-2 text-medium-emphasis">
                    Cycles through multiple images and videos automatically.
                    Supports navigation arrows.
                  </p>
                  <v-chip size="small" color="error" class="mt-2">
                    {{ user3.name }}
                  </v-chip>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <!-- Feature Highlights -->
        <FeatureHighlights />

        <!-- Size Variations -->
        <v-row class="mt-8">
          <v-col cols="12">
            <v-card elevation="2" class="pa-6">
              <h2 class="text-h5 font-weight-bold mb-4">Size Variations</h2>
              <p class="text-body-1 text-medium-emphasis mb-6">
                SmartAvatar supports three size options: small (48px), medium
                (96px), and large (144px)
              </p>
              <div
                v-if="user0 && user1 && user2"
                class="d-flex align-center justify-center flex-wrap ga-8"
              >
                <div class="text-center">
                  <SmartAvatar
                    :name="user0.name"
                    :sources="user0.sources"
                    size="small"
                    :autoplay="false"
                    :loop="false"
                  />
                  <div class="text-caption mt-2 font-weight-bold">Small</div>
                  <div class="text-caption text-medium-emphasis">48px</div>
                </div>
                <div class="text-center">
                  <SmartAvatar
                    :name="user1.name"
                    :sources="user1.sources"
                    size="medium"
                    :autoplay="false"
                    :loop="false"
                  />
                  <div class="text-caption mt-2 font-weight-bold">Medium</div>
                  <div class="text-caption text-medium-emphasis">96px</div>
                </div>
                <div class="text-center">
                  <SmartAvatar
                    :name="user2.name"
                    :sources="user2.sources"
                    size="large"
                    :autoplay="false"
                    :loop="false"
                  />
                  <div class="text-caption mt-2 font-weight-bold">Large</div>
                  <div class="text-caption text-medium-emphasis">144px</div>
                </div>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import SmartAvatar from "../components/SmartAvatar.vue";
import FeatureHighlights from "../components/FeatureHighlights.vue";
import { useAvatarStore } from "../stores/avatarStore";

const avatarStore = useAvatarStore();
const coreUsers = computed(() => avatarStore.getCoreUsers());

// Safe accessors with default values
const user0 = computed(() => coreUsers.value[0]);
const user1 = computed(() => coreUsers.value[1]);
const user2 = computed(() => coreUsers.value[2]);
const user3 = computed(() => coreUsers.value[3]);
</script>

<style scoped>
.h-100 {
  height: 100%;
}

.ga-8 {
  gap: 2rem;
}
</style>
