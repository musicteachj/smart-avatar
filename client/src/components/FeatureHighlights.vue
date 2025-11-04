<template>
  <v-row class="mt-8">
    <v-col cols="12">
      <v-card elevation="1" color="grey-lighten-5" class="pa-6">
        <h2 class="text-h5 font-weight-bold mb-4">Key Features</h2>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <div class="d-flex align-start">
              <v-icon color="primary" class="mr-2">mdi-palette</v-icon>
              <div>
                <div class="font-weight-bold">Smart Fallback</div>
                <div class="text-body-2 text-medium-emphasis">
                  Automatic initials with consistent colors
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <div class="d-flex align-start">
              <v-icon color="success" class="mr-2">mdi-responsive</v-icon>
              <div>
                <div class="font-weight-bold">Responsive</div>
                <div class="text-body-2 text-medium-emphasis">
                  Adapts to all screen sizes
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <div class="d-flex align-start">
              <v-icon color="warning" class="mr-2">mdi-play-circle</v-icon>
              <div>
                <div class="font-weight-bold">Video Support</div>
                <div class="text-body-2 text-medium-emphasis">
                  Interactive playback controls
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <div class="d-flex align-start">
              <v-icon color="error" class="mr-2">mdi-view-carousel</v-icon>
              <div>
                <div class="font-weight-bold">Multi-Media</div>
                <div class="text-body-2 text-medium-emphasis">
                  Mix images and videos
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup lang="ts"></script>

<style scoped></style>
