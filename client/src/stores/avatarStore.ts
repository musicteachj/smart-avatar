import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { User } from "../types/avatar";

/**
 * Avatar Store
 * Manages demo user data with various avatar configurations
 */
export const useAvatarStore = defineStore("avatar", () => {
  // Core demo users (satisfies PDF requirements)
  const coreUsers = ref<User[]>([
    {
      id: "1",
      name: "John Smith",
      sources: [], // Initials only
      role: "Software Engineer",
      bio: "Building great things with Vue and TypeScript",
      status: "online",
      email: "john.smith@example.com",
    },
    {
      id: "2",
      name: "Jane Doe",
      sources: [
        {
          type: "image",
          url: "https://picsum.photos/seed/jane/200/200",
        },
      ],
      role: "Product Designer",
      bio: "Crafting beautiful and intuitive user experiences",
      status: "busy",
      email: "jane.doe@example.com",
    },
    {
      id: "3",
      name: "Bob Johnson",
      sources: [
        {
          type: "video",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        },
      ],
      role: "Marketing Manager",
      bio: "Telling stories that connect with people",
      status: "away",
      email: "bob.johnson@example.com",
    },
    {
      id: "4",
      name: "Alice Wong",
      sources: [
        {
          type: "image",
          url: "https://picsum.photos/seed/alice1/200/200",
        },
        {
          type: "video",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        },
        {
          type: "image",
          url: "https://picsum.photos/seed/alice2/200/200",
        },
      ],
      role: "Creative Director",
      bio: "Leading creative vision across multiple projects",
      status: "online",
      email: "alice.wong@example.com",
    },
  ]);

  // Profile card users (for enhanced demo)
  const profileUsers = ref<User[]>([
    {
      id: "5",
      name: "Sarah Chen",
      sources: [
        {
          type: "image",
          url: "https://picsum.photos/seed/sarah/200/200",
        },
      ],
      role: "Frontend Developer",
      bio: "Passionate about creating accessible and performant web applications. Love working with Vue 3 and the latest web technologies.",
      status: "online",
      email: "sarah.chen@example.com",
    },
    {
      id: "6",
      name: "Michael Torres",
      sources: [
        {
          type: "image",
          url: "https://picsum.photos/seed/michael/200/200",
        },
        {
          type: "image",
          url: "https://picsum.photos/seed/michael2/200/200",
        },
      ],
      role: "UX Researcher",
      bio: "Uncovering user insights to drive better product decisions. Bridging the gap between users and design teams.",
      status: "offline",
      email: "michael.torres@example.com",
    },
    {
      id: "7",
      name: "Emily Rodriguez",
      sources: [], // Initials for variety
      role: "Data Scientist",
      bio: "Transforming complex data into actionable insights. Specializing in machine learning and predictive analytics.",
      status: "online",
      email: "emily.rodriguez@example.com",
    },
    {
      id: "8",
      name: "David Kim",
      sources: [
        {
          type: "video",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        },
      ],
      role: "DevOps Engineer",
      bio: "Building and maintaining robust CI/CD pipelines. Automating all the things to ship faster and safer.",
      status: "away",
      email: "david.kim@example.com",
    },
  ]);

  // All users combined - computed for reactivity
  const allUsers = computed(() => [...coreUsers.value, ...profileUsers.value]);

  // Getters
  const getUserById = (id: string) =>
    allUsers.value.find((user) => user.id === id);

  return {
    // State - exposed as refs for reactivity
    coreUsers,
    profileUsers,
    allUsers,
    // Getters
    getUserById,
  };
});
