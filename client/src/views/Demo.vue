<template>
  <v-container fluid class="pa-4">
    <v-row justify="center">
      <v-col cols="12" md="10" lg="10">
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

        <!-- Tab Navigation -->
        <v-card elevation="2" class="mb-6">
          <v-tabs
            v-model="activeTab"
            bg-color="primary"
            align-tabs="center"
            dark
          >
            <v-tab value="core">Core Examples</v-tab>
            <v-tab value="status">Status & Presence</v-tab>
            <v-tab value="lists">Lists</v-tab>
            <v-tab value="table">Data Table</v-tab>
          </v-tabs>
        </v-card>

        <!-- Tab Content -->
        <v-window v-model="activeTab">
          <!-- TAB 1: Core Examples -->
          <v-window-item value="core" class="pa-4">
            <v-row v-if="hasEnoughUsers">
              <!-- Example 1: Initials Only -->
              <v-col cols="12" sm="6" md="3">
                <v-card elevation="2" class="pa-4 h-100">
                  <div class="d-flex flex-column align-center">
                    <SmartAvatar
                      :name="coreUsers[0]!.name"
                      :sources="coreUsers[0]!.sources"
                      size="large"
                      :autoplay="false"
                      :loop="false"
                    />
                    <div class="text-center mt-4">
                      <h3 class="text-h6 font-weight-bold mb-2">
                        Initials Avatar
                      </h3>
                      <p class="text-body-2 text-medium-emphasis">
                        When no media sources are provided, displays user
                        initials with a deterministic color based on their name.
                      </p>
                      <v-chip size="small" color="primary" class="mt-2">
                        {{ coreUsers[0]!.name }}
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
                      :name="coreUsers[1]!.name"
                      :sources="coreUsers[1]!.sources"
                      size="large"
                      :autoplay="false"
                      :loop="false"
                    />
                    <div class="text-center mt-4">
                      <h3 class="text-h6 font-weight-bold mb-2">
                        Image Avatar
                      </h3>
                      <p class="text-body-2 text-medium-emphasis">
                        Displays a single image in a circular frame with elegant
                        shadow and proper sizing.
                      </p>
                      <v-chip size="small" color="success" class="mt-2">
                        {{ coreUsers[1]!.name }}
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
                      :name="coreUsers[2]!.name"
                      :sources="coreUsers[2]!.sources"
                      size="large"
                      :autoplay="false"
                      :loop="true"
                    />
                    <div class="text-center mt-4">
                      <h3 class="text-h6 font-weight-bold mb-2">
                        Video Avatar
                      </h3>
                      <p class="text-body-2 text-medium-emphasis">
                        Plays video content with interactive play/pause
                        controls. Hover to reveal controls.
                      </p>
                      <v-chip size="small" color="warning" class="mt-2">
                        {{ coreUsers[2]!.name }}
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
                      :name="coreUsers[3]!.name"
                      :sources="coreUsers[3]!.sources"
                      size="large"
                      :autoplay="true"
                      :loop="true"
                    />
                    <div class="text-center mt-4">
                      <h3 class="text-h6 font-weight-bold mb-2">
                        Carousel Avatar
                      </h3>
                      <p class="text-body-2 text-medium-emphasis">
                        Cycles through multiple images and videos automatically.
                        Supports navigation arrows.
                      </p>
                      <v-chip size="small" color="error" class="mt-2">
                        {{ coreUsers[3]!.name }}
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
                    SmartAvatar supports three size options: small (48px),
                    medium (96px), and large (144px)
                  </p>
                  <div
                    v-if="hasEnoughUsers"
                    class="d-flex align-center justify-center flex-wrap ga-8"
                  >
                    <div class="text-center">
                      <SmartAvatar
                        :name="coreUsers[0]!.name"
                        :sources="coreUsers[0]!.sources"
                        size="small"
                        :autoplay="false"
                        :loop="false"
                      />
                      <div class="text-caption mt-2 font-weight-bold">
                        Small
                      </div>
                      <div class="text-caption text-medium-emphasis">48px</div>
                    </div>
                    <div class="text-center">
                      <SmartAvatar
                        :name="coreUsers[1]!.name"
                        :sources="coreUsers[1]!.sources"
                        size="medium"
                        :autoplay="false"
                        :loop="false"
                      />
                      <div class="text-caption mt-2 font-weight-bold">
                        Medium
                      </div>
                      <div class="text-caption text-medium-emphasis">96px</div>
                    </div>
                    <div class="text-center">
                      <SmartAvatar
                        :name="coreUsers[2]!.name"
                        :sources="coreUsers[2]!.sources"
                        size="large"
                        :autoplay="false"
                        :loop="false"
                      />
                      <div class="text-caption mt-2 font-weight-bold">
                        Large
                      </div>
                      <div class="text-caption text-medium-emphasis">144px</div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>

          <!-- TAB 2: Status & Presence -->
          <v-window-item value="status" class="pa-4">
            <v-row>
              <v-col cols="12">
                <v-card elevation="2" class="pa-6 mb-6">
                  <h2 class="text-h5 font-weight-bold mb-2">
                    Status Badges & Tooltips
                  </h2>
                  <p class="text-body-1 text-medium-emphasis mb-6">
                    Show user presence with status badges and display additional
                    information on hover using tooltips.
                  </p>

                  <v-row>
                    <v-col
                      v-for="user in coreUsers"
                      :key="user.id"
                      cols="12"
                      sm="6"
                      md="3"
                    >
                      <v-card elevation="1" class="pa-4">
                        <div class="d-flex flex-column align-center">
                          <v-tooltip
                            :text="`${user.name} - ${user.role}`"
                            location="top"
                          >
                            <template v-slot:activator="{ props }">
                              <v-badge
                                :color="getStatusColor(user.status)"
                                dot
                                location="bottom right"
                                overlap
                                v-bind="props"
                              >
                                <SmartAvatar
                                  :name="user.name"
                                  :sources="user.sources"
                                  size="large"
                                  :autoplay="
                                    !!(user.sources && user.sources.length > 1)
                                  "
                                  :loop="true"
                                />
                              </v-badge>
                            </template>
                          </v-tooltip>
                          <div class="text-center mt-4">
                            <div class="text-subtitle-1 font-weight-bold">
                              {{ user.name }}
                            </div>
                            <div class="text-caption text-medium-emphasis">
                              {{ user.role }}
                            </div>
                            <v-chip
                              :color="getStatusColor(user.status)"
                              size="x-small"
                              class="mt-2"
                            >
                              {{ user.status }}
                            </v-chip>
                          </div>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>

              <!-- Badge Position Variations -->
              <v-col cols="12">
                <v-card elevation="2" class="pa-6">
                  <h2 class="text-h5 font-weight-bold mb-2">Badge Positions</h2>
                  <p class="text-body-1 text-medium-emphasis mb-6">
                    Badges can be positioned at different locations around the
                    avatar.
                  </p>
                  <div class="d-flex justify-center flex-wrap ga-8">
                    <div class="text-center">
                      <v-badge color="success" dot location="top right" overlap>
                        <SmartAvatar
                          :name="coreUsers[0]!.name"
                          :sources="coreUsers[0]!.sources"
                          size="large"
                          :autoplay="false"
                          :loop="false"
                        />
                      </v-badge>
                      <div class="text-caption mt-2">Top Right</div>
                    </div>
                    <div class="text-center">
                      <v-badge
                        color="error"
                        dot
                        location="bottom right"
                        overlap
                      >
                        <SmartAvatar
                          :name="coreUsers[1]!.name"
                          :sources="coreUsers[1]!.sources"
                          size="large"
                          :autoplay="false"
                          :loop="false"
                        />
                      </v-badge>
                      <div class="text-caption mt-2">Bottom Right</div>
                    </div>
                    <div class="text-center">
                      <v-badge
                        color="warning"
                        dot
                        location="bottom left"
                        overlap
                      >
                        <SmartAvatar
                          :name="coreUsers[2]!.name"
                          :sources="coreUsers[2]!.sources"
                          size="large"
                          :autoplay="false"
                          :loop="false"
                        />
                      </v-badge>
                      <div class="text-caption mt-2">Bottom Left</div>
                    </div>
                    <div class="text-center">
                      <v-badge
                        content="3"
                        color="error"
                        location="top right"
                        overlap
                      >
                        <SmartAvatar
                          :name="coreUsers[3]!.name"
                          :sources="coreUsers[3]!.sources"
                          size="large"
                          :autoplay="true"
                          :loop="true"
                        />
                      </v-badge>
                      <div class="text-caption mt-2">With Counter</div>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>

          <!-- TAB 3: Lists -->
          <v-window-item value="lists" class="pa-4">
            <v-row>
              <!-- Team Members List -->
              <v-col cols="12" md="6">
                <v-card elevation="2">
                  <v-card-title class="text-h6 font-weight-bold">
                    Team Members
                  </v-card-title>
                  <v-list lines="two">
                    <v-list-item
                      v-for="user in allUsers"
                      :key="user.id"
                      :title="user.name"
                      :subtitle="user.role"
                    >
                      <template v-slot:prepend>
                        <v-badge
                          :color="getStatusColor(user.status)"
                          dot
                          location="bottom right"
                          overlap
                        >
                          <SmartAvatar
                            :name="user.name"
                            :sources="user.sources"
                            size="medium"
                            :autoplay="
                              !!(user.sources && user.sources.length > 1)
                            "
                            :loop="true"
                          />
                        </v-badge>
                      </template>
                      <template v-slot:append>
                        <v-btn
                          icon="mdi-email"
                          variant="text"
                          size="small"
                        ></v-btn>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>

              <!-- Recent Messages List -->
              <v-col cols="12" md="6">
                <v-card elevation="2">
                  <v-card-title class="text-h6 font-weight-bold">
                    Recent Messages
                  </v-card-title>
                  <v-list lines="three">
                    <v-list-item
                      v-for="(user, index) in allUsers.slice(0, 5)"
                      :key="user.id"
                      :title="user.name"
                      :subtitle="user.bio"
                    >
                      <template v-slot:prepend>
                        <v-badge
                          :color="getStatusColor(user.status)"
                          :content="index < 2 ? '2' : undefined"
                          :dot="index >= 2"
                          location="top right"
                          overlap
                        >
                          <SmartAvatar
                            :name="user.name"
                            :sources="user.sources"
                            size="medium"
                            :autoplay="
                              !!(user.sources && user.sources.length > 1)
                            "
                            :loop="true"
                          />
                        </v-badge>
                      </template>
                      <template v-slot:append>
                        <div class="text-caption text-medium-emphasis">
                          {{
                            index === 0
                              ? "2m ago"
                              : index === 1
                              ? "1h ago"
                              : "Yesterday"
                          }}
                        </div>
                      </template>
                    </v-list-item>
                  </v-list>
                </v-card>
              </v-col>
            </v-row>
          </v-window-item>

          <!-- TAB 4: Data Table -->
          <v-window-item value="table" class="pa-4">
            <v-card elevation="2">
              <v-card-title class="d-flex align-center pa-4">
                <span class="text-h5 font-weight-bold">Team Directory</span>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                  variant="outlined"
                  density="compact"
                  class="search-field"
                ></v-text-field>
              </v-card-title>

              <v-data-table
                :headers="tableHeaders"
                :items="allUsers"
                :search="search"
                :items-per-page="10"
                class="elevation-0"
              >
                <!-- Avatar Column -->
                <template v-slot:item.avatar="{ item }">
                  <div class="py-2">
                    <v-badge
                      :color="getStatusColor(item.status)"
                      dot
                      location="bottom right"
                      overlap
                    >
                      <SmartAvatar
                        :name="item.name"
                        :sources="item.sources"
                        size="small"
                        :autoplay="!!(item.sources && item.sources.length > 1)"
                        :loop="true"
                      />
                    </v-badge>
                  </div>
                </template>

                <!-- Name Column -->
                <template v-slot:item.name="{ item }">
                  <div class="font-weight-bold">{{ item.name }}</div>
                </template>

                <!-- Status Column -->
                <template v-slot:item.status="{ item }">
                  <v-chip
                    :color="getStatusColor(item.status)"
                    size="small"
                    class="text-capitalize"
                  >
                    {{ item.status }}
                  </v-chip>
                </template>

                <!-- Actions Column -->
                <template v-slot:item.actions="{ item }">
                  <v-btn
                    icon="mdi-email"
                    size="small"
                    variant="text"
                    :href="`mailto:${item.email}`"
                  ></v-btn>
                  <v-btn icon="mdi-phone" size="small" variant="text"></v-btn>
                </template>
              </v-data-table>
            </v-card>
          </v-window-item>
        </v-window>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";
import SmartAvatar from "../components/SmartAvatar.vue";
import FeatureHighlights from "../components/FeatureHighlights.vue";
import { useAvatarStore } from "../stores/avatarStore";
import type { UserStatus } from "../types/avatar";

const avatarStore = useAvatarStore();
const { coreUsers, allUsers } = storeToRefs(avatarStore);

// Tab management
const activeTab = ref("core");

// Create safe accessors with proper type guards
const hasEnoughUsers = computed(() => coreUsers.value.length >= 4);

// Search for data table
const search = ref("");

// Data table headers
const tableHeaders = [
  { title: "", key: "avatar", sortable: false, width: "80px" },
  { title: "Name", key: "name", sortable: true },
  { title: "Role", key: "role", sortable: true },
  { title: "Email", key: "email", sortable: true },
  { title: "Status", key: "status", sortable: true },
  { title: "Actions", key: "actions", sortable: false, align: "end" as const },
];

// Status color helper
const getStatusColor = (status?: UserStatus) => {
  switch (status) {
    case "online":
      return "success";
    case "busy":
      return "error";
    case "away":
      return "warning";
    case "offline":
      return "grey";
    default:
      return "grey";
  }
};
</script>

<style scoped>
.h-100 {
  height: 100%;
}

.ga-8 {
  gap: 2rem;
}

.gap-2 {
  gap: 0.5rem;
}

.w-100 {
  width: 100%;
}

.search-field {
  max-width: 300px;
}
</style>
