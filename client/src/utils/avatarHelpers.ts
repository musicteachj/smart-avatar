/**
 * Extract initials from a name
 * @param name - Full name to extract initials from
 * @returns Uppercase initials (max 2 characters)
 *
 * Examples:
 * - "John Smith" => "JS"
 * - "Alice" => "A"
 * - "Bob Van Der Berg" => "BB"
 */
export const getInitials = (name: string): string => {
  if (!name || name.trim().length === 0) {
    return "?";
  }

  const trimmedName = name.trim();
  const parts = trimmedName.split(/\s+/).filter((part) => part.length > 0);

  if (parts.length === 0) {
    return "?";
  }

  if (parts.length === 1) {
    // Single name: use first letter
    return parts[0]!.charAt(0).toUpperCase();
  }

  // Multiple names: use first letter of first and last name
  const firstInitial = parts[0]!.charAt(0).toUpperCase();
  const lastInitial = parts[parts.length - 1]!.charAt(0).toUpperCase();

  return `${firstInitial}${lastInitial}`;
};

/**
 * Generate a deterministic color from a name
 * @param name - Name to generate color for
 * @returns CSS color string
 */
export const getColorFromName = (name: string): string => {
  const colors = [
    "#e57373", // red
    "#f06292", // pink
    "#ba68c8", // purple
    "#9575cd", // deep purple
    "#7986cb", // indigo
    "#64b5f6", // blue
    "#4fc3f7", // light blue
    "#4dd0e1", // cyan
    "#4db6ac", // teal
    "#81c784", // green
    "#aed581", // light green
    "#ff8a65", // deep orange
    "#a1887f", // brown
    "#90a4ae", // blue grey
  ];

  if (!name) return colors[0];

  // Sum character codes to get consistent index
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }

  return colors[sum % colors.length];
};
