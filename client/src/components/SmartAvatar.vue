<template>
  <div class="smart-avatar-container">
    <!-- Mode 1: Initials Display -->
    <v-avatar
      v-if="displayMode === 'initials'"
      :size="avatarSize"
      :style="{ backgroundColor }"
      class="smart-avatar elevation-3"
    >
      <span class="initials-text">{{ initials }}</span>
    </v-avatar>

    <!-- Mode 2: Single Media (Image or Video) -->
    <div
      v-else-if="displayMode === 'single'"
      class="smart-avatar-single"
      :style="{ width: `${avatarSize}px`, height: `${avatarSize}px` }"
    >
      <!-- Single Image -->
      <v-avatar
        v-if="singleSource?.type === 'image'"
        :size="avatarSize"
        class="smart-avatar elevation-3"
      >
        <v-img :src="singleSource.url" :alt="name" cover />
      </v-avatar>

      <!-- Single Video -->
      <div v-else-if="singleSource?.type === 'video'" class="video-container">
        <v-avatar :size="avatarSize" class="smart-avatar elevation-3">
          <video
            ref="videoRef"
            :src="singleSource.url"
            :autoplay="autoplay"
            :loop="loop"
            :muted="autoplay"
            class="video-element"
            @play="handleVideoPlay"
            @pause="handleVideoPause"
          />
        </v-avatar>

        <!-- Video Play/Pause Overlay -->
        <div class="video-overlay" @click="toggleVideo">
          <v-btn
            :icon="isVideoPlaying ? 'mdi-pause' : 'mdi-play'"
            size="small"
            color="white"
            class="video-control-btn"
          />
        </div>
      </div>
    </div>

    <!-- Mode 3: Carousel (Multiple Media) -->
    <div
      v-else-if="displayMode === 'carousel'"
      class="smart-avatar-carousel elevation-3"
      :style="{ width: `${avatarSize}px`, height: `${avatarSize}px` }"
    >
      <v-carousel
        :show-arrows="sources && sources.length > 1"
        :cycle="autoplay"
        :interval="3000"
        hide-delimiter-background
        height="100%"
        class="circular-carousel"
        hide-delimiters
      >
        <v-carousel-item
          v-for="(source, index) in sources"
          :key="index"
          class="carousel-item-wrapper"
        >
          <!-- Carousel Image Item -->
          <v-avatar
            v-if="source.type === 'image'"
            :size="avatarSize"
            class="smart-avatar"
          >
            <v-img :src="source.url" :alt="`${name} ${index + 1}`" cover />
          </v-avatar>

          <!-- Carousel Video Item -->
          <v-avatar
            v-else-if="source.type === 'video'"
            :size="avatarSize"
            class="smart-avatar"
          >
            <video
              :src="source.url"
              :autoplay="autoplay"
              :loop="loop"
              :muted="autoplay"
              class="video-element"
            />
          </v-avatar>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeUnmount } from "vue";
import type { SmartAvatarProps } from "../types/avatar";
import { getInitials, getColorFromName } from "../utils/avatarHelpers";

// Props
const props = withDefaults(defineProps<SmartAvatarProps>(), {
  sources: () => [],
  size: "medium",
});

// Size mapping to pixels
const sizeMap = {
  small: 48,
  medium: 96,
  large: 144,
};

// Computed properties
const avatarSize = computed(() => sizeMap[props.size]);
const initials = computed(() => getInitials(props.name));
const backgroundColor = computed(() => getColorFromName(props.name));

// Display mode determination
const displayMode = computed(() => {
  if (!props.sources || props.sources.length === 0) {
    return "initials";
  } else if (props.sources.length === 1) {
    return "single";
  } else {
    return "carousel";
  }
});

const singleSource = computed(() => {
  if (
    displayMode.value === "single" &&
    props.sources &&
    props.sources.length > 0
  ) {
    return props.sources[0];
  }
  return null;
});

// Video control state
const isVideoPlaying = ref(false);
const videoRef = ref<HTMLVideoElement | null>(null);

const toggleVideo = () => {
  if (videoRef.value) {
    if (isVideoPlaying.value) {
      videoRef.value.pause();
    } else {
      videoRef.value.play();
    }
    isVideoPlaying.value = !isVideoPlaying.value;
  }
};

const handleVideoPlay = () => {
  isVideoPlaying.value = true;
};

const handleVideoPause = () => {
  isVideoPlaying.value = false;
};

// Cleanup video resources before unmount
onBeforeUnmount(() => {
  if (videoRef.value) {
    videoRef.value.pause();
    videoRef.value = null;
  }
});
</script>

<style scoped>
.smart-avatar-container {
  display: inline-block;
  position: relative;
}

.smart-avatar {
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Initials styling */
.initials-text {
  color: white;
  font-weight: 600;
  font-size: 1.25rem;
  user-select: none;
}

/* Single media container */
.smart-avatar-single {
  position: relative;
  display: inline-block;
}

/* Video specific styling */
.video-container {
  position: relative;
  display: inline-block;
}

.video-element {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
}

.video-container:hover .video-overlay {
  opacity: 1;
}

.video-control-btn {
  pointer-events: none;
}

/* Carousel styling */
.smart-avatar-carousel {
  position: relative;
  display: inline-block;
  overflow: hidden;
  border-radius: 50%;
}

.circular-carousel {
  border-radius: 50%;
  overflow: hidden;
}

.circular-carousel :deep(.v-carousel__controls) {
  background: transparent;
}

.circular-carousel :deep(.v-btn) {
  opacity: 0;
  transition: opacity 0.2s ease;
  width: 24px;
  height: 24px;
  min-width: 24px;
}

.circular-carousel :deep(.v-btn .v-icon) {
  font-size: 16px;
}

.smart-avatar-carousel:hover :deep(.v-btn) {
  opacity: 1;
}

.carousel-item-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .initials-text {
    font-size: 1rem;
  }
}
</style>
