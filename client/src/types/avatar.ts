/**
 * Media source type for avatar display
 */
export interface MediaSource {
  type: "image" | "video";
  url: string;
}

/**
 * Props interface for SmartAvatar component
 */
export interface SmartAvatarProps {
  sources?: MediaSource[];
  name: string;
  size?: "small" | "medium" | "large";
  autoplay: boolean;
  loop: boolean;
}

/**
 * User interface for demo data
 */
export interface User {
  id: string;
  name: string;
  sources?: MediaSource[];
  role?: string;
  bio?: string;
}
